import type { LintOptions, QualifiedRules } from '@commitlint/types';
import { RuleConfigSeverity, type Plugin } from '@commitlint/types';
import commitTypes from '@gitmoji/commit-types';
import gitmojiParserOpts from '@gitmoji/parser-opts';
import gitmojiPlugin from 'commitlint-plugin-gitmoji';

const { Error } = RuleConfigSeverity;

const rules: QualifiedRules = {
  // gitmoji 规则
  'start-with-gitmoji': [Error, 'always'],
  // 使用 Angular 的类型
  'type-enum': [Error, 'always', commitTypes],
  // 内容以空行开始
  'body-leading-blank': [Error, 'always'],
  // 结尾以空行开始
  'footer-leading-blank': [Error, 'always'],
  // 标题最大长度 100 个字符
  'header-max-length': [Error, 'always', 100],
  // Scope 永远小写
  'scope-case': [Error, 'always', 'lower-case'],
  // 不允许标题空着
  'subject-empty': [Error, 'never'],
  // 不允许使用句号
  'subject-full-stop': [Error, 'never', '.'],
  // type 必须小写
  'type-case': [Error, 'always', 'lower-case'],
  // type 不能为空
  'type-empty': [Error, 'never'],
};

const parserPreset: LintOptions = {
  parserOpts: gitmojiParserOpts,
  plugins: {
    gitmoji: gitmojiPlugin,
  },
};

const config: { plugins: Plugin[]; parserPreset: LintOptions; rules: QualifiedRules } = {
  rules,
  parserPreset,
  plugins: [gitmojiPlugin],
};

export default config;
