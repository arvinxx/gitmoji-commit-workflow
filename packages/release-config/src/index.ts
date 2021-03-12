import type { Options } from 'semantic-release';

import _createConfig from './createConfig';

const defaultConfig: Options = _createConfig();

export const createConfig = _createConfig;

export default defaultConfig;
