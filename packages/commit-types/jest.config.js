const base = require('../../jest.config.base');

const packageName = '@gitmoji/commit-types';

const root = '<rootDir>/packages/commit-types';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
