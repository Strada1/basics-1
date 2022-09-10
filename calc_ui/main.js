let equals = document.querySelector('.equals');
let result = document.querySelector('.result');
let firstNumber = document.querySelector('#first_number'.value);
let secondNumber = document.querySelector('#second_number'.value);
let option = document.querySelector('option'.value);

function calс(value, a, b) {
  switch (value) {
    case 'addition':
      a + b;
      break;

    case 'subtraction':
      a - b;
      break;

    case 'multiplication':
      a * b;
      break;

    case 'division':
      a / b;
      break;
  }
}

function handler() {
  if ((firstNumber || secondNumber) == '') {
    result.textContent = 'Ошибка, введите число.';
  } else {
    result.textContent = calc(option, firstNumber, secondNumber);
  }
}

equals.addEventListener('click', handler);
