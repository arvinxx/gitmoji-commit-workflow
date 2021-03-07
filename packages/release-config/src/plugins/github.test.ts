import github from './github';

describe('github', () => {
  it('default', () => {
    expect(github()).toEqual('@semantic-release/github');
  });

  it('add release assets', () => {
    expect(github({ githubAssets: ['release'] })).toEqual([
      '@semantic-release/github',
      {
        assets: ['release'],
      },
    ]);
  });
});
