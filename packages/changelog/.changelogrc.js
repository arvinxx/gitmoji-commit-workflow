const base = require('../../.changelogrc');

module.exports = {
  ...base,
  titleLanguage: 'mix',
  showAuthor: true,
  showAuthorAvatar: true,
  newlineTimestamp: true,
  reduceHeadingLevel: true,
  scopeDisplayName: {
    '*': 'misc',
  },
  addBackToTop: true,
  showSummary: true,
};
