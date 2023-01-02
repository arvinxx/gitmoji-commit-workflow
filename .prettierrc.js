const config = require('@umijs/max/prettier');

module.exports = {
  ...config,
  printWidth: 100,
  overrides: [
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        proseWrap: 'preserve',
      },
    },
  ],
};
