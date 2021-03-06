import type { Options } from 'semantic-release';

import { createConfig } from './createConfig';

const defaultConfig: Options = createConfig();

export default defaultConfig;

export type { ReleaseRule, Options } from './type';
