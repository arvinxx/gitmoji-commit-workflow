import release from 'semantic-release';

describe('E2E', () => {
  it('default config', () => {
    // eslint-disable-next-line global-require
    const defaultConfig = require('./config/default');
    release({
      ...defaultConfig,
      dryRun: true,
    });
  });
  it('custom config', () => {
    // eslint-disable-next-line global-require
    const customConfig = require('./config/custom');
    release({
      ...customConfig,
      dryRun: true,
    });
  });
});
