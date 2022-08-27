function calc(operation, arg1, arg2) {
  switch (operation) {
    
    case 'add':
      return arg1 + arg2;

    case 'multi': 
      return arg1 * arg2;

    case 'subtract':
      return arg1 - arg2;

    default: 
      throw new Error(`Unknown operation: ${operation}`);
  
  }
}

console.log(calc('add', 5, 2))
console.log(calc('multi', 5, 2))
console.log(calc('subtract', 5, 2))
//console.log(calc('minus', 5, 2))
