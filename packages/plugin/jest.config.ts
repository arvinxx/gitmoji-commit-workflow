const base = require('../../jest.config.base');

const packageName = 'commitlint-plugin-gitmoji';

const root = '<rootDir>/packages/plugin';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],

  name: packageName,
  displayName: packageName,
};
