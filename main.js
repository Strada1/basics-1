


let result = document.querySelector('.result');
let buttonResult = document.querySelector('.button');

 function calculate () {

let a = document.querySelector('.number1').value;
let b = document.querySelector('.number2').value;
let operation = document.querySelector('.operation').value;
let operationResult;

  switch (operation) {
    case 'add' :
     operationResult = +a + +b; 
     break;
         
    case 'multiply' :
      operationResult = a * b;
      break;

    case 'subtract' :
      operationResult = a - b;
      break;

    case 'divide' :
      operationResult = a / b;
      break;
  }

  if(!isFinite(operationResult)) {
    return result.innerHTML = 'mistake'
  } else {
  return result.innerHTML = Number(operationResult.toFixed(10));
  }
};

buttonResult.addEventListener('click', calculate);
