import base from '../../jest.config.base';
import { Config } from '@umijs/test';

const packageName = '@gitmoji/gitmoji-regex';

const root = '<rootDir>/packages/gitmoji-regex';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
