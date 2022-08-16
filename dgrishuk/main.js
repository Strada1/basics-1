function сalc (operator, a, b) {
    switch (operator) {
      case 'add':
        return Number(a) + Number(b)
      case 'multi':
        return Number(a) * Number(b)
      case 'subtract':
        return Number(a) - Number(b)
      default:
        return 'Error'
    }
  }
  
  console.log(сalc('add', 1, 2));
  console.log(сalc('multi', 1, 2));
  console.log(сalc('subtract', 3, 2));