import toEmoji from 'emoji-name-map';

// eslint-disable-next-line import/no-dynamic-require
const { gitmojis } = require('gitmojis');

export const gitmojiCodes: string[] = gitmojis.map((gitmoji) => gitmoji.code);

export const gitmojiUnicode: string[] = gitmojis.map((gitmoji) =>
  toEmoji.get(gitmoji.code),
);
