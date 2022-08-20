
function calc(operation, a, b) {
  let result;

  if (typeof(a) == 'number' && typeof(b) == 'number') {
    switch (operation) {
      case 'add':
        result = a + b;
        break;

      case 'multi':
        result = a * b;
        break;

      case 'subtract':
        result = a - b;
        break;

      default:
        result = 'error';
    } 
  } else {
      result = 'Введите числа';
  }

  return result;
}


// Test
console.log(calc('add', 1, 2));      // возвращает 3
console.log(calc('multi', 1, 2));    // возвращает 2
console.log(calc('subtract', 3, 2)); // возвращает 1
console.log(calc('div', 3, 2));      // возвращает error