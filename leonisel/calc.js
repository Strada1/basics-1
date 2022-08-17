function calc(operator, operand1, operand2) {

  if(operand1 && operand2) {
    if(testOfType(operand1) && testOfType(operand2)) {
      switch(operator) {
        case('add'):
          return operand1 + operand2;
          break;
        case('multi'):
          return operand1 * operand2;
          break;
        case('subtract'):
          return operand1 - operand2;
          break;
        default:
          return 'Error';  
      }
    } else {
      return 'Argument can be only type Number';
    }
    
  } else {
    return 'Add argument and try again';
  }
}

function testOfType(value) {
  return typeof value === 'number';
}

console.log(calc('subtract', 3, 2));


