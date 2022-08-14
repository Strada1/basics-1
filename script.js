function calc(action, a, b) {


   if (!checkValidNumber(a, b)) {
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

function checkValidNumber(firstNum, twoNumber) {

   if (typeof (firstNum) && typeof (twoNumber) == 'number') {
      return true;
   }

}

