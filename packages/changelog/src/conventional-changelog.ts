import Q from 'q';

const parserOpts = require('./parserOpts');
const writerOpts = require('./writerOpts');

export = Q.all([parserOpts, writerOpts]).spread((parserOpts, writerOpts) => {
  return { parserOpts, writerOpts };
});
