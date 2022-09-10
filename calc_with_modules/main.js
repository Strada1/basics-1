import { calc } from './calc.js';
import { CreateAndSaveElemInNotes } from './CreateAndSaveElem.js';

let num1 = document.querySelector('.calc_numOne');
let num2 = document.querySelector('.calc_numTwo');
let operator = document.querySelector('.calc_do');
let resultInCalc = document.querySelector('.fake-result');
let blockwithResults = document.querySelector('.resultsBlock');
let results = document.getElementsByClassName('result');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  num1.placeholder = num1.value;
  num2.placeholder = num2.value;

  let newRes = CreateAndSaveElemInNotes(blockwithResults);
  let gg = calc(operator.value, +num1.value, +num2.value);

  if (num1.value === '0' || num2.value === '0') {
    resultInCalc.textContent = gg;
    newRes.textContent = gg;
  } else {
    newRes.textContent = +gg.toFixed(10);
    resultInCalc.textContent = +gg.toFixed(10);
  }
  if (results.length === 11) {
    results[0].remove();
  }
});
