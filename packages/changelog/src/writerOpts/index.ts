import Q from 'q';
import { resolve } from 'path';
import handleWirterOpts from './handleWirterOpts';
import { readFile as readFile0 } from 'fs';

const readFile = Q.denodeify(readFile0);

export = Q.all([
  readFile(resolve(__dirname, `./templates/template.hbs`), `utf-8`),
  readFile(resolve(__dirname, `./templates/header.hbs`), `utf-8`),
  readFile(resolve(__dirname, `./templates/commit.hbs`), `utf-8`),
  readFile(resolve(__dirname, `./templates/footer.hbs`), `utf-8`),
]).spread((template, header, commit, footer) => {
  const writerOpts = handleWirterOpts();

  // @ts-ignore
  writerOpts.mainTemplate = template;
  // @ts-ignore
  writerOpts.headerPartial = header;
  // 替换 commit.hbs 模板中的 gitUserInfo
  // @ts-ignore
  writerOpts.commitPartial = commit.replace(
    /{{gitUserInfo}}/g,
    'by: **{{authorName}}**<{{authorEmail}}>',
  );
  // @ts-ignore
  writerOpts.footerPartial = footer;

  return writerOpts;
});
