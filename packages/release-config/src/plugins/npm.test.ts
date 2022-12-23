import npm from './npm';

describe('npm', () => {
  it('default', () => {
    expect(npm()).toEqual('@semantic-release/npm');
  });

  it('set npm publish', () => {
    expect(npm({ npmPublish: false })).toEqual([
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ]);
  });

  it('use monorepo', () => {
    expect(npm({ monorepo: true })).toEqual('@semrel-extra/npm');
  });
});
