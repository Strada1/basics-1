function showVerticalMessage(str) {
  if (typeof str !== 'string' || str.trim().length === 0) {
    return 'введите строку';
  }
  if (str[0] === 's') {
    str = str.replace('s', 'S');
  }
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i === 7) {
      break;
    }
    result += `${str[i]} \n`;
  }
  return result;
}

showVerticalMessage('srada')
