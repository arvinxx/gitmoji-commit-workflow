import type { NPMPluginOpts } from './type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const npm = (options?: NPMPluginOpts) => {
  if (!options) return '@semantic-release/npm';
  return ['@semantic-release/npm', options];
};

export default npm;
