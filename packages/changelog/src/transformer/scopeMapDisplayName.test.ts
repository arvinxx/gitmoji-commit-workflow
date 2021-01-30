import { scopeMapDisplayName } from './scopeMapDisplayName';

describe('scopeMapDisplayName', () => {
  it('should return input if not match', () => {
    expect(scopeMapDisplayName('hello', {})).toEqual('hello');
  });

  it('should return mapped value if match the list', () => {
    expect(
      scopeMapDisplayName('hello', {
        hello: 'Hello',
      }),
    ).toEqual('Hello');
  });

  it('should return * value if scope is empty and has the * value in list', () => {
    expect(
      scopeMapDisplayName('', {
        '*': 'Others',
      }),
    ).toEqual('Others');
  });
});
