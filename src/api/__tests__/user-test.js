import * as user from '../user';

jest.mock('../../util/request');

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});

it('works with promises', () => {
  expect.assertions(1);
  return expect(user.getUserName(4)).resolves.toEqual('Mark');
});

it('works with promises', () => {
  expect.assertions(1);
  return expect(user.getUserName(40)).rejects.toEqual({
    error: 'User with 40 not found.'
  });
});
