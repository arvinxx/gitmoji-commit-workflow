import type { CommitTypes } from '@gitmoji/commit-types';
import type { Release } from 'semantic-release';

export interface ReleaseRule {
  type: CommitTypes;
  release: Release['type'];
}

export interface Options extends GitPluginOpts {
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
