// export  as module.exports
export = {
  // Test URL: https://regex101.com/r/YxXWi5/9
  // 相关 issue: 是否应该允许用中文? #https://github.com/arvinxx/gitmoji-commit-workflow/issues/8
  headerPattern: /^(?::\w*:\s)?(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
};
