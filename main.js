

let buttonResult = document.querySelector('.button');

function calculate () {

let a = document.querySelector('.number1').value;
let b = document.querySelector('.number2').value;
let operation = document.querySelector('.operation').value;
let result = document.querySelector('.result');
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
   return result.innerHTML = 'error'
 } else {
 
 let div = document.createElement('div');
 div.className = 'operation-result';
 div.innerHTML = Number(operationResult.toFixed(10));
  
 document.body.querySelector('.result').append(div);
   
div.addEventListener('click', () => div.remove());
 }
 
};

function deleteZero () {
 document.body.querySelector('.zero').remove();
 buttonResult.removeEventListener('click', deleteZero);
};



buttonResult.addEventListener('click', deleteZero);
buttonResult.addEventListener('click', calculate);