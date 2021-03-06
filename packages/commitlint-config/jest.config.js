const base = require('../../jest.config.base');

const packageName = 'commitlint-config-gitmoji';

const root = '<rootDir>/packages/commitlint-config';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
