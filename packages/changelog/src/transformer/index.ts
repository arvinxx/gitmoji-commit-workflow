import { getDisplayName } from './typeDisplayName';
import { scopeMapDisplayName } from './scopeMapDisplayName';
import type { CustomConfig } from '../customConfig';
import type { Commit } from 'conventional-commits-parser';
import type { Context } from 'conventional-changelog-writer';
import type { CommitTypes } from '@gitmoji/commit-types';

import types from '@gitmoji/commit-types';

export default (customConfig: CustomConfig) => (
  commit: Commit,
  context: Context,
) => {
  let discard = true;
  const issues = [];

  commit.notes.forEach((note) => {
    note.title = `${
      customConfig?.withEmoji === false ? '' : '💥 '
    }BREAKING CHANGES`;

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
  });

  /** * 处理 scope ** */
  if (commit.scope === '*') {
    commit.scope = '';
  }

  if (customConfig.displayScopes) {
    if (!customConfig.displayScopes?.includes(commit.scope)) return;
  }

  if (customConfig.scopeDisplayName) {
    commit.scope = scopeMapDisplayName(
      commit.scope,
      customConfig.scopeDisplayName,
    );
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

  return commit;
};
