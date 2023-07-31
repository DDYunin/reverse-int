module.exports = function reverse (n) {
  const arrayDigits = String(n).split('').reverse();
  if (arrayDigits[arrayDigits.length - 1] === '-') {
    arrayDigits.pop();
  }
  return arrayDigits.join('');
}
