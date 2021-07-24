function caesar(str, shift) {
  if (!shift || shift < 0) return str;
  const alphaRegex = /[a-z]/gi;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  return str.replace(alphaRegex, (match) => {
    if (uppercaseRegex.test(match)) {
      return String.fromCharCode(65 + ((match.charCodeAt(0) - 65 + shift) % 26));
    } else if (lowercaseRegex.test(match)) {
      return String.fromCharCode(97 + ((match.charCodeAt(0) - 97 + shift) % 26));
    } else {
      return match;
    }
  });
}

module.exports = caesar;