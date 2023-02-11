import { createConfig } from '../src/createConfig';

describe('createConfig', () => {
  it('disable npm plugin', () => {
    expect(createConfig({ enableNPM: false }).plugins).toEqual([
      [
        '@semantic-release/commit-analyzer',
        {
          config: 'conventional-changelog-gitmoji-config',
          releaseRules: [
            { type: 'style', release: 'patch' },
            { type: 'build', release: 'patch' },
          ],
        },
      ],
      [
        '@semantic-release/release-notes-generator',
        {
          config: 'conventional-changelog-gitmoji-config',
        },
      ],
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
          changelogTitle: '# Changelog',
        },
      ],
      '@semantic-release/github',
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json'],
          message:
            // eslint-disable-next-line no-template-curly-in-string
            ':bookmark: chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}',
        },
      ],
    ]);
  });

  it('disable github plugin', () => {
    expect(createConfig({ enableGithub: false }).plugins).toEqual([
      [
        '@semantic-release/commit-analyzer',
        {
          config: 'conventional-changelog-gitmoji-config',
          releaseRules: [
            { type: 'style', release: 'patch' },
            { type: 'build', release: 'patch' },
          ],
        },
      ],
      [
        '@semantic-release/release-notes-generator',
        {
          config: 'conventional-changelog-gitmoji-config',
        },
      ],
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
          changelogTitle: '# Changelog',
        },
      ],
      '@semantic-release/npm',
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json'],
          message:
            // eslint-disable-next-line no-template-curly-in-string
            ':bookmark: chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}',
        },
      ],
    ]);
  });
});
