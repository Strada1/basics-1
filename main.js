export function calculate (a, b, operation) {

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
   return operationResult = 'error'
 } else {
    return operationResult = Number(operationResult.toFixed(10));
 }

};

