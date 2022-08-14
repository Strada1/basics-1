function calc(operation,a,b) {

  switch (operation) {
    case 'add':
    return (+a + +b);

    case 'multi':
    return a * b;
  
    case 'subtract':
    return a - b;

    default:
    return "error: unknown operation name";
  }
}

console.log(calc('add',5,2));
console.log(calc('multi',2,3));
console.log(calc('subtract',6,2));
console.log(calc('smth else',5,2));
