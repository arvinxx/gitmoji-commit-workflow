const config = require('../../.fatherrc');

module.exports = {
  ...config,
  pkgs: [
    'commitlint-plugin-gitmoji',
    '@gitmoji/parser-opts',
    '@gitmoji/commit-types',
  ],
};
