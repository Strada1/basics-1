function calc(operation, a, b) {
  switch (operation) {
    case 'add':
      console.log(a + b)
      break
    case 'multi':
      console.log(a * b)
      break
    case 'subtract':
      console.log(a - b)
      break
  }
}

calc('add', 3, 3);
calc('multi', 3, 2);
calc('subtract', 10, 5);
