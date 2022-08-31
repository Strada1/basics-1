function showVerticalMessage(str) {
  // Если строка начинается с буквы "s" - нужно вывести эту строку с первой заглавной буквой.
  if (str[0] === 's') {
    str = str[0].toUpperCase() + str.slice(1);
  }

  // Если строка больше 7 символов - вывести только первые 7.
  if (str.length > 7) {
    str = str.slice(0, 7);
  }

  for (let char of str) {
    console.log(char);
  }

  // Проверка на пустую строку.
  if (!str) console.log('Пустая строка');
}

showVerticalMessage('strada');
// showVerticalMessage('');
// showVerticalMessage('Hello World! Hi, Max!');

/*
  showVerticalMessage('strada')
  S
  t
  r
  a
  d
  a
  */
