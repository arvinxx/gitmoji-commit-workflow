const base = require('../../jest.config.base');

const packageName = '@gitmoji/parser-opts';

const root = '<rootDir>/packages/parser-opts';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
