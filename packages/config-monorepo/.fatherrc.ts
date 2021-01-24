module.exports = {
  entry: 'src/index.ts',
  cjs: 'babel',
  pkgs: [
    'commitlint-plugin-gitmoji',
    '@gitmoji/parser-opts',
    '@gitmoji/commit-types',
  ],
};
