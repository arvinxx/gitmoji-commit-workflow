import type { CommitTypes } from '@gitmoji/commit-types';
import { cosmiconfigSync } from 'cosmiconfig';

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

const explorer = cosmiconfigSync('changelog');

const { config } = explorer.search();

export default config;
