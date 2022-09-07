let num1 = document.querySelector('.calc_numOne');
let num2 = document.querySelector('.calc_numTwo');
let operator = document.querySelector('.calc_do');
let result = document.querySelector('.result');
let btn = document.querySelector('.btn');

function calc(operator, a, b) {
  if (b === 0) {
    return `you can't divide by zero`;
  }
  switch (operator) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
    case 'divide':
      return a / b;
    default:
      console.log('Ошибка');
      return 'Ошибка';
  }
}

btn.addEventListener('click', function () {
  num1.placeholder = num1.value;
  num2.placeholder = num2.value;
  result.textContent = +calc(operator.value, +num1.value, +num2.value).toFixed(
    10
  );
});
