import transform from './index';
import type { Commit } from 'conventional-commits-parser';

const generateCommit = (commit: Partial<Commit>) =>
  ({
    header: '',
    notes: [],
    references: [],
    mentions: [],
    body: undefined,
    footer: undefined,
    merge: undefined,
    revert: undefined,
    ...commit,
  } as Commit);

const defaultContext = { commit: '', date: '', issue: '' };
describe('transform', () => {
  it('return commit if has feat', () => {
    const transformer = transform({});

    const commit = generateCommit({
      header: 'amazing new module',
      type: 'feat',
    });

    expect(transformer(commit, defaultContext)).toEqual({
      type: '✨ Features',
      header: 'amazing new module',
      mentions: [],
      notes: [],
      references: [],
    });
  });

  describe('Custom Config', () => {
    it('should only display included types', () => {
      const transformer = transform({
        displayTypes: ['fix'],
      });
      const featCommit = generateCommit({
        type: 'feat',
      });
      const fixCommit = generateCommit({
        type: 'fix',
      });

      expect(transformer(featCommit, defaultContext)).toBeUndefined();
      expect(transformer(fixCommit, defaultContext)).toEqual({
        header: '',
        mentions: [],
        notes: [],
        references: [],
        type: '🐛 Bug Fixes',
      });
    });

    it('should show scope display name', () => {
      const transformer = transform({
        scopeDisplayName: {
          foo: 'module-foo',
        },
      });
      const commit = generateCommit({
        type: 'feat',
        scope: 'foo',
      });

      expect(transformer(commit, defaultContext)).toEqual({
        header: '',
        mentions: [],
        notes: [],
        references: [],
        scope: 'module-foo',
        type: '✨ Features',
      });
    });
  });
});
