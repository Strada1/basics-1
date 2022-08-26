function calc(operation, a, b) {
  switch(operation) {
  case '-':
    return a - b;
    break;
  case '+':
    return a + b;
    break;
  case '*':
    return a * b;
    break
  default:
    alert('Недопустимое действие!')
}
}

let a = +prompt('Введите число', '');
let operation = prompt('Введите действие');
let b = +prompt('Введите число', '');

let result = calc(operation, a, b);
alert(result);

