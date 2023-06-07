import type { CommitTypes } from '@gitmoji/commit-types';

export interface DisplayNameOptions {
  withEmoji?: boolean;
  language?: 'en-US' | 'zh-CN' | 'mix';
}

interface TypeNameMap {
  emoji: string;
  'en-US': string;
  'zh-CN': string;
}

const typeMap: Record<Exclude<CommitTypes, 'wip'>, TypeNameMap> = {
  feat: {
    emoji: '✨',
    'en-US': 'Features',
    'zh-CN': '新特性',
  },
  fix: {
    emoji: '🐛',
    'en-US': 'Bug Fixes',
    'zh-CN': '修复',
  },
  build: {
    emoji: '👷',
    'en-US': 'Build System',
    'zh-CN': '构建系统',
  },
  chore: {
    emoji: '🎫',
    'en-US': 'Chores',
    'zh-CN': '杂项',
  },
  ci: {
    emoji: '🔧',
    'en-US': 'Continuous Integration',
    'zh-CN': '持续集成',
  },
  docs: {
    emoji: '📝',
    'zh-CN': '文档',
    'en-US': 'Documentation',
  },
  test: {
    emoji: '✅',
    'zh-CN': '测试',
    'en-US': 'Tests',
  },
  perf: {
    emoji: '⚡',
    'en-US': 'Performance Improvements',
    'zh-CN': '性能优化',
  },
  refactor: {
    emoji: '♻',
    'en-US': 'Code Refactoring',
    'zh-CN': '重构',
  },
  revert: {
    emoji: '⏪',
    'zh-CN': '回滚',
    'en-US': 'Reverts',
  },
  style: {
    emoji: '💄',
    'en-US': 'Styles',
    'zh-CN': '样式',
  },
};

export const getDisplayName = (
  type: CommitTypes | string,
  options: DisplayNameOptions = {},
): string => {
  const { withEmoji = true, language = 'en-US' } = options;

  if (type in typeMap) {
    const item = typeMap[type];
    const { emoji } = item;
    return `${withEmoji ? `${emoji} ` : ''}${
      language === 'mix' ? [item['en-US'], item['zh-CN']].join(' | ') : item[language]
    }`;
  }

  return type;
};
