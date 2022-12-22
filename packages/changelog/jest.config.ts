import base from '../../jest.config.base';
import { Config } from '@umijs/test';

const packageName = '@gitmoji/conventional-changelog-gitmoji-config';

const root = '<rootDir>/packages/changelog';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
