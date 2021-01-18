import Q from 'q';
import { resolve } from 'path';
import { readFile as _readFile } from 'fs';
import customConfig from './customConfig';

import handleWriterOpts from './handleWriterOpts';

const readFile = Q.denodeify(_readFile);

const template$ = [
  readFile(resolve(__dirname, './templates/template.hbs'), 'utf-8'),
  readFile(resolve(__dirname, './templates/header.hbs'), 'utf-8'),
  readFile(resolve(__dirname, './templates/commit.hbs'), 'utf-8'),
  readFile(resolve(__dirname, './templates/footer.hbs'), 'utf-8'),
];

export = Q.all(template$).spread((template, header, commit, footer) => {
  const writerOpts = handleWriterOpts(customConfig);

  writerOpts.mainTemplate = template;

  writerOpts.headerPartial = header;
  // 替换 commit.hbs 模板中的 gitUserInfo
  writerOpts.commitPartial = commit.replace(
    /{{gitUserInfo}}/g,
    customConfig.showAuthor ? 'by: **{{authorName}}**<{{authorEmail}}>' : '',
  );
  writerOpts.footerPartial = footer;

  return writerOpts;
});
