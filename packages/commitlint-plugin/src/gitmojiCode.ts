import { join } from 'path';
import { existsSync, writeFileSync } from 'fs';
import toEmoji from 'emoji-name-map';

const filePath = join(__dirname, 'gitmojis.json');

// Download gitmojis.json if it doesn't exist yet
if (!existsSync(filePath)) {
  const url =
    'https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json';
  try {
    // eslint-disable-next-line global-require
    const result = require('child_process').execFileSync(
      'curl',
      ['--silent', '-L', url],
      {
        encoding: 'utf8',
        maxBuffer: Infinity,
      },
    );

    writeFileSync(filePath, result);
  } catch (e) {
    /* istanbul ignore next */
    throw Error(
      'Failed to fetch gitmoji JSON, please refer to https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/plugin#fetch-error for help.',
    );
  }
}
// eslint-disable-next-line import/no-dynamic-require
const { gitmojis } = require(filePath);
export const gitmojiCodes: string[] = gitmojis.map((gitmoji) => gitmoji.code);

export const gitmojiUnicode: string[] = gitmojis.map((gitmoji) =>
  toEmoji.get(gitmoji.code),
);
