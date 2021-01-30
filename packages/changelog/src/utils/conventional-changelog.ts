import Q from 'q';
import parserOpts from './parserOpts';
import writerOpts from './writerOpts';

export = Q.all([parserOpts, writerOpts]).spread((parserOpts, writerOpts) => {
  return { parserOpts, writerOpts };
});
