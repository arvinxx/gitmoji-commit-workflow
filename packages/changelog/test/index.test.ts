import { clean, conventionalChangelog, preparing, repoURL } from './utils';

describe('Gitmoji Commit Message Preset', () => {
  afterAll(() => {
    clean();
  });
  xit('should work if there is no semver tag', (done) => {
    preparing(1);

    conventionalChangelog(done, (log) => {
      expect(log).toContain('first build setup');
      expect(log).toContain('**travis**: add TravisCI pipeline');
      expect(log).toContain('**travis**: Continuously integrated.');
      expect(log).toContain('amazing new module');
      expect(log).toContain('**compile**: avoid a bug');
      // expect(log).toContain('make it faster');
      expect(log).toContain(`, closes [#1](${repoURL}/issues/1) [#2](${repoURL}/issues/2)`);
      expect(log).toContain('New build system.');
      expect(log).toContain('Not backward compatible.');
      expect(log).toContain('**compile**: The Change is huge.');
      expect(log).toContain('Build System');
      expect(log).toContain('Continuous Integration');
      expect(log).toContain('Features');
      expect(log).toContain('Bug Fixes');
      // expect(log).toContain('Performance Improvements');
      // expect(log).toContain('Reverts');
      // expect(log).toContain('bad commit');
      expect(log).toContain('BREAKING CHANGE');
      expect(log).toContain(': Not backward compatible.');

      expect(log).not.toContain('ci');
      expect(log).not.toContain('feat');
      expect(log).not.toContain('fix');
      expect(log).not.toContain('perf');
      expect(log).not.toContain('revert');
      expect(log).not.toContain('***:**');
    });
  });
});
