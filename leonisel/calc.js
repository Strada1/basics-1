let operations = {
  add: 'add',
  multi: 'multi',
  sub: 'subtract',
}

function calc(operator, operand1, operand2) {

  if(operand1 && operand2) {
    if(testOfType(operand1) && testOfType(operand2)) {
      switch(operator) {
        case(operations.add):
          return operand1 + operand2;
          break;
        case(operations.multi):
          return operand1 * operand2;
          break;
        case(operations.sub):
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

console.log(calc('add', 1, 2));  // возвращает 3
console.log(calc('multi', 1, 2));  // возвращает 2
console.log(calc('subtract', 3, 2));  // возвращает 1


