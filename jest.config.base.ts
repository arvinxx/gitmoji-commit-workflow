import { createConfig, Config } from '@umijs/test';
import path from 'path';

const base: Config.InitialOptions = createConfig({
  jsTransformer: 'esbuild',
  target: 'node',
});

delete base.testTimeout;

const config: Config.InitialOptions = {
  ...base,
  moduleNameMapper: {
    ...base.moduleNameMapper,
    'commitlint-plugin-gitmoji': '<rootDir>/packages/commitlint-plugin/src',
    '@gitmoji/parser-opts': '<rootDir>/packages/parser-opts/src',
    '@gitmoji/commit-types': '<rootDir>/packages/commit-types/src',
  },
  rootDir: path.resolve(__dirname, '.'),
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/', '/es/'],
};

export default config;
