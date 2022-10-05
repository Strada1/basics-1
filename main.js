function calcSwitch(operator, a, b) {
  switch (operator) {
    case 'add' :
      return a + b;
    case 'multi':
      return a * b
    case 'subtract':
      return a - b
    default:
      console.log('Error')
  }
}

console.log(calcSwitch('add', 1, 2))
console.log(calcSwitch('multi', 1, 2))
console.log(calcSwitch('subtract', 3, 2))
