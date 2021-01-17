import { lint } from './utils';

describe('invalid commit', () => {
  it('$ chore(scope): test -> without gitmoji', async () => {
    const { valid, errors } = await lint('chore(scope): test');

    expect(valid).toBeFalsy();
    expect(errors).toHaveLength(1);
    expect(errors[0].name).toBe('start-with-gitmoji');
  });

  it('$ :start: chore(scope): test -> invalid gitmoji', async () => {
    const { valid, errors } = await lint(':start: chore(scope): test');

    expect(valid).toBeFalsy();
    expect(errors).toHaveLength(1);
    expect(errors[0].name).toBe('start-with-gitmoji');
    expect(errors[0].message).toBe(
      ':start: is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.',
    );
  });

  it('$ hello :test: test -> 3 error', async () => {
    const { valid, errors } = await lint('hello :test: test');

    expect(valid).toBeFalsy();
    expect(errors).toHaveLength(3);
  });

  it('$ :start:test: test -> 3 error', async () => {
    const { valid, errors } = await lint(':start:test: test');

    expect(valid).toBeFalsy();
    expect(errors).toHaveLength(3);
  });
});

describe('valid commit', () => {
  it('$ :white_check_mark: test: test -> passed', async () => {
    const { valid } = await lint(':white_check_mark: test: test');

    expect(valid).toBeTruthy();
  });

  it('$ :sparkles: feat(web): add new feat -> passed', async () => {
    const { valid } = await lint(':sparkles: feat(web): add new feat');

    expect(valid).toBeTruthy();
  });

  it('$ :green_heart: ci: fix ci -> passed', async () => {
    const { valid } = await lint(':green_heart: ci: fix ci');

    expect(valid).toBeTruthy();
  });

  it('$ :memo: docs: update document #123 -> passed', async () => {
    const { valid } = await lint(':memo: docs: update document #123');

    expect(valid).toBeTruthy();
  });
});
