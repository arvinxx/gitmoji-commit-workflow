import type { Options } from 'semantic-release';

const config: Options = {
  plugins: [
    /* 负责解析 commit */
    [
      '@semantic-release/commit-analyzer',
      {
        // 使用 changelog-gitmoji-config 自定义配置，如果不填则是默认的 conventional-changelog-angular
        config: 'conventional-changelog-gitmoji-config',
      },
    ],
    /* 此处生成 github-release 的日志 */
    [
      '@semantic-release/release-notes-generator',
      {
        // 指定配置，这里才是负责生成日志的，也就是说，如果自定义了writerOpts，只有在这里写才会生效
        config: 'conventional-changelog-gitmoji-config',
      },
    ],
    /* 此处会调用上一个插件生成的新增日志，然后合并到原有日志中 */
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      },
    ],
    /* 自动更新版本号 如果没有 private ,会作为 npm 模块进行发布 */
    '@semantic-release/npm',
    /* 将生成结果发布到 Github */
    '@semantic-release/github',
    /* 推送代码回到 Git */
    [
      '@semantic-release/git',
      {
        assets: [
          // 这里的 assets 配置的是要重新 push 回去的东西
          // 如果不列的话会将全部内容都合并到 release 中
          'CHANGELOG.md',
          'package.json',
        ],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          ':bookmark: chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}',
      },
    ],
  ],
};

export default config;
