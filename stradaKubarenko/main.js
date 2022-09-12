const OPERATIONS = {
   ADD : "+",
   SUBSTRACT : "-",
   MULTIPLE : "*",
   DIVISION : "/",
};

const ELEMENTS = {
   FIRST_INPUT: document.getElementById('input1'),
   SECOND_INPUT: document.getElementById('input2'),
   MATH : document.getElementById('chooseMath'),
   EQUAL : document.getElementById('button'),
   RESULT : document.getElementById('result'),
   // NEW_RESULT : document.createElement('div'),
}

function calculate () {
   let inputNumber1 = +ELEMENTS.FIRST_INPUT.value;
   let inputNumber2 = +ELEMENTS.SECOND_INPUT.value;
   let operation = ELEMENTS.MATH.value;
   let results;
   let result = ELEMENTS.RESULT;

   let newResult = document.createElement('div');
   newResult.className = "newResult";
   newResult.innerHTML = result.innerHTML;  
   result.after(newResult);
   // ELEMENTS.NEW_RESULT.className = "newResult";
   // ELEMENTS.NEW_RESULT.innerHTML = result.innerHTML;  
   // result.after(ELEMENTS.NEW_RESULT);

   switch (operation) {
      case OPERATIONS.ADD:
         results = inputNumber1 + inputNumber2 ;
         result.innerHTML = results;
         break;
      case OPERATIONS.SUBSTRACT:
         results = inputNumber1 - inputNumber2 ;
         result.innerHTML = results;
         break;
      case OPERATIONS.MULTIPLE:
         results = inputNumber1 * inputNumber2;
         result.innerHTML = results;
         break;
      case OPERATIONS.DIVISION:
         results = inputNumber1 / inputNumber2 ;
         result.innerHTML = results;
         break;
      default :
         return "Ошибка"
   }
};

ELEMENTS.EQUAL.addEventListener('click', calculate);

function del() {
   
}
newResult.addEventListener('click',del )

