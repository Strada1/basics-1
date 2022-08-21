function func(operation, num1, num2) {
  let result;
  let operations = {
    add: '+',
    multi: '*',
    sub: '-',
  };
    switch (operation) {
    case operations.add:
      result = num1 + num2;
      break;
    case operations.sub:
      result = num1 - num2;
      break;
    case operations.multi:
      result = num1 * num2;
      break;
  }
  //console.log(result);
}
//func('-', 1, 6);