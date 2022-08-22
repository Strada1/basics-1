function calc(operator, a, b) {
  switch (operator) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
    default:
      return 'Введенная операция не существует';
  }
}

console.log(calc('multi', 4, 6));
console.log(calc('add', 3, 5));
console.log(calc('subtract', 21, 16));
console.log(calc('subtrac', 21, 16));
