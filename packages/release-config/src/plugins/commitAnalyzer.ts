import type { ReleaseRule } from '../type';
import type { PluginSpec } from 'semantic-release';

/**
 * commit analyzer
 * @param releaseRules
 */
const commitAnalyzer = (releaseRules: ReleaseRule[] = []): PluginSpec => [
  '@semantic-release/commit-analyzer',
  {
    // 使用 changelog-gitmoji-config 自定义配置，如果不填则是默认的 conventional-changelog-angular
    config: 'conventional-changelog-gitmoji-config',
    // 默认情况下 style 和 build 都会触发新的构建
    releaseRules: [
      { type: 'style', release: 'patch' },
      { type: 'build', release: 'patch' },
    ].concat(releaseRules),
  },
];

export default commitAnalyzer;
