import type { CommitTypes } from '@gitmoji/commit-types';
import type { Release } from 'semantic-release';

export interface ReleaseRule {
  type: CommitTypes;
  release: Release['type'];
}

export interface Options extends GitPluginOpts, NPMPluginOpts {
  releaseRules?: ReleaseRule[];
  changelogTitle?: string;
  changelogFile?: string;
  /**
   * 开启 npm 插件
   * @default true
   */
  enableNPM?: boolean;
  /**
   * 开启 github 插件
   * @default true
   */
  enableGithub?: boolean;
}

export interface GitPluginOpts {
  /**
   * The message for the release commit. See [message](#message).
   * @default :bookmark: chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}
   */
  message?: string;
  /**
   * Files to include in the release commit.
   * Set to `false` to disable adding files to the release commit. See [assets](#assets).
   * @default ['CHANGELOG.md', 'package.json']
   */
  assets?: string[] | false;
}

export interface NPMPluginOpts {
  /**
   *  Whether to publish the `npm` package to the registry. If `false` the `package.json` version will still be updated.
   *  `false` if the `package.json` [private](https://docs.npmjs.com/files/package.json#private) property is `true`,
   *  `true` otherwise
   */
  npmPublish?: boolean;
  /**
   *Directory path to publish.
   * default: `.`
   */
  pkgRoot?: string;
  tarballDir?: string | false;
}
