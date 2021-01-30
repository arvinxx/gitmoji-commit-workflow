const base = require('../../jest.config.base');

const packageName = '@gitmoji/conventional-changelog-gitmoji-config';

const root = '<rootDir>/packages/changelog';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
