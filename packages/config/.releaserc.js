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
    '@semantic-release/npm', //如果是npm包会自动更新版本号并发布
    ['@semantic-release/github'], // 推送代码回到GitHub
    [
      '@semantic-release/git', //发布release
      {
        assets: [
          // 这里的 assets 配置的是要重新 push 回去的东西
          // 如果不列的话会将全部内容都合并到 release 中
          'CHANGELOG.md',
          'package.json',
        ],
        message: ':bookmark: chore(release): v${nextRelease.version} [skip ci]',
      },
    ],
  ],
};
