import Q from 'q';
import conventionalChangelog from './conventional-changelog';
import recommendedBumpOpts from './conventional-recommended-bump';

import parserOpts from './parserOpts'; // 解析流
import writerOpts from './writerOpts'; // 输出流

// 格式化 git log 信息
import gitRawCommitsOpts from './git-raw-commit';

export = Q.all([
  conventionalChangelog,
  parserOpts,
  recommendedBumpOpts,
  writerOpts,
  gitRawCommitsOpts,
]).spread(
  (
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts,
    gitRawCommitsOpts,
  ) => ({
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts,
    gitRawCommitsOpts,
  }),
);
