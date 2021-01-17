import { Rule } from '@commitlint/types';
import gitmojiCodes from './gitmojiCode';

const emoji: Rule = (parsed) => {
  const { raw } = parsed;

  const regex = /^(:\w*:)\s.*/gm; // regex test url: https://regex101.com/r/fSdOvB/1
  const result = regex.exec(raw);

  let pass;
  let errorMsg = 'passed';

  // if don't has emoji
  if (!result) {
    pass = false;
    errorMsg =
      'Your commit should start with gitmoji code,please check the emoji code on https://gitmoji.dev/.';
  } else {
    const emojiCode = result[1];

    pass = gitmojiCodes.includes(emojiCode);
    if (!pass) {
      errorMsg = `${emojiCode} is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.`;
    }
  }

  return [pass, errorMsg];
};

export default emoji;
