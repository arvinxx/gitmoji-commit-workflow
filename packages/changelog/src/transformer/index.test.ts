import type { Commit } from 'conventional-commits-parser';
import transform from './index';

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

  it('should truncated commit hash', () => {
    const transformer = transform({});
    const commit = generateCommit({
      header: '',
      type: 'feat',
      hash: '12345678abc',
    });

    expect(transformer(commit, defaultContext)).toEqual({
      hash: '1234567',
      header: '',
      mentions: [],
      notes: [],
      references: [],
      type: '✨ Features',
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

    it('should encode author name', () => {
      const transformer = transform({});
      const commit = generateCommit({
        type: 'feat',
        authorName: 'Arvin Xu',
      });

      expect(transformer(commit, defaultContext)).toEqual({
        header: '',
        mentions: [],
        notes: [],
        references: [],
        authorNameEncode: 'Arvin%20Xu',
        authorName: 'Arvin Xu',
        type: '✨ Features',
      });
    });

    it('should format subject message', () => {
      const transformer = transform({});
      const commitEN = generateCommit({
        type: 'feat',
        subject: 'add Button components',
      });

      const commitCN = generateCommit({
        type: 'feat',
        subject: '增加Button组件',
      });

      expect(transformer(commitEN, defaultContext)).toEqual({
        header: '',
        mentions: [],
        notes: [],
        references: [],
        subject: 'Add Button components',
        rawSubject: 'add Button components',
        type: '✨ Features',
      });

      expect(transformer(commitCN, defaultContext)).toEqual({
        header: '',
        mentions: [],
        notes: [],
        references: [],
        subject: '增加 Button 组件',
        rawSubject: '增加Button组件',
        type: '✨ Features',
      });
    });
  });
});
