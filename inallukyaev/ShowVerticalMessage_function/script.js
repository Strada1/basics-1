function showVerticalMessage(str = '') {
  str = str.length > 7 ? str.trim().slice(0, 7) : str.trim();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 's' && i === 0) {
      result += str[0].toUpperCase() + '\n';
      continue;
    }
    result += str[i] + '\n';
  }
  return result;
}
