import {calculate} from './main.js';

let buttonResult = document.querySelector('.button');

function addResult () {
    let a = document.querySelector('.number1').value;
    let b = document.querySelector('.number2').value;
    let operation = document.querySelector('.operation').value;

    let result = calculate(a, b, operation);

    let div = document.createElement('div');
    div.className = 'operation-result';
    div.innerHTML = result;
    document.body.querySelector('.result').append(div);
    div.addEventListener('click', () => div.remove());
};

function deleteZero () {
    document.body.querySelector('.zero').remove();
    buttonResult.removeEventListener('click', deleteZero);
   };
   
   buttonResult.addEventListener('click', deleteZero);


buttonResult.addEventListener('click', addResult);