let equals = document.querySelector('.equals');
let result = document.querySelector('.result_number');
let firstNumber = document.querySelector('#first_number').value;
let secondNumber = document.querySelector('#second_number').value;
let option = document.querySelector('.select_value').value;

function calc(valueOpt, a, b) {
  let res = 0;

  switch (valueOpt) {
    case 'addition':
      res = +a + +b; // применяем "+" приводим к числовому значению, чтобы не было конкатенации.
      break;

    case 'subtraction':
      res = a - b;
      break;

    case 'multiplication':
      res = a * b;
      break;

    case 'division':
      res = a / b;
      break;
  }
  return res;
}

function handler() {
  console.log(calc);
  if (firstNumber === '' || secondNumber === '') {
    result.textContent = 'Ошибка, введите число.';
  } else {
    result.textContent = +calc(option, firstNumber, secondNumber).toFixed(1); // применяем "+" приводим к числовому значению,так целое число запишется без остатка.
  }
  equals.removeEventListener('click', handler); // удаляем событие, так функция отработает лишь раз по клику.
}

equals.addEventListener('click', handler);
