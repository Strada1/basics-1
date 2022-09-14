export function calc(operator, operand1, operand2) {

  function testOfType(value) {
    return typeof value === 'number';
  }
  
  let operations = {
    add: 'add',
    multi: 'multi',
    sub: 'subtract',
    div: 'division'
  }

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
        case(operations.div):
          return operand1 / operand2;
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

