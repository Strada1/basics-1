/* function calc(action, a = 0, b = 0) {

   return (action == 'add') ? a + b :
      (action == 'multi') ? a * b :
         (action == 'subtract') ? a - b :
            console.log('Введите одно из доступных действий: add (+) / multi (*) / subtract (-)');

} */

function calc(action, a = 0, b = 0) {

   switch (action) {

      case 'add':
         return a + b;
      case 'multi':
         return a * b;
      case 'subtract':
         return a - b;
      default:
         return console.error('Введите одно из доступных действий: add (+) / multi (*) / subtract (-)');

   }

}
