import type { CommitTypes } from '@gitmoji/commit-types';
import type { Release } from 'semantic-release';

export interface ReleaseRule {
  type: CommitTypes;
  release: Release['type'];
}

export interface Options {
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
