const config = require('../../.fatherrc');

module.exports = {
  ...config,
  pkgs: ['@gitmoji/commit-types', '@gitmoji/parser-opts'],
};
