const reverseString = require('./reverseString');

test('reverseString should return the reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
