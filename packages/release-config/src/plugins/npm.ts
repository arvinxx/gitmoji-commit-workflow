import type { PluginSpec } from 'semantic-release';
import type { NPMPluginOpts } from '../type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const npm = (options?: NPMPluginOpts): PluginSpec => {
  // if using monorepo, use "@semrel-extra/npm" instead of the official package
  // https://github.com/dhoulb/multi-semantic-release#npm-invalid-npm-token
  const pkg = options?.monorepo ? '@semrel-extra/npm' : '@semantic-release/npm';

  if (
    !options ||
    (typeof options.pkgRoot !== 'string' &&
      typeof options.npmPublish !== 'boolean' &&
      typeof options.tarballDir === 'undefined')
  )
    return pkg;

  return [pkg, options];
};

export default npm;
