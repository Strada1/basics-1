function calcSwitchFn(value, a, b) {
  const operations = {
    add: 'add',
    multi: 'multi',
    subtract: 'subtract',
  };

  // Применяем функцию проверки
  if (checkValue(a) && checkValue(b)) {
    let res = 0;

    switch (value) {
      case operations.add:
        res = a + b;
        break;

      case operations.multi:
        res = a * b;
        break;

      case operations.subtract:
        res = a - b;
        break;

      default:
    }

    return res;
  }

  // Функция проверки на число.
  function checkValue(value) {
    return typeof value === 'number';
  }
}

console.log(calcSwitchFn('add', 1, 2)); // 3
console.log(calcSwitchFn('multi', 1, 2)); // 2
console.log(calcSwitchFn('subtract', 3, 2)); // 1
console.log(calcSwitchFn('add', 1, '2')); // undefined
console.log(calcSwitchFn('add', -5, 'd')); // undefined
