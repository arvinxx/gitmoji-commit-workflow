import type { DisplayNameOptions } from './typeDisplayName';
import { getDisplayName } from './typeDisplayName';

describe('typeDisplayName', () => {
  it('should return English and emoji by default', () => {
    expect(getDisplayName('feat')).toEqual('✨ Features');
    expect(getDisplayName('fix')).toEqual('🐛 Bug Fixes');
    expect(getDisplayName('perf')).toEqual('⚡ Performance Improvements');
    expect(getDisplayName('revert')).toEqual('⏪ Reverts');
    expect(getDisplayName('style')).toEqual('💄 Styles');
    expect(getDisplayName('docs')).toEqual('📝 Documentation');
    expect(getDisplayName('refactor')).toEqual('♻ Code Refactoring');
    expect(getDisplayName('build')).toEqual('📦 Build System');
    expect(getDisplayName('test')).toEqual('✅ Tests');
    expect(getDisplayName('ci')).toEqual('👷 Continuous Integration');
    expect(getDisplayName('chore')).toEqual('🔧 Chores');
  });

  it('should return Chinese with { language: "zh-CN" }', () => {
    const opts: DisplayNameOptions = { language: 'zh-CN' };
    expect(getDisplayName('feat', opts)).toEqual('✨ 新特性');
    expect(getDisplayName('fix', opts)).toEqual('🐛 修复');
    expect(getDisplayName('perf', opts)).toEqual('⚡ 性能优化');
    expect(getDisplayName('revert', opts)).toEqual('⏪ 回滚');
    expect(getDisplayName('style', opts)).toEqual('💄 样式');
    expect(getDisplayName('docs', opts)).toEqual('📝 文档');
    expect(getDisplayName('refactor', opts)).toEqual('♻ 重构');
    expect(getDisplayName('build', opts)).toEqual('📦 构建系统');
    expect(getDisplayName('test', opts)).toEqual('✅ 测试');
    expect(getDisplayName('ci', opts)).toEqual('👷 持续集成');
    expect(getDisplayName('chore', opts)).toEqual('🔧 杂项');
  });

  it('should return without emoji with { withEmoji: false }', () => {
    const opts = { withEmoji: false };
    expect(getDisplayName('feat', opts)).toEqual('Features');
    expect(getDisplayName('fix', opts)).toEqual('Bug Fixes');
    expect(getDisplayName('perf', opts)).toEqual('Performance Improvements');
    expect(getDisplayName('revert', opts)).toEqual('Reverts');
    expect(getDisplayName('style', opts)).toEqual('Styles');
    expect(getDisplayName('docs', opts)).toEqual('Documentation');
    expect(getDisplayName('refactor', opts)).toEqual('Code Refactoring');
    expect(getDisplayName('build', opts)).toEqual('Build System');
    expect(getDisplayName('test', opts)).toEqual('Tests');
    expect(getDisplayName('ci', opts)).toEqual('Continuous Integration');
    expect(getDisplayName('chore', opts)).toEqual('Chores');
  });

  it('should should return input when is not valid type', () => {
    expect(getDisplayName('wip')).toEqual('wip');
    expect(getDisplayName('aaa')).toEqual('aaa');
  });
});
