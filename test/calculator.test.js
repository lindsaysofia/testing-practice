const calculator = require('../code/calculator');

// test add
test('2 + 3 = 5', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('0.1 + 0.2 ~= 0.3', () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// test subtract
test('2 - 3 = -1', () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test('0.1 - 0.2 ~= -0.1', () => {
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});

// test divide
test('4 / 2 = 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('22 / 7 ~= 3.14', () => {
  expect(calculator.divide(22, 7)).toBeCloseTo(3.14);
});

// test multiply
test('2 * 11 = 22', () => {
  expect(calculator.multiply(2, 11)).toBe(22);
});

test('0.5 - 0.37 ~= -0.2', () => {
  expect(calculator.multiply(0.5, 0.37)).toBeCloseTo(0.185);
});