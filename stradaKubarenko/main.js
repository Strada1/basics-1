import { onlyNum } from "./module.js";
const ONLY_NUMBERS = onlyNum
const OPERATIONS = {
   ADD : "+",
   SUBSTRACT : "-",
   MULTIPLE : "*",
   DIVISION : "/",
};

const ELEMENTS = {
   FIRST_INPUT : document.getElementById('firstInput'),
   SECOND_INPUT : document.getElementById('secondInput'),
   EQUAL : document.getElementById('equalButton'),
   RESULT : document.getElementById('result'),
   NEW_RESULT : document.getElementById('newResult')
}

function calculate () {
   let result ;
   let firstInput = Number(ELEMENTS.FIRST_INPUT.value);
   let secondInput = Number(ELEMENTS.SECOND_INPUT.value);
   if (isFinite(ELEMENTS.FIRST_INPUT.value) && isFinite(ELEMENTS.SECOND_INPUT.value)) {

      switch (document.getElementById('chooseMath').value) {
         case OPERATIONS.ADD :
            result = firstInput + secondInput;
            break;
         case OPERATIONS.SUBSTRACT :
            result = firstInput - secondInput;
            break;
         case OPERATIONS.MULTIPLE :
            result = firstInput * secondInput;
            break;
         case OPERATIONS.DIVISION :
            result = firstInput / secondInput;
            break;
      }
   }else {
      return ONLY_NUMBERS();
   }

   ELEMENTS.RESULT.textContent = result;
}

ELEMENTS.EQUAL.addEventListener('click',calculate);

let newResult = document.createElement('div');
newResult.classList = "newResult";
newResult.setAttribute('id','newResult')
newResult.textContent = ELEMENTS.RESULT.textContent;
ELEMENTS.RESULT.after(newResult);

// function deleteNewResult() {
//    this.remove()
// }
// ELEMENTS.NEW_RESULT.addEventListener('click', deleteNewResult)





