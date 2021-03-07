import type { PluginSpec } from 'semantic-release';
import type { GitPluginOpts } from '../type';

/**
 * git
 * @param options
 */
const git = (options: GitPluginOpts = {}): PluginSpec => {
  return [
    '@semantic-release/git',
    {
      assets:
        typeof options.gitAssets === 'boolean'
          ? false
          : [
              // 这里的 assets 配置的是要重新 push 回去的东西
              // 如果不列的话会将全部内容都合并到 release 中
              'CHANGELOG.md',
              'package.json',
            ]
              .concat(options.gitAssets)
              .filter((a) => a),
      message: options.message
        ? options.message
        : // eslint-disable-next-line no-template-curly-in-string
          ':bookmark: chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}',
    },
  ];
};

export default git;
