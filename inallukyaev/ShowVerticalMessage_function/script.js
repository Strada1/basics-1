function showVerticalMessage(str = '') {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 's' && i === 0) {
      result += str[0].toUpperCase();
      continue;
    }
    result += str[i];
  }
  result = str.length > 7 ? result.slice(0, 7) : result;
  for (let char of result) {
    console.log(char);
  }
}
