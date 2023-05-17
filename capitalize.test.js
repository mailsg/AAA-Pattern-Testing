const capitalize = require('./capitalize.js')

test('capitalize should capitalize the first character of a string', () => {
    const result = capitalize('hello');
    expect(result).toBe('Hello');
});
  