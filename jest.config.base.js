const {
  default: umiConfig,
} = require('@umijs/test/lib/createDefaultConfig/createDefaultConfig');

const path = require('path');
const defaultConfig = umiConfig(process.cwd(), {});

module.exports = {
  ...defaultConfig,
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    'commitlint-plugin-gitmoji': '<rootDir>/packages/commitlint-plugin/src',
    '@gitmoji/parser-opts': '<rootDir>/packages/parser-opts/src',
    '@gitmoji/commit-types': '<rootDir>/packages/commit-types/src',
  },
  rootDir: path.resolve(__dirname, '.'),
};
