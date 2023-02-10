import type { Commit, RuleConfigCondition } from '@commitlint/types';
import { gitmojis } from 'gitmojis';

import emojiRule from '../src/rule';

const when: RuleConfigCondition = 'always';

test('should return error message if commit start without gitmoji code', () => {
  const value = emojiRule({ raw: 'chore(scope): test' } as Commit, when);

  expect(value).toEqual([
    false,
    'Your commit should start with gitmoji code. Please check the emoji code on https://gitmoji.dev/.',
  ]);
});

describe('commit start with gitmoji code', () => {
  it('should return wrong gitmoji code error message if commit start with wrong gitmoji', () => {
    const value = emojiRule({ raw: ':st: chore(scope): test' } as Commit, when);
    expect(value).toEqual([
      false,
      ':st: is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.',
    ]);
  });

  it('🤔 should failed if commit start with unrecognized gitmoji unicode', () => {
    const value = emojiRule({ raw: '🤔 chore(scope): test' } as Commit, when);
    expect(value).toEqual([
      false,
      '🤔 is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.',
    ]);
  });

  it('🌙 should failed if commit start with wrong gitmoji unicode', () => {
    const value = emojiRule({ raw: '🌙 chore(scope): test' } as Commit, when);
    expect(value).toEqual([
      false,
      '🌙 is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.',
    ]);
  });

  it('should pass when return correct commit message code', () => {
    const value = emojiRule({ raw: ':tada: test' } as Commit, when);
    expect(value).toEqual([true, 'passed']);
  });

  it(':construction_worker: should pass', () => {
    const value = emojiRule({ raw: ':construction_worker: test' } as Commit, when);
    expect(value).toEqual([true, 'passed']);
  });

  it('🎉 should pass', () => {
    const value = emojiRule({ raw: '🎉 test' } as Commit, when);
    expect(value).toEqual([true, 'passed']);
  });

  it('✅ should pass', () => {
    const value = emojiRule({ raw: '✅ test' } as Commit, when);
    expect(value).toEqual([true, 'passed']);
  });

  it('💄 should pass', () => {
    const value = emojiRule({ raw: '💄 test' } as Commit, when);
    expect(value).toEqual([true, 'passed']);
  });

  it('⚡️should pass', () => {
    const value = emojiRule({ raw: '⚡️ test' } as Commit, when);
    expect(value).toEqual([true, 'passed']);
  });

  it('every emoji in list past', () => {
    const gitmojiUnicode: string[] = gitmojis.map((gitmoji) => gitmoji.emoji);

    gitmojiUnicode.forEach((unicode) => {
      const value = emojiRule({ raw: `${unicode} test` } as Commit, when);
      console.log(`testing ${unicode}...`);
      expect(value).toEqual([true, 'passed']);
    });
  });
});
