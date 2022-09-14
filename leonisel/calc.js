//DOM
let getOperand1 = document.getElementById('operand-1');
let getOperand2 = document.getElementById('operand-2');
let selectOperator = document.getElementById('operator');
let equal = document.querySelector('.equal-wrapper');
let res = document.querySelector('.result');
let equalContainer = document.querySelector('.equal-container');
// let divCount = 1;

equal.addEventListener('click', function() {
  const op1 = Number(getOperand1.value);
  const op2 = Number(getOperand2.value);
  let oper = selectOperator.value;
  // res.textContent = calc(oper, op1, op2);
  let resCalc = calc(oper, op1, op2);
  res.textContent = resCalc;

  //Add div
  
  let newDiv = document.createElement('div');
  // newDiv.className = 'newDiv'+divCount;
  // divCount++;
  newDiv.className = 'newDiv';
  newDiv.textContent = resCalc;
  equalContainer.append(newDiv);
  newDiv.addEventListener('click', function(e){
    e.currentTarget.remove();
  })
})

//   newDiv.addEventListener('click', function(){
//   newDiv.remove();
// })

//Logic

let operations = {
  add: 'add',
  multi: 'multi',
  sub: 'subtract',
  div: 'division'
}

function calc(operator, operand1, operand2) {

  if(operand1 && operand2) {
    if(testOfType(operand1) && testOfType(operand2)) {
      switch(operator) {
        case(operations.add):
          return operand1 + operand2;
          break;
        case(operations.multi):
          return operand1 * operand2;
          break;
        case(operations.sub):
          return operand1 - operand2;
          break;
        case(operations.div):
          return operand1 / operand2;
          break;  
        default:
          return 'Error';  
      }
    } else {
      return 'Argument can be only type Number';
    }
    
  } else {
    return 'Add argument and try again';
  }
}

function testOfType(value) {
  return typeof value === 'number';
}

// console.log(calc('add', 1, 2));  // возвращает 3
// console.log(calc('multi', 1, 2));  // возвращает 2
// console.log(calc('subtract', 3, 2));  // возвращает 1
// console.log(calc('division', 3, 2);  // возвращает 1.5

