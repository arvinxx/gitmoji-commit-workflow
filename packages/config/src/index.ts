import { RuleConfigSeverity } from '@commitlint/types';
import type { LintOptions, QualifiedRules } from '@commitlint/types';

import gitmoji from 'commitlint-plugin-gitmoji';

const { Error } = RuleConfigSeverity;
const types = [
  'build',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
  'chore',
];

const rules: QualifiedRules = {
  'start-with-gitmoji': [Error, 'always'],
  // 使用 Angular 的类型说明
  'type-enum': [Error, 'always', types],
  // 内容以空行开始
  'body-leading-blank': [Error, 'always'],
  // 结尾以空行开始
  'footer-leading-blank': [Error, 'always'],
  // 标题最大长度 72 个字符
  'header-max-length': [Error, 'always', 72],
  // Scope 永远小写
  'scope-case': [Error, 'always', 'lower-case'],
  // 不允许标题空着
  'subject-empty': [Error, 'never'],
  // 不允许使用句号
  'subject-full-stop': [Error, 'never'],
  // type 必须小写
  'type-case': [Error, 'always', 'lower-case'],
  // type 不能为空
  'type-empty': [Error, 'never'],
};

const parserPreset: LintOptions = {
  parserOpts: {
    // with group name: /^:\w*:\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>[\s\w]*\w)\s?(?<ticket>#\d*)?$/
    headerPattern: /^(?::\w*:\s)?(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>[\s\w]*\w)\s?(?<ticket>#\d*)?$/, // Test URL: https://regex101.com/r/YxXWi5/5
    headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
  },
  plugins: {
    gitmoji,
  },
};

// 按 module.exports 方式输出
export = {
  rules,
  parserPreset,
  plugins: [gitmoji],
};
