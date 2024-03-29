import type { Context } from 'conventional-changelog-writer';
import { CustomConfig } from '../customConfig';
import { defineTypeMap } from '../transformer/typeDisplayName';
export default (customConfig: CustomConfig) => (context: Context): Context => {
  const subCommitScope = customConfig?.scopeDisplayName?.['*'] || null;
  const authors = {};
  const typeMap = defineTypeMap(customConfig.customTypeMap);
  context.commitGroups = context.commitGroups.map((item) => {
    const subtitle = Object.values(typeMap).find(
      (i) =>
        item.title.includes(i['emoji']) ||
        item.title.includes(i['en-US']) ||
        item.title.includes(i['zh-CN']),
    ).subtitle;
    let group;
    let commits = item.commits.sort((a, b) => {
      if (a.scope === subCommitScope && b.scope === subCommitScope) {
        return 0;
      } else if (a.scope === subCommitScope) {
        return 1;
      } else if (b.scope === subCommitScope) {
        return -1;
      } else {
        return 0;
      }
    });
    commits = commits.map((c, index) => {
      if (group !== c.scope) {
        group = c.scope;
        c.first = true;
      } else {
        c.first = false;
      }
      if (!commits[index + 1] || group !== commits[index + 1].scope) {
        c.last = true;
      } else {
        c.last = false;
      }
      if (c.authorAvatar && !authors[c.authorEmail]) {
        authors[c.authorEmail] = {
          authorName: c.authorName,
          authorEmail: c.authorEmail,
          authorAvatar: c.authorAvatar,
          authorUrl: c.authorUrl,
        };
      }
      return c;
    });
    return {
      title: item.title,
      subtitle,
      commits,
    };
  });
  context.authors = Object.values(authors);
  return context;
};
