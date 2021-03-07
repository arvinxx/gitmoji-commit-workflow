import type { Options as SemRelOptions, PluginSpec } from 'semantic-release';

import type { Options } from './type';
import commitAnalyzer from './plugins/commitAnalyzer';
import git from './plugins/git';
import github from './plugins/github';
import npm from './plugins/npm';

export type { ReleaseRule, Options } from './type';

const createConfig = (options?: Options): SemRelOptions => {
  const opts = {
    changelogTitle: '# Changelog',
    changelogFile: 'CHANGELOG.md',
    enableNPM: true,
    enableGithub: true,
    ...options,
  };
  //  npm config
  const { npmPublish, pkgRoot, tarballDir } = opts;
  const npmConfig = npm({ npmPublish, pkgRoot, tarballDir });

  // github config
  const {
    githubUrl,
    proxy,
    releasedLabels,
    failTitle,
    githubApiPathPrefix,
    labels,
    failComment,
    assignees,
    addReleases,
    githubAssets,
  } = opts;
  const githubConfig = github({
    githubUrl,
    proxy,
    releasedLabels,
    failTitle,
    githubApiPathPrefix,
    labels,
    failComment,
    assignees,
    addReleases,
    githubAssets,
  });

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
    opts.enableNPM ? npmConfig : '',
    /* 将生成结果发布到 Github */
    opts.enableGithub ? githubConfig : '',
    /* 推送代码回到 Git */
    git(options),
  ];

  return {
    plugins: plugins.filter((p) => !!p),
  };
};

export default createConfig;
