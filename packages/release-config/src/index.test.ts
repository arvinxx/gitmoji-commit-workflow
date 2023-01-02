import defaultConfig from './index';

test('get default config', () => {
  expect(defaultConfig).toMatchSnapshot();
});
