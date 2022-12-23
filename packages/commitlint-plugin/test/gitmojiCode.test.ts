describe('gitmojiCodes work well', () => {
  it('just return result', async () => {

    const gitmojiCodes = await import('../src/gitmojiCode');

    expect(gitmojiCodes.gitmojiCodes).toBeInstanceOf(Array);
  });
});
