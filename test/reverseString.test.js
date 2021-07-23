const reverseString = require('../code/reverseString');

// take a string and return it reversed
test('reverse becomes esrever', () => {
  expect(reverseString('reverse')).toBe('esrever');
});

// take a string and return it reversed: case-insensitive
test('AssignMent becomes tneMngissA', () => {
  expect(reverseString('AssignMent')).toBe('tneMngissA');
});

// empty string returns itself
test('empty string returns itself', () => {
  expect(reverseString('')).toBe('');
});

// any non-string returns itself
test('any non-string returns itself: number', () => {
  expect(reverseString(1)).toBe(1);
});

test('any non-string returns itself: object', () => {
  let obj = {test: "test"};
  expect(reverseString(obj)).toBe(obj);
});

test('any non-string returns itself: null', () => {
  expect(reverseString(null)).toBe(null);
});

test('any non-string returns itself: undefined', () => {
  expect(reverseString(undefined)).toBe(undefined);
});