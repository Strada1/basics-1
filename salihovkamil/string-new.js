function showVerticalMessage(str) {
  if (str) {
    str = str.trim();
    if (str[0] == 's') {
      str = str[0].toUpperCase() + str.slice(1);
    }
    if (str.length > 7) {
      str = str.slice(0, 7)
    }
    for (let char of str) {
      console.log(char);
    }
  }
  else {
    console.log('Строка не введена!');
  }
}
showVerticalMessage('strada');
showVerticalMessage(' jdfkjdkjfdksdljffsdafdksj');