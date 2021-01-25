const base = require('../../.releaserc');

module.exports = {
  ...base,
  plugins: [
    ...base.plugins,
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# conventional-changelog-gitmoji-config 更新日志',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message:
          ':bookmark: chore(release): ${nextRelease.gitTag} [skip ci] \n\nhttps://github.com/arvinxx/commit-gitmoji/releases/tag/${nextRelease.gitTag}',
      },
    ],
  ],
};
