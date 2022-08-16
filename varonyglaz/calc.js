let num1 = prompt('Введите первое число', '');
let action = prompt('Введите действие', '');
let num2 = prompt('Введите второе число', '');
let result;

if (Number(num1) == Number(num1) && Number(num2) == Number(num2)) {
  switch (action) {
    case '+':
      alert(calcPlusing(num1, num2));
      break;
    case '-':
      alert(calcMinusing(num1, num2));
      break;
    case '/':
      alert(calcDivision(num1, num2));
      break;
    case '*':
      alert(calcMultiplication(num1, num2));
      break;
    default:
      alert('Это не верное действие');
      break;
  }
} else {
  alert('Это не числа');
}

function calcPlusing(num1, num2) {
  return Number(num1) + Number(num2);
}

function calcMinusing(num1, num2) {
  return Number(num1) - Number(num2);
}

function calcMultiplication(num1, num2) {
  return Number(num1) * Number(num2);
}

function calcDivision(num1, num2) {
  return Number(num1) / Number(num2);
}