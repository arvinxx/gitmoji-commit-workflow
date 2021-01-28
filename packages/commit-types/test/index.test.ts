import types from '../src';

test('check types', async () => {
  expect(types).toMatchSnapshot();
});
