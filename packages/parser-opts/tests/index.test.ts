import parserOpts from '../src';

const { headerPattern: regex } = parserOpts;
describe('@gitmoji/parser-opts', () => {
  describe('invalid', () => {
    it('hello :test: test', () => {
      const result = regex.exec('hello :test: test');
      expect(result).toBeNull();
    });

    it('chore(scope): test', () => {
      const result = regex.exec('hello :test: test');
      expect(result).toBeNull();
    });

    it(':start:test: test', () => {
      const result = regex.exec(':start:test: test');
      expect(result).toBeNull();
    });
  });

  describe('valid', () => {
    it(':hello: test: test', () => {
      const result = regex.exec(':hello: test: test');

      expect(result).toHaveLength(5);
      const { type, scope, subject, ticket } = result.groups;
      expect(type).toBe('test');
      expect(scope).toBeUndefined();
      expect(subject).toBe('test');
      expect(ticket).toBeUndefined();
    });
    it(':start: chore(scope): test', () => {
      const result = regex.exec(':start: chore(scope): test');

      expect(result).toHaveLength(5);
      const { type, scope, subject, ticket } = result.groups;
      expect(type).toBe('chore');
      expect(scope).toBe('scope');
      expect(subject).toBe('test');
      expect(ticket).toBeUndefined();
    });
    it(':start: chore(scope): test #123', () => {
      const result = regex.exec(':start: chore(scope): test #123');

      expect(result).toHaveLength(5);
      const { type, scope, subject, ticket } = result.groups;
      expect(type).toBe('chore');
      expect(scope).toBe('scope');
      expect(subject).toBe('test');
      expect(ticket).toBe('#123');
    });
    it(':memo: docs: update README.md', () => {
      const result = regex.exec(':memo: docs: update README.md');

      expect(result).toHaveLength(5);
      const { type, scope, subject, ticket } = result.groups;
      expect(type).toBe('docs');
      expect(scope).toBeUndefined();
      expect(subject).toBe('update README.md');
      expect(ticket).toBeUndefined();
    });
    it(':start: chore(scope): i have a word #123', () => {
      const result = regex.exec(':start: chore(scope): i have a word #123');

      expect(result).toHaveLength(5);
      const { type, scope, subject, ticket } = result.groups;
      expect(type).toBe('chore');
      expect(scope).toBe('scope');
      expect(subject).toBe('i have a word');
      expect(ticket).toBe('#123');
    });
    it(':package: feat(parser-opts): extract parser-opts packages', () => {
      const result = regex.exec(
        ':package: feat(parser-opts): extract parser-opts packages',
      );

      expect(result).toHaveLength(5);
      const { type, scope, subject, ticket } = result.groups;
      expect(type).toBe('feat');
      expect(scope).toBe('parser-opts');
      expect(subject).toBe('extract parser-opts packages');
      expect(ticket).toBeUndefined();
    });

    it(':sparkles: feat(changelog): 添加中文标题', () => {
      const result = regex.exec(':sparkles: feat(changelog): 添加中文标题');

      expect(result).toHaveLength(5);
      const { type, scope, subject, ticket } = result.groups;
      expect(type).toBe('feat');
      expect(scope).toBe('changelog');
      expect(subject).toBe('添加中文标题');
      expect(ticket).toBeUndefined();
    });

    it('💥 feat(unicode): support unicode', () => {
      const result = regex.exec('💥 feat(unicode): support unicode');

      expect(result).toHaveLength(5);
      const { type, scope, subject, ticket } = result.groups;
      expect(type).toBe('feat');
      expect(scope).toBe('unicode');
      expect(subject).toBe('support unicode');
      expect(ticket).toBeUndefined();
    });
  });
});
