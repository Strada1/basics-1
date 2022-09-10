const calculator = document.querySelector('.calc');
const firstInput = document.querySelector('.first-input');
const lastInput = document.querySelector('.last-input');
const result = document.querySelector('.result');
const equals = document.querySelector('.equals');

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

equals.addEventListener('click', () => {
    const a = calc(calculator.value, +firstInput.value, +lastInput.value);
    result.textContent = a;
    const div = document.createElement('div');
    div.addEventListener('click', () => {
      div.remove();
    })
    div.textContent = a;
    document.body.appendChild(div);
})
