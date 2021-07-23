const calculator = require('../code/calculator');

//test add
test('2 + 3 = 5', () => {
  expect(calculator.add(2, 3)).toBe(5);
});