import { calc } from './calcFn.js';

const container = document.querySelector('.container');
const operand1 = document.querySelector('#operand1');
const operand2 = document.querySelector('#operand2');
const operation = document.querySelector('#operation');
const equalsButton = document.querySelector('#euqalsButton');
const result = document.querySelector('#result');

// adding calc() to UI
let res;
try {
  equalsButton.addEventListener('click', (e) => {
    e.preventDefault();

    res = calc(+operand1.value, +operand2.value, operation.value);
    result.textContent = Math.trunc(res);
  });
} catch (error) {
  alert('Ошибка!');
}

// rendering list of results
try {
  let ul = document.querySelector('.allResults');

  equalsButton.addEventListener('click', (e) => {
    e.preventDefault();

    let li = document.createElement('li');
    li.textContent = res;
    ul.append(li);

    // removing li when clicking it
    li.addEventListener('click', (e) => {
      e.target.remove();
    });
  });
} catch (error) {
  alert('Ошибка!');
}
