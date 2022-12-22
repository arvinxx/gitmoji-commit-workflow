import base from '../../jest.config.base';
import { Config } from '@umijs/test';

const packageName = 'semantic-release-config-gitmoji';

const root = '<rootDir>/packages/release-config';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
