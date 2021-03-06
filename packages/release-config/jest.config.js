const base = require('../../jest.config.base');

const packageName = 'semantic-release-config-gitmoji-module-github';

const root = '<rootDir>/packages/release-config';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
