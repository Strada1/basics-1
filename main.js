export function calculate (a, b, operation) {

  const OPERATION = {
    add : 'add',
    multiply : 'multiply',
    subtract : 'subtract',
    divide : 'divide',
  };
  
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
