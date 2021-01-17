import { existsSync, unlinkSync, copyFileSync } from 'fs';
import { join } from 'path';

const targetPath = join(__dirname, '../src', 'gitmojis.json');
const testFilePath = join(__dirname, 'gitmojis-for-test.json');

describe('without gitmoji json', () => {
  it('just return result', async () => {
    if (!existsSync(targetPath)) copyFileSync(testFilePath, targetPath);

    const gitmojiCodes = await import('../src/gitmojiCode');

    expect(gitmojiCodes.default).toBeInstanceOf(Array);
  });

  it('will download gitmoji json and write to file', async () => {
    // 如果存在 gitmoji 直接删除
    if (existsSync(targetPath)) unlinkSync(targetPath);
    const gitmojiCodes = await import('../src/gitmojiCode');
    expect(gitmojiCodes.default).toBeInstanceOf(Array);
  });
});
