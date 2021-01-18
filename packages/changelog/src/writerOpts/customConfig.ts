import { resolve } from 'path';
import { CommitTypes } from '@gitmoji/commit-types';

export interface CustomConfig {
  /**
   * scope 在 Changelog 中的显示信息
   */
  scopeDisplayName?: Record<string, string>;
  /**
   * 待显示的 type 组
   */
  displayTypes?: CommitTypes[];
  /**
   * 待显示的 scope
   */
  displayScopes?: string[];
  /**
   * 是否显示作者
   */
  showAuthor?: boolean;
}

let changelogrc: CustomConfig = {};
let changelogConfig: CustomConfig = {};

// .changelogrc.js
try {
  changelogrc = require(resolve(process.cwd(), '.changelogrc.js'));
} catch (e) {}

// changelog.config.js
try {
  changelogConfig = require(resolve(process.cwd(), 'changelog.config.js'));
} catch (e) {}

const pkg: CustomConfig = { ...changelogrc, ...changelogConfig };

export default pkg;
