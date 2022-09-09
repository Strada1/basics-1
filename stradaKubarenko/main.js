const OPERATIONS = {
   ADD : "+",
   SUBSTRACT : "-",
   MULTIPLE : "*",
   DIVISION : "/",
};

function calculate () {
   let inputNumber1 = document.body.children[0].children[0].children[0].value;
   let inputNumber2 = document.body.children[0].children[0].children[2].value;
   let operation = document.getElementById('chooseMath').value;
   let results;
   switch (operation) {
      case OPERATIONS.ADD:
         results = Number(inputNumber1) + Number(inputNumber2) ;
         result.innerHTML = results;
         break;
      case OPERATIONS.SUBSTRACT:
         results = Number(inputNumber1) - Number(inputNumber2) ;
         result.innerHTML = results;
         break;
      case OPERATIONS.MULTIPLE:
         results = Number(inputNumber1) * Number(inputNumber2) ;
         result.innerHTML = results;
         break;
      case OPERATIONS.DIVISION:
         results = Number(inputNumber1) / Number(inputNumber2) ;
         result.innerHTML = results;
         break;
      default :
         return "Ошибка"
   }
};


button.addEventListener('click', calculate);

