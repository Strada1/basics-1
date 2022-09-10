import { calc } from './calc.js';
function showResult() {
  let result = calc(calc.value, firstnumber.value, secondnumber.value);
  let divResult = document.querySelector('.calc__result');
  let div = document.createElement('div');
  div.innerHTML = result;
  divResult.prepend(div);
  div.addEventListener('click', () => div.remove());
}
btn.addEventListener('click', showResult);
