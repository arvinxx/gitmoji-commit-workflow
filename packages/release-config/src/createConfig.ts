import type { Options as SemRelOptions, PluginSpec } from 'semantic-release';

import type { Options } from './type';
import commitAnalyzer from './commitAnalyzer';

export const createConfig = (options?: Options): SemRelOptions => {
  const opts = {
    changelogTitle: '# Changelog',
    changelogFile: 'CHANGELOG.md',
    enableNPM: true,
    enableGithub: true,
    ...options,
  };
  const plugins: PluginSpec[] = [
    /* 负责解析 commit */
    commitAnalyzer(opts.releaseRules),
    /* 此处生成 github-release 的日志 */
    [
      '@semantic-release/release-notes-generator',
      {
        config: 'conventional-changelog-gitmoji-config',
      },
    ],
    /* 此处会调用上一个插件生成的新增日志，然后合并到原有日志中 */
    [
      '@semantic-release/changelog',
      {
        changelogFile: opts.changelogFile,
        changelogTitle: opts.changelogTitle,
      },
    ],
    /* 自动更新版本号 如果没有 private ,会作为 npm 模块进行发布 */
    opts.enableNPM ? '@semantic-release/npm' : '',
    /* 将生成结果发布到 Github */
    opts.enableGithub ? '@semantic-release/github' : '',
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
  ];

  return {
    plugins: plugins.filter((p) => !!p),
  };
};
