import type { PluginSpec } from 'semantic-release';
import type { NPMPluginOpts } from '../type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const npm = (options?: NPMPluginOpts): PluginSpec => {
  if (
    !options ||
    (typeof options.pkgRoot !== 'string' &&
      typeof options.npmPublish !== 'boolean' &&
      typeof options.tarballDir === 'undefined')
  )
    return '@semantic-release/npm';

  return ['@semantic-release/npm', options];
};

export default npm;
