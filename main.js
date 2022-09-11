
const ELEMENTS = {
  firstNumber : document.querySelector('.number1'),
  secondNumber : document.querySelector('.number2'),
  operation : document.querySelector('.operation'),
  totalResult : document.querySelector('.result'),
  buttonResult : document.querySelector('.button'),
  zero : document.body.querySelector('.zero'),
};

const OPERATION = {
  add : 'add',
  multiply : 'multiply',
  subtract : 'subtract',
  divide : 'divide',
};



function calculate (a, b, operation) {

  let operationResult;
  
   switch (operation) {
     case OPERATION.add :
      operationResult = +a + +b; 
      break;
  
     case OPERATION.multiply :
       operationResult = a * b;
       break;
  
     case OPERATION.subtract :
       operationResult = a - b;
       break;
  
     case OPERATION.divide :
       operationResult = a / b;
       break;
   }
  
   if(!isFinite(operationResult)) {
     return operationResult = 'error'
   } else {
      return operationResult = Number(operationResult.toFixed(10));
   }
  
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
