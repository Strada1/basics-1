{
   const ACTION_LIST = {
      add: { key: 'add', value: '+' },
      sub: { key: 'sub', value: '-' },
      mult: { key: 'mult', value: '*' },
      div: { key: 'div', value: '/' },
   }

   function getDomElement(elem, all = false) {
      if (all) {
         return document.querySelectorAll(elem);
      }
      return document.querySelector(elem);
   }

   const equalsBtn = getDomElement('.equals__btn');
   const firstOperand = getDomElement('.first-operand input');
   const secondOperand = getDomElement('.second-operand input');
   const bodyResult = getDomElement('.body__result input');
   const currentAction = getDomElement('.body__select .action');
   const allResults = getDomElement('.all-results');

   (function () {

      for (let action in ACTION_LIST) {

         let option = document.createElement('option');
         option.value = action;
         option.innerText = ACTION_LIST[action].value;
         currentAction.append(option);

      }

   })();

   function calc(a, b, operator) {

      switch (operator) {

         case ACTION_LIST.add.key:
            return +a + +b;
         case ACTION_LIST.sub.key:
            return a - b;
         case ACTION_LIST.mult.key:
            return a * b;
         case ACTION_LIST.div.key:
            return a / b;
         default:
            return 'Ошибка функции calc()!';

      }

   }

   function addToResultsList(result) {

      let createResDiv = document.createElement('div');
      createResDiv.classList.add('all-results__item');
      createResDiv.innerText = result;
      allResults.append(createResDiv);

   }

   function deleteResult(elem) {

      if (elem.classList.contains('all-results__item')) {
         return elem.remove();
      }

      return `Ошибка при удалении deleteResult()!`

   }

   equalsBtn.addEventListener('click', () => {
      bodyResult.value = +calc(firstOperand.value, secondOperand.value, currentAction.value).toFixed(4);
      addToResultsList(bodyResult.value);
   });

   allResults.addEventListener('click', (event) => {
      deleteResult(event.target);
   });

}