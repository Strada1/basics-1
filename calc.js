export function calc(operator, firstOperand, secondOperand) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '-':
      return +(firstOperand - secondOperand).toFixed(10);
    case '/':
      return (firstOperand / secondOperand).toFixed(2);
    default:
      return ('Такого действия нет.');
  }
}

