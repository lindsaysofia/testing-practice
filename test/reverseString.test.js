const reverseString = require('../code/reverseString');

// take a string and return it reversed
test('take a string and return it reversed', () => {
  expect(reverseString('reverse')).toBe('esrever');
})