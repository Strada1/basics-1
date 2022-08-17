
const operations = {
   add: 'add',
   multi: 'multiply',
   sub: 'subtract',
}

function calc(action, a, b) {

   /* проверка на NaN */
   if (isNaN(+a) || isNaN(+b)) {
      return console.error('Второй и третий аргумент должны быть числами!');
   }

   switch (action) {
      case operations.add:
         return +a + +b;
      case operations.multi:
         return a * b;
      case operations.sub:
         return a - b;
      default:
         return console.error(`Введите одно из доступных действий: ${operations.add} / ${operations.multi} / ${operations.sub}`);
   }

}

console.log(calc(operations.multi, 2, '3'));
console.log(calc('add', 2, '4'));
console.log(calc('multiply', 's', 2));
console.log(calc('subtract', '2', '4'));
console.log(calc('subsssss', '2', '4'));
