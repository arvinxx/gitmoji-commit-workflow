import base from '../../jest.config.base';
import { Config } from '@umijs/test';

const packageName = 'commitlint-plugin-gitmoji';

const root = '<rootDir>/packages/commitlint-plugin';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
