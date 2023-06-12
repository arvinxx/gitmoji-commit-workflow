import type { Options } from 'conventional-changelog-writer';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import type { CustomConfig } from './customConfig';
import finalizeContext from './finalizeContext';
import transformer from './transformer';

const basePath = resolve(__dirname, './templates');

const template = readFileSync(`${basePath}/template.hbs`, 'utf-8');
const summaryTemplate = readFileSync(`${basePath}/summary-template.hbs`, 'utf-8');
const summaryAvatar = readFileSync(`${basePath}/summary-avatar.hbs`, 'utf-8');
const header = readFileSync(`${basePath}/header.hbs`, 'utf-8');
const headerNewlineTimestamp = readFileSync(`${basePath}/header-newline-timestamp.hbs`, 'utf-8');
const commit = readFileSync(`${basePath}/commit.hbs`, 'utf-8');
const footer = readFileSync(`${basePath}/footer.hbs`, 'utf-8');
const author = readFileSync(`${basePath}/author.hbs`, 'utf-8');
const authorAvatar = readFileSync(`${basePath}/author-avatar.hbs`, 'utf-8');
const backToTop = readFileSync(`${basePath}/back-to-top.hbs`, 'utf-8');
const reduceHeadingLevel = (skip: boolean, template: string): string => {
  if (skip) return template;
  return template.replace(/(^|\n)(#+)/g, (match, p1, p2) => p1 + '#' + p2);
};
export default (customConfig: CustomConfig): Options => {
  const mainTemplate = customConfig.showSummary
    ? summaryTemplate.replace(
        /{{gitUserInfo}}/g,
        customConfig.showAuthor && customConfig.showAuthorAvatar ? summaryAvatar : '',
      )
    : template;
  const commitPartial = commit.replace(
    /{{gitUserInfo}}/g,
    customConfig.showAuthor ? (customConfig.showAuthorAvatar ? authorAvatar : author) : '',
  );
  const headerPartial = customConfig.newlineTimestamp ? headerNewlineTimestamp : header;
  const footerPartial = footer.replace(
    /{{backToTop}}/g,
    customConfig.addBackToTop ? backToTop : '',
  );
  return {
    transform: transformer(customConfig),
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    mainTemplate: reduceHeadingLevel(!customConfig.reduceHeadingLevel, mainTemplate),
    headerPartial: reduceHeadingLevel(!customConfig.reduceHeadingLevel, headerPartial),
    // 替换 commit.hbs 模板中的 gitUserInfo
    commitPartial: reduceHeadingLevel(!customConfig.reduceHeadingLevel, commitPartial),
    footerPartial: reduceHeadingLevel(!customConfig.reduceHeadingLevel, footerPartial),
    finalizeContext: finalizeContext(customConfig),
  };
};
