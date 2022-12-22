import base from '../../jest.config.base';
import { Config } from '@umijs/test';

const packageName = '@gitmoji/commit-types';

const root = '<rootDir>/packages/commit-types';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
