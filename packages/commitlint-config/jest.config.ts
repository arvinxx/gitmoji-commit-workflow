import base from '../../jest.config.base';
import { Config } from '@umijs/test';

const packageName = 'commitlint-config-gitmoji';

const root = '<rootDir>/packages/commitlint-config';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
