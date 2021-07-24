const analyze = require('../code/analyze');
const firstArray = [1, 8, 3, 4, 2, 6];
const firstArrayAnalyze = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};

//test average;
test('testing average of firstArray', () => {
  expect(analyze(firstArray).average).toBe(firstArrayAnalyze.average);
});