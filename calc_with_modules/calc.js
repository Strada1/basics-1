export function calc(operator, a = 0, b = 0) {
  if (b === 0 && operator === 'divide') {
    return `Error`;
  }
  switch (operator) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
    case 'divide':
      return a / b;
    default:
      console.log('Ошибка');
      return 'Ошибка';
  }
}
