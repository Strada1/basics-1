function calc(operator, firstOperand, secondOperand) {
  if (operator == `add`) {
    return firstOperand + secondOperand;
  } else if (operator == `multi`) {
    return firstOperand * secondOperand;
  } else if (operator == `subtract`) {
    return firstOperand - secondOperand;
  }
}

console.log(calc(`subtract`, 2, 2));

function calc(operator, firstOperand, secondOperand) {
  switch (operator) {
    case `add`:
      return firstOperand + secondOperand;
      break;
    case `multi`:
      return firstOperand * secondOperand;
      break;
    case `subtract`:
      return firstOperand - secondOperand;
      break;
    default:
      console.log(`Не верное значение оператора`);
  }
}
console.log(calc(`add`, 5, 5));
