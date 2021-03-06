import defaultConfig, { createConfig } from '../src';

describe('Release Config', () => {
  it('get default config', () => {
    expect(defaultConfig).toEqual({
      plugins: [
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
      ],
    });
  });

  it('disable npm plugin', () => {
    expect(createConfig({ enableNPM: false })).toEqual({
      plugins: [
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
      ],
    });
  });

  it('disable github plugin', () => {
    expect(createConfig({ enableGithub: false })).toEqual({
      plugins: [
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
      ],
    });
  });
});
