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
}

function calculate () {
   let result ;
   if (isFinite(ELEMENTS.FIRST_INPUT.value) && isFinite(ELEMENTS.SECOND_INPUT.value)) {

   switch (document.getElementById('chooseMath').value) {
      case OPERATIONS.ADD :
         result = Number(ELEMENTS.FIRST_INPUT.value) + Number(ELEMENTS.SECOND_INPUT.value);
         break;
      case OPERATIONS.SUBSTRACT :
         result = Number(ELEMENTS.FIRST_INPUT.value) - Number(ELEMENTS.SECOND_INPUT.value);
         break;
      case OPERATIONS.MULTIPLE :
         result = Number(ELEMENTS.FIRST_INPUT.value) * Number(ELEMENTS.SECOND_INPUT.value);
         break;
      case OPERATIONS.DIVISION :
         result = Number(ELEMENTS.FIRST_INPUT.value) / Number(ELEMENTS.SECOND_INPUT.value);
         break;
   }
   }else {
      return alert ('Введите только числа')}

   ELEMENTS.RESULT.innerHTML = result.toFixed(10);
}

 ELEMENTS.EQUAL.addEventListener('click',calculate);

