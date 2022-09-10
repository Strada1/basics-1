import calc from './calc.js';
const OPERATION = document.querySelector('#calc');
const FIRST_NUMBER = document.querySelector('#first-number');
const SECONT_NUMBER = document.querySelector('#second-number');
const DIV_RESULT = document.querySelector('.calc__result');
function showResult() {
  let result = calc(OPERATION.value, FIRST_NUMBER.value, SECONT_NUMBER.value);
  let div = document.createElement('div');
  div.innerHTML = result;
  DIV_RESULT.prepend(div);
  div.addEventListener('click', () => div.remove());
}
btn.addEventListener('click', showResult);
