module.exports = {
  extends: ['./packages/commitlint-config/lib/index.js'],
  rules: {
    'footer-leading-blank': [0, 'never'],
    'header-max-length': [0, 'never'],
  },
};
