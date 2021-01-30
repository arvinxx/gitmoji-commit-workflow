import type { Options } from 'conventional-changelog-writer';
import { readFileSync } from 'fs';
import { resolve } from 'path';

import type { CustomConfig } from './customConfig';

import transformer from './transformer';

const basePath = resolve(__dirname, './templates');

const template = readFileSync(`${basePath}/template.hbs`, 'utf-8');
const header = readFileSync(`${basePath}/header.hbs`, 'utf-8');
const commit = readFileSync(`${basePath}/commit.hbs`, 'utf-8');
const footer = readFileSync(`${basePath}/footer.hbs`, 'utf-8');
const author = readFileSync(`${basePath}/author.hbs`, 'utf-8');

export default (customConfig: CustomConfig): Options => ({
  transform: transformer(customConfig),
  groupBy: 'type',
  commitGroupsSort: 'title',
  commitsSort: ['scope', 'subject'],
  noteGroupsSort: 'title',
  mainTemplate: template,
  headerPartial: header,
  // 替换 commit.hbs 模板中的 gitUserInfo
  commitPartial: commit.replace(
    /{{gitUserInfo}}/g,
    customConfig.showAuthor ? author : '',
  ),
  footerPartial: footer,
});
