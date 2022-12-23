import base from '../../jest.config.base';
import { Config } from '@umijs/test';

const packageName = '@gitmoji/parser-opts';

const root = '<rootDir>/packages/parser-opts';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
