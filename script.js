/* function calc(action, a = 0, b = 0) {

   return (action == 'add') ? a + b :
      (action == 'multi') ? a * b :
         (action == 'subtract') ? a - b :
            console.log('Введите одно из доступных действий: add (+) / multi (*) / subtract (-)');

} */

function calc(action, a, b) {


   if (!getValidNumber(a, b)) {
      console.log('test');

      return console.error('Вторым и третим аргументом должны быть числа;');

   }

   switch (action) {

      case 'add':
         return Number(a) + Number(b);
      case 'multi':
         return a * b;
      case 'subtract':
         return a - b;
      default:
         return console.error('Введите одно из доступных действий: add (+) / multi (*) / subtract (-)');

   }

}

function getValidNumber(firstNum, twoNumber) {

   if (typeof (firstNum) && typeof (twoNumber) == 'number') {
      console.log('test2');
      return true;
   }

}

