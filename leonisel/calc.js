import {calc} from './amount.js';

//DOM
let getOperand1 = document.getElementById('operand-1');
let getOperand2 = document.getElementById('operand-2');
let selectOperator = document.getElementById('operator');
let equal = document.querySelector('.equal-wrapper');
let res = document.querySelector('.result');
let equalContainer = document.querySelector('.equal-container');

equal.addEventListener('click', function() {
  const op1 = Number(getOperand1.value);
  const op2 = Number(getOperand2.value);
  let oper = selectOperator.value;
  let resCalc = calc(oper, op1, op2);
  res.textContent = resCalc;

  //Add div
  let newDiv = document.createElement('div');
  newDiv.className = 'newDiv';
  newDiv.textContent = resCalc;
  equalContainer.append(newDiv);
  newDiv.addEventListener('click', function(e){
    e.currentTarget.remove();
  })
})

