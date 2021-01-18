import types, { CommitTypes } from '@gitmoji/commit-types';

import type { Context, Options } from 'conventional-changelog-writer';
import type { Commit } from 'conventional-commits-parser';
import type { CustomConfig } from './customConfig';

import { scopeMapDisplayName, getDisplayName } from './transformer';

const transformer = (customConfig: CustomConfig) => (
  commit: Commit,
  context: Context,
) => {
  let discard = true;
  const issues = [];

  commit.notes.forEach((note) => {
    note.title = 'BREAKING CHANGES';
    discard = false;
  });

  let displayTypes = types;

  if (customConfig.displayTypes) {
    displayTypes = customConfig.displayTypes;
  }

  if (!displayTypes.includes(<CommitTypes>commit.type) && discard) return;

  // 修改 type 标题
  commit.type = getDisplayName(commit.type);

  if (commit.scope === '*') {
    commit.scope = '';
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

export default (customConfig: CustomConfig): Options => ({
  transform: transformer(customConfig),
  groupBy: 'type',
  commitGroupsSort: 'title',
  commitsSort: ['scope', 'subject'],
  noteGroupsSort: 'title',

  // notesSort: (a, b) => {
  //   return compareFunc(a, b) as boolean;
  // },
});
