module.exports = {
  entry: 'src/index.ts',
  cjs: 'babel',
  target: 'node',
  extraBabelPlugins: ['add-module-exports'],
};
