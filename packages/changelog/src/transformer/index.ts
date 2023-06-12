import fetch from '@ardatan/sync-fetch';
import type { CommitTypes } from '@gitmoji/commit-types';
import types from '@gitmoji/commit-types';
import type { Context } from 'conventional-changelog-writer';
import type { Commit } from 'conventional-commits-parser';
import pangu from 'pangu';
import type { CustomConfig } from '../customConfig';
import { scopeMapDisplayName } from './scopeMapDisplayName';
import { getDisplayName } from './typeDisplayName';
const capitalizeFirstLetter = (str: string): string => {
  const firstLetter = String(str).slice(0, 1).toUpperCase();
  const remainingStr = String(str).slice(1);
  return firstLetter + remainingStr;
};

const cacheUsers = {};

export default (customConfig: CustomConfig) => (commit: Commit, context: Context) => {
  let discard = true;
  const issues = [];

  commit.notes.forEach((note) => {
    note.title = `${customConfig?.withEmoji === false ? '' : '💥 '}BREAKING CHANGES`;

    discard = false;
  });

  let displayTypes = types;

  if (customConfig.displayTypes) {
    displayTypes = customConfig.displayTypes;
  }

  if (!displayTypes.includes(<CommitTypes>commit.type) && discard) return;

  // 修改 type 标题
  commit.type = getDisplayName(commit.type, {
    language: customConfig.titleLanguage,
    withEmoji: customConfig.withEmoji,
    customTypeMap: customConfig.customTypeMap,
  });

  /** * 处理 scope ** */
  if (commit.scope === '*') {
    commit.scope = '';
  }

  if (customConfig.displayScopes) {
    if (!customConfig.displayScopes?.includes(commit.scope)) return;
  }

  if (customConfig.scopeDisplayName) {
    commit.scope = scopeMapDisplayName(commit.scope, customConfig.scopeDisplayName);
  }

  if (typeof commit.hash === 'string') {
    commit.hash = commit.hash.substring(0, 7);
  }

  if (typeof commit.subject === 'string') {
    let url = context.repository
      ? `${context.host}/${context.owner}/${context.repository}`
      : context.repoUrl;
    if (url) {
      url = `${url}/issues/`;
      // Issue URLs.
      commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
        issues.push(issue);
        return `[#${issue}](${url}${issue})`;
      });
    }
    if (context.host) {
      // User URLs.
      commit.subject = commit.subject.replace(
        /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
        (_, username) => {
          if (username.includes('/')) {
            return `@${username}`;
          }

          return `[@${username}](${context.host}/${username})`;
        },
      );
    }
  }

  // remove references that already appear in the subject
  commit.references = commit.references.filter((reference) => {
    return issues.indexOf(reference.issue) === -1;
  });

  // format
  if (commit.subject) {
    commit.rawSubject = commit.subject;
    commit.subject = pangu.spacing(capitalizeFirstLetter(commit.subject));
  }

  if (customConfig.showAuthor && customConfig.showAuthorAvatar && commit.authorEmail) {
    if (!cacheUsers[commit.authorEmail]) {
      const authorInfo = fetch(
        `https://api.github.com/search/users?q=${commit.authorEmail}`,
      ).json();
      if (authorInfo?.items?.length > 0) {
        cacheUsers[commit.authorEmail] = authorInfo.items[0];
      } else {
        cacheUsers[commit.authorEmail] = 'unknown';
      }
    }

    if (cacheUsers[commit.authorEmail] !== 'unknown') {
      const userInfo = cacheUsers[commit.authorEmail];
      commit.authorName = userInfo.login;
      commit.authorAvatar = userInfo.avatar_url;
      commit.authorUrl = userInfo.url;
    }
  }

  return commit;
};
