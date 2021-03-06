import commitAnalyzer from './commitAnalyzer';

describe('commitAnalyzer', () => {
  it('default', () => {
    expect(commitAnalyzer()).toEqual([
      '@semantic-release/commit-analyzer',
      {
        config: 'conventional-changelog-gitmoji-config',
        releaseRules: [
          {
            release: 'patch',
            type: 'style',
          },
          {
            release: 'patch',
            type: 'build',
          },
        ],
      },
    ]);
  });

  it('add new release rules', () => {
    expect(commitAnalyzer([{ release: 'patch', type: 'perf' }])).toEqual([
      '@semantic-release/commit-analyzer',
      {
        config: 'conventional-changelog-gitmoji-config',
        releaseRules: [
          {
            release: 'patch',
            type: 'style',
          },
          {
            release: 'patch',
            type: 'build',
          },
          {
            release: 'patch',
            type: 'perf',
          },
        ],
      },
    ]);
  });
});
