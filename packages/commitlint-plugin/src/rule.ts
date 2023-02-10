import type { Rule } from '@commitlint/types';
import emojiRegex from 'emoji-regex';

import { gitmojiCodes, gitmojiUnicode } from './gitmojiCode';

const gitjimojiCodeStr = `:\\w*:`;
const gitmojiUnicodeStr = gitmojiUnicode.filter((i) => i).join('|');
const emojiStr = emojiRegex().source;

const emoji: Rule = (parsed) => {
  const { raw } = parsed;

  // code regex test url: https://regex101.com/r/fSdOvB/1
  const gitmojiCodeResult = new RegExp(`(${gitjimojiCodeStr})\\s.*`, 'gm').exec(raw);
  // unicode regex test url: https://regex101.com/r/shBTBg/2
  const gitmojiUnicodeResult = new RegExp(`(${gitmojiUnicodeStr})\\s.*`, 'gm').exec(raw);
  const emojiResult = new RegExp(`(${emojiStr})\\s.*`, 'gm').exec(raw);

  let pass;
  let errorMsg = 'passed';

  // if gitmoji code is valid
  if (gitmojiCodeResult) {
    const emojiCode = gitmojiCodeResult[1];
    pass = gitmojiCodes.includes(emojiCode);
    if (!pass) {
      errorMsg = `${emojiCode} is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.`;
    }
  }
  // if gitmoji unicode is valid
  else if (gitmojiUnicodeResult) {
    const unicode = gitmojiUnicodeResult[1];

    pass = gitmojiUnicode.includes(unicode);
  }
  // is emoji,but isn't included in gitmoji list
  else if (emojiResult) {
    const unicode = emojiResult[1];

    pass = false;
    errorMsg = `${unicode} is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.`;
  } else {
    // if don't has gitmoji code or emoji unicode
    pass = false;
    errorMsg =
      'Your commit should start with gitmoji code. Please check the emoji code on https://gitmoji.dev/.';
  }

  return [pass, errorMsg];
};

export default emoji;
