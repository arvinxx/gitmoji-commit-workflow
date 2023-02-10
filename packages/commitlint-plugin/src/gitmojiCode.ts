import { gitmojis } from 'gitmojis';

export const gitmojiCodes: string[] = gitmojis.map((gitmoji) => gitmoji.code);

export const gitmojiUnicode: string[] = gitmojis.map((gitmoji) => gitmoji.emoji);
