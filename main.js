function calc(operator, operand1, operand2) {
  switch (operator) {
    case 'add':
      return operand1 + operand2;
      break;
    case 'multi':
      return operand1 * operand2;
      break;
    case'subtract':
      return operand1 - operand2;
      break
    default:
      console.log('Error');
  }
}

console.log(calc('subtract',12,5))