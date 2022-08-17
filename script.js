
const operations = {
   add: 'add',
   multi: 'multiply',
   sub: 'subtract',
};

const operationsString = function () {
   let resultStr = '';
   for (let key in operations) {
      resultStr += operations[key] + ' | ';
   }
   return resultStr;
};

function calc(action, a, b) {

   /* проверка на NaN */
   if (isNaN(+a) || isNaN(+b)) {
      return `Второй и третий аргумент должны быть числами!`;
   }

   switch (action) {
      case operations.add:
         return +a + +b;
      case operations.multi:
         return a * b;
      case operations.sub:
         return a - b;
      default:
         return `Введите одно из доступных действий: ${operationsString()}`;

   }

}

(function () {

   let userAction = prompt(`Укажите одно из доступных действий калькулятора: ${operationsString()}`, '');
   let userFirstNum = prompt(`Укажите первое число`, '0');
   let userSecondNum = prompt(`Укажите второе число`, '0');

   alert('Результат: ' + calc(userAction, userFirstNum, userSecondNum));

})();

console.log(calc(operations.multi, 2, '3'));
console.log(calc('add', 2, '4'));
console.log(calc('multiply', 's', 2));
console.log(calc('subtract', '2', '4'));
console.log(calc('subsssss', '2', '4'));
