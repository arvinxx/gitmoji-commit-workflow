import type { Options as SemRelOptions, PluginSpec } from 'semantic-release';

import type { Options } from './type';
import commitAnalyzer from './commitAnalyzer';
import git from './git';
import npm from './npm';

export type { ReleaseRule, Options } from './type';

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
    opts.enableNPM ? npm(options) : '',
    /* 将生成结果发布到 Github */
    opts.enableGithub ? '@semantic-release/github' : '',
    /* 推送代码回到 Git */
    git(options),
  ];

  return {
    plugins: plugins.filter((p) => !!p),
  };
};
