const capitalize = require('../code/capitalize');

// capitalize first letter if not capitalized
test('capitalize becomes Capitalize', () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
});

// leave string alone if first letter already capitalized
test('DoG becomes DoG', () => {
  expect(capitalize('DoG')).toBe('DoG');
});

// empty string returns itself
test('empty string returns itself', () => {
  expect(capitalize('')).toBe('');
});

// any non-string returns itself
test('any non-string returns itself: number', () => {
  expect(capitalize(1)).toBe(1);
});

test('any non-string returns itself: object', () => {
  let obj = {test: "test"};
  expect(capitalize(obj)).toBe(obj);
});

test('any non-string returns itself: null', () => {
  expect(capitalize(null)).toBe(null);
});

test('any non-string returns itself: undefined', () => {
  expect(capitalize(undefined)).toBe(undefined);
});