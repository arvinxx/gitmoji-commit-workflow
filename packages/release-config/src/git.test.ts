import git from './git';

describe('git', () => {
  it('default', () => {
    expect(git()).toEqual([
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          ':bookmark: chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}',
      },
    ]);
  });

  it('add new assets rules', () => {
    expect(git({ assets: ['file.json'] })).toEqual([
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'file.json'],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          ':bookmark: chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}',
      },
    ]);
  });

  it('custom message', () => {
    expect(git({ message: 'chore(release)' })).toEqual([
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release)',
      },
    ]);
  });
});
