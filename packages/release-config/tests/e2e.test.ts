describe('E2E', () => {
  it('default config', () => {
    // eslint-disable-next-line global-require
    const defaultConfig = require('./config/default');
    expect(defaultConfig).toBeDefined();
  });
  it('custom config', () => {
    // eslint-disable-next-line global-require
    const customConfig = require('./config/custom');

    expect(customConfig).toBeDefined();
  });
});
