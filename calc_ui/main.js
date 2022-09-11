let equals = document.querySelector('.equals');
let result = document.querySelector('.result_number');
let firstNumber = document.querySelector('#first_number').value;
let secondNumber = document.querySelector('#second_number').value;
let option = document.querySelector('.select_value').value;
let list = document.querySelector('.result_list');

function calc(valueOpt, a, b) {
  let res = 0;

  switch (valueOpt) {
    case 'addition':
      res = Number(a) + Number(b); // применяем "Number" приводим к числовому значению, убераем конкатенацию.
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
  if (firstNumber === '' || secondNumber === '') {
    result.textContent = 'Ошибка, введите число.';
  } else {
    result.textContent = Number(
      calc(option, firstNumber, secondNumber).toFixed(1)
    );
  }

  list.insertAdjacentHTML(
    'afterend',
    `<div class="item_list">${result.textContent}</div>`
  );

  let item = document.querySelector('.item_list');
  function deleteItem(item) {
    item.currentTarget.remove();
  }

  item.addEventListener('click', deleteItem);
}

equals.addEventListener('click', handler);
