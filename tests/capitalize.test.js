const capitalize = require('../code/capitalize');

test('capitalize becomes Capitalize', () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
});