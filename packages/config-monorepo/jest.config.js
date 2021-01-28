const base = require('../../jest.config.base');

const packageName = 'commitlint-config-gitmoji-monorepo';

const root = '<rootDir>/packages/config-monorepo';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
