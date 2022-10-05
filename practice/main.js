function calc(name, a, b) {
  if (name === 'add') {
    return a + b
  } else if (name === 'multi') {
    return a * b
  } else {
    return a - b
  }
}


console.log(calc('add', 1, 2))
console.log(calc('multi', 1, 2))
console.log(calc('subtract', 3, 2))



function calcSwitch(name, a, b) {
  switch (name) {
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



