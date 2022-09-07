const calculator = document.querySelector('.calc');
const firstInput = document.querySelector('.first-input');
const lastInput = document.querySelector('.last-input');
const result = document.querySelector('.result');

function calc(operator, a, b) {

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a - b;
    default:
      console.log("Ошибка");
  }
}

calculator.addEventListener('change', (e) => {
  const a = calc(e.target.value, +firstInput.value, +lastInput.value);
  result.textContent = a;
})

firstInput.addEventListener('change', () => {
  if (+firstInput.value && +lastInput.value) {
    result.textContent = calc(calculator.value, +firstInput.value, +lastInput.value)
  }
})

lastInput.addEventListener('change', () => {
  if (+firstInput.value && +lastInput.value) {
    result.textContent = calc(calculator.value, +firstInput.value, +lastInput.value)
  }
})
