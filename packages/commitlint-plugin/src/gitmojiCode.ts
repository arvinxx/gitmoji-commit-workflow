import { join } from 'path';
import { existsSync, writeFileSync } from 'fs';
import { config } from 'dotenv';

import toEmoji from 'emoji-name-map';

const isTest = process.env.NODE_ENV === 'test';
config(isTest ? { path: join(__dirname, '../test', './test.env') } : {});

// if there is GITMOJI_PATH env, use as local file path
const gitmojiPath = process.env.GITMOJI_PATH;
const filePath = gitmojiPath
  ? join(process.cwd(), gitmojiPath)
  : // or use gitmoji file
    join(__dirname, 'gitmojis.json');

// Download gitmojis.json if it doesn't exist yet
if (!existsSync(filePath)) {
  const url =
    process.env.GITMOJI_URL ||
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
      'Failed to fetch gitmoji JSON, please refer to https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-plugin#fetch-error for help.',
    );
  }
}
// eslint-disable-next-line import/no-dynamic-require
const { gitmojis } = require(filePath);
export const gitmojiCodes: string[] = gitmojis.map((gitmoji) => gitmoji.code);

export const gitmojiUnicode: string[] = gitmojis.map((gitmoji) =>
  toEmoji.get(gitmoji.code),
);

export const localPath = filePath;
