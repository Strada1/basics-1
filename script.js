function calc(action, a, b) {

   /* проверка на NaN */
   if (isNaN(+a) || isNaN(+b)) {
      return console.error('Второй и третий аргумент должны быть числами!');
   }

   const operations = {
      add: +a + +b,
      multi: a * b,
      sub: a - b,
   }

   for (let key in operations) {
      if (key == action) {
         return operations[key];
      }
   }

   return console.error('Введите одно из доступных действий: add (+) / multi (*) / sub (-)');

}