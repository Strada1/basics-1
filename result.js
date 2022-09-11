import {calculate} from './main.js';

const ELEMENTS = {
    firstNumber : document.querySelector('.number1'),
    secondNumber : document.querySelector('.number2'),
    operation : document.querySelector('.operation'),
    totalResult : document.querySelector('.result'),
    buttonResult : document.querySelector('.button'),
    zero : document.body.querySelector('.zero'),
  };

function addResult () {
    let a = ELEMENTS.firstNumber.value;
    let b = ELEMENTS.secondNumber.value;
    let operation = ELEMENTS.operation.value;

    let result = calculate(a, b, operation);

    let div = document.createElement('div');
    div.className = 'operation-result';
    div.innerHTML = result;
    ELEMENTS.totalResult.append(div);
    div.addEventListener('click', () => div.remove());
};

function deleteZero () {
    ELEMENTS.zero.remove();
    ELEMENTS.buttonResult.removeEventListener('click', deleteZero);
   };
   
ELEMENTS.buttonResult.addEventListener('click', deleteZero);


ELEMENTS.buttonResult.addEventListener('click', addResult);