import { existsSync, unlinkSync, copyFileSync } from 'fs';
import { join } from 'path';
import mockedEnv from 'mocked-env';

const targetPath = join(__dirname, '../src', 'gitmojis.json');
const testFilePath = join(__dirname, 'gitmojis-for-test.json');

describe('gitmojiCodes work well', () => {
  it('just return result', async () => {
    if (!existsSync(targetPath)) copyFileSync(testFilePath, targetPath);

    const gitmojiCodes = await import('../src/gitmojiCode');

    expect(gitmojiCodes.gitmojiCodes).toBeInstanceOf(Array);
  });

  it('will download gitmoji json and write to file without gitmoji json', async () => {
    // 如果存在 gitmoji 直接删除
    if (existsSync(targetPath)) unlinkSync(targetPath);
    const gitmojiCodes = await import('../src/gitmojiCode');
    expect(gitmojiCodes.gitmojiCodes).toBeInstanceOf(Array);
  });
});

describe('local file', () => {
  let restore; // to restore old values
  beforeEach(() => {
    restore = mockedEnv({
      IS_TEST: '1',
    });
  });

  afterEach(() => {
    restore();
  });

  xit('use local file path', async () => {
    console.log(process.env.TEST_ENV);
    const { localPath } = await import('../src/gitmojiCode');
    expect(localPath).toEqual(join(__dirname, 'gitmojis-for-test.json'));
  });
});

describe('gitmojiCodes throw Error', () => {
  beforeEach(() => {
    jest.mock('child_process', () => {
      return {
        execFileSync: () => {
          throw Error('');
        },
      };
    });
  });

  it('will throw Error when fail to fetch gitmojis.json', async () => {
    if (existsSync(targetPath)) unlinkSync(targetPath);
    try {
      const gitmojiCodes = await import('../src/gitmojiCode');
      expect(gitmojiCodes.gitmojiCodes).toBeInstanceOf(Array);
    } catch (e) {
      expect(e).toEqual(
        Error(
          'Failed to fetch gitmoji JSON, please refer to https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-plugin#fetch-error for help.',
        ),
      );
    }
  });
});
