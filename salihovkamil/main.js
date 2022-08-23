function showVerticalMessage(str) {
  if (str) {
    if (str[0] == 's') {
      str = str[0].toUpperCase() + str.slice(1);
    }
    if(str>7) {
      str = str.slice(0,7)
    }
    for (let char of str) {
      console.log(char);
    }
  }
  else{
    console.log('Строка не введена!'); 
  }
}

showVerticalMessage('strada');
showVerticalMessage('123456789');