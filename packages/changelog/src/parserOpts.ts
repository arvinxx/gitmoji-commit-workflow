import gitmojiParserOpts from '@gitmoji/parser-opts';

export = {
  ...gitmojiParserOpts,
  noteKeywords: [`BREAKING CHANGE`],
  revertPattern: /revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: [`header`, `hash`],
};
