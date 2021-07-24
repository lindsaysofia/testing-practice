function average(arr) {
  return (arr.reduce((sum, current) => {
    return sum + current;
  }, 0)) / arr.length;
}

function min(arr) {
  return arr.reduce((min, current) => {
    if (min <= current) return min;
    return current;
  });
}

function max(arr) {
  return arr.reduce((max, current) => {
    if (max >= current) return max;
    return current;
  });
}

function analyze(arr) {
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length
  };
}

module.exports = analyze;