import { gitmojis } from 'gitmojis';
import _emojiRegex from 'emoji-regex';

const gitmojiUnicode: string[] = gitmojis.map((gitmoji) => gitmoji.emoji);

export const gitmojiCodeRegex = new RegExp(/:\w*:/);

export const gitmojiUnicodeRegex = new RegExp(gitmojiUnicode.filter((i) => i).join('|'));

export const emojiRegex = _emojiRegex();
