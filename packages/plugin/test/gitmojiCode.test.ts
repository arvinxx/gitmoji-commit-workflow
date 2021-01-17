import { existsSync, unlinkSync, copyFileSync } from 'fs';
import { join } from 'path';

const filePath = join(__dirname, '../src', 'gitmojis.json');
const targetPath = join(__dirname, '../src', 'gitmojis-for-test.json');

describe('without gitmoji json', () => {
  it('just return result', async () => {
    if (!existsSync(filePath)) copyFileSync(targetPath, filePath);

    const gitmojiCodes = await import('../src/gitmojiCode');

    expect(gitmojiCodes.default).toBeInstanceOf(Array);
  });

  it('will download gitmoji json and write to file', async () => {
    // 如果存在 gitmoji 直接删除
    if (existsSync(filePath)) unlinkSync(filePath);
    const gitmojiCodes = await import('../src/gitmojiCode');
    expect(gitmojiCodes.default).toBeInstanceOf(Array);
  });
});
