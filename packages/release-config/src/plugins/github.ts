import type { PluginSpec } from 'semantic-release';
import type { GithubPluginOpts } from '../type';

/**
 * github
 * @param options
 */
const github = (options: GithubPluginOpts = {}): PluginSpec => {
  const noOpts =
    options &&
    Object.values(options).filter((i) => typeof i !== 'undefined').length === 0;

  if (!options || noOpts) return '@semantic-release/github';

  const { githubAssets, ...config } = options;
  return [
    '@semantic-release/github',
    {
      assets: githubAssets,
      ...config,
    },
  ];
};

export default github;
