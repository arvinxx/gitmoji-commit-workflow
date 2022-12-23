describe('gitmojiCodes work well', () => {
  it('just return result', async () => {

    const gitmojiCodes = require('../lib/gitmojiCode');

    expect(gitmojiCodes.gitmojiCodes).toBeInstanceOf(Array);
  });
});
