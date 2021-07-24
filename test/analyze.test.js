const analyze = require('../code/analyze');
const firstArray = [1, 8, 3, 4, 2, 6];
const firstArrayAnalyze = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};

const secondArray = [4, 6, 2];
const secondArrayAnalyze = {
  average: 4,
  min: 2,
  max: 6,
  length: 3
};

// test average;
test('testing average of firstArray', () => {
  expect(analyze(firstArray).average).toBe(firstArrayAnalyze.average);
});

test('testing average of secondArray', () => {
  expect(analyze(secondArray).average).toBe(secondArrayAnalyze.average);
});

// test min
test('testing min of firstArray', () => {
  expect(analyze(firstArray).min).toBe(firstArrayAnalyze.min);
});

test('testing min of secondArray', () => {
  expect(analyze(secondArray).min).toBe(secondArrayAnalyze.min);
});

// test max
test('testing max of firstArray', () => {
  expect(analyze(firstArray).max).toBe(firstArrayAnalyze.max);
});

test('testing max of secondArray', () => {
  expect(analyze(secondArray).max).toBe(secondArrayAnalyze.max);
});

// test length
test('testing length of firstArray', () => {
  expect(analyze(firstArray).length).toBe(firstArrayAnalyze.length);
});

test('testing length of secondArray', () => {
  expect(analyze(secondArray).length).toBe(secondArrayAnalyze.length);
});