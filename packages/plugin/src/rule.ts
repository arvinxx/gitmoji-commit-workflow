import type { Rule } from '@commitlint/types';
import { gitmojiCodes, gitmojiUnicode } from './gitmojiCode';
import emojiUnicode from 'emoji-unicode';

const emoji: Rule = (parsed) => {
  const { raw } = parsed;

  // code regex test url: https://regex101.com/r/fSdOvB/1
  const regex = /^(:\w*:)\s.*/gm;
  // unicode regex test url: https://regex101.com/r/OTMgWL/2
  const unicodeRegex = /(\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f\ude80-\udeff]|[\u2600-\u2B55])\s.*/gm;

  const result = regex.exec(raw);
  const unicodeResult = unicodeRegex.exec(raw);

  let pass;
  let errorMsg = 'passed';

  // if gitmoji code is valid
  if (result) {
    const emojiCode = result[1];
    pass = gitmojiCodes.includes(emojiCode);
    if (!pass) {
      errorMsg = `${emojiCode} is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.`;
    }
  } else if (unicodeResult) {
    const unicode = unicodeResult[1];

    const hasRaw = gitmojiUnicode.includes(emojiUnicode.raw(unicode));
    const hasHex = gitmojiUnicode.includes(emojiUnicode(unicode));
    pass = hasHex || hasRaw;

    if (!pass) {
      errorMsg = `${unicode} is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.`;
    }
  } else {
    // if don't has gitmoji code or emoji unicode
    pass = false;
    errorMsg =
      'Your commit should start with gitmoji code,please check the emoji code on https://gitmoji.dev/.';
  }

  return [pass, errorMsg];
};

export default emoji;
