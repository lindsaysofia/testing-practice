const caesar = require('../code/caesar');

test('"attack at dawn" becomes "fyyfhp fy ifbs"', () => {
  expect(caesar('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('"defend the east wall of the castle" becomes "wxyxgw max xtlm ptee hy max vtlmex"', () => {
  expect(caesar('defend the east wall of the castle', 19)).toBe('wxyxgw max xtlm ptee hy max vtlmex');
});

test('Case stays the same: "Defend The East Wall Of The Castle" becomes "Dxyxgw Max Xtlm Ptee Hy Max Vtlmex"', () => {
  expect(caesar('Defend The East Wall Of The Castle', 19)).toBe('Wxyxgw Max Xtlm Ptee Hy Max Vtlmex');
});

test('Punctuation stays the same: "Defend. The. East. Wall. Of. The. Castle!" becomes "Wxyxgw. Max. Xtlm. Ptee. Hy. Max. Vtlmex!"', () => {
  expect(caesar('Defend. The. East. Wall. Of. The. Castle!', 19)).toBe('Wxyxgw. Max. Xtlm. Ptee. Hy. Max. Vtlmex!');
});

test('negative shift returns the same string. shift needs to be positive', () => {
  expect(caesar('defend the east', -3)).toBe('defend the east');
});

test('undefined shift returns the same string', () => {
  expect(caesar('defend the east')).toBe('defend the east');
});

test('undefined shift returns the same string', () => {
  expect(caesar('defend the east', null)).toBe('defend the east');
});