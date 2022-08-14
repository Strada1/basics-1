function calc(operator, a = 0, b = 0) {
   if (isNaN(a) || isNaN(b)) return 'error';

   let result = 0;
   switch (operator) {
      case '+':
         result = +a + +b;
         break;
      case '-':
         result = a - b;
         break
      case '*':
         result = a * b;
         break
      default:
         result = 'error';
   }

   return result;
}