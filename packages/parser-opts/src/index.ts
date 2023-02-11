import { gitmojiCodeRegex, gitmojiUnicodeRegex, emojiRegex } from '@gitmoji/gitmoji-regex';

const gitmojiCodeStr = gitmojiCodeRegex.source;
const gitmojiUnicodeStr = gitmojiUnicodeRegex.source;
const emojiStr = emojiRegex.source;

export default {
  // Test URL: https://regex101.com/r/gYkG99/1
  headerPattern: new RegExp(
    `^(?:${gitmojiCodeStr}|(?:${gitmojiUnicodeStr})|(?:${emojiStr}))\\s(?<type>\\w*)(?:\\((?<scope>.*)\\))?!?:\\s(?<subject>(?:(?!#).)*(?:(?!\\s).))(?:\\s\\(?(?<ticket>#\\d*)\\)?)?$`,
  ),

  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
};
