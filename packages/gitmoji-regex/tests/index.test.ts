import { gitmojiUnicodeRegex } from '@gitmoji/gitmoji-regex';
import { gitmojis } from 'gitmojis';

it('every emoji in gitmoji list pass', () => {
  const gitmojiUnicode: string[] = gitmojis.map((gitmoji) => gitmoji.emoji);

  gitmojiUnicode.forEach((unicode) => {
    expect(gitmojiUnicodeRegex.test(unicode)).toBeTruthy();
  });
});
