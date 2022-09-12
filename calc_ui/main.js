import { calc } from './calc.js';

let equals = document.querySelector('.equals');
let result = document.querySelector('.result_number');
let firstNumber = document.querySelector('#first_number').value;
let secondNumber = document.querySelector('#second_number').value;
let option = document.querySelector('.select_value').value;
let list = document.querySelector('.result_list');

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
