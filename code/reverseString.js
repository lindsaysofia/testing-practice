function reverseString(str) {
  if (typeof str !== 'string') return str;
  return str.split('').reverse().join('');
}

module.exports = reverseString;