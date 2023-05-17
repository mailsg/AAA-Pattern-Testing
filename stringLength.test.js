const { stringLength } = require('./stringLength.js');

test('stringLength should throw an error if the string is empty', () => {
  expect(() => stringLength('')).toThrow('String must be at least 1 character long.');
});

test('stringLength should throw an error if the string is longer than 10 characters', () => {
  expect(() => stringLength('this is too long')).toThrow('String cannot be longer than 10 characters.');
});
