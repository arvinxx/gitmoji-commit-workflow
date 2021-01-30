import type { Options } from 'conventional-changelog-core';
import conventionalChangelogCore from 'conventional-changelog-core';
import through from 'through2';
import gitDummyCommit from 'git-dummy-commit';
import betterThanBefore from 'better-than-before';
import shell from 'shelljs';
import gitmojiChangelogConfig from '../src';

export const conventionalChangelog = (
  done,
  testFn: (changelog: string) => void,
) => {
  conventionalChangelogCore({
    config: gitmojiChangelogConfig as Options.Config,
  })
    .on('error', (err) => {
      done(err);
    })
    .pipe(
      through((chunk) => {
        const log = chunk.toString();
        testFn(log);
        done();
      }),
    );
};

const { setups, preparing: _preparing } = betterThanBefore();

setups([
  () => {
    shell.config.resetForTesting();
    shell.cd(__dirname);
    shell.rm('-rf', 'tmp');
    shell.mkdir('tmp');
    shell.cd('tmp');
    shell.mkdir('git-templates');
    shell.exec('git init --template=./git-templates');

    gitDummyCommit([
      ':construction_worker: build: first build setup',
      'BREAKING CHANGE: New build system.',
    ]);
    gitDummyCommit([
      ':green_heart: ci(travis): add TravisCI pipeline',
      'BREAKING CHANGE: Continuously integrated.',
    ]);
    gitDummyCommit([
      ':sparkles: feat: amazing new module',
      'BREAKING CHANGE: Not backward compatible.',
    ]);
    gitDummyCommit([
      ':bug: fix(compile): avoid a bug',
      'BREAKING CHANGE: The Change is huge.',
    ]);
    gitDummyCommit(':zap: perf(ngOptions): make it faster');
    gitDummyCommit(':rewind: revert(ngOptions): bad commit');
    gitDummyCommit([':bug: fix(*): oops', ' closes #1, #2']);
  },
  () => {
    shell.exec('git tag v1.0.0');
    gitDummyCommit('feat: some more features');
  },
  () => {
    gitDummyCommit(['feat(*): implementing #5 by @dlmr', ' closes #10']);
  },
  () => {
    gitDummyCommit(['fix: use npm@5 (@username)']);
    gitDummyCommit([
      'build(deps): bump @dummy/package from 7.1.2 to 8.0.0',
      'BREAKING CHANGE: The Change is huge.',
    ]);
  },
  () => {
    gitDummyCommit([
      'Revert \\":rewind: feat: default revert format\\"',
      'This reverts commit 1234.',
    ]);
    gitDummyCommit([
      ':rewind: revert: :sparkles: feat: custom revert format',
      'This reverts commit 5678.',
    ]);
  },
]);

export const preparing = _preparing;

export const repoURL = 'https://github.com/arvinxx/gitmoji-commit-workflow';
