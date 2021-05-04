const base = require('../../jest.config.base');

const packageName = 'commitlint-plugin-gitmoji';

const root = '<rootDir>/packages/commitlint-plugin';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  setupFiles: [...base.setupFiles],
  name: packageName,
  displayName: packageName,
};
