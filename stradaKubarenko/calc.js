const operations = {
   add : "+",
   sub : "-",
   multi : "*",
};

function calculate (math, a ,b) {

   switch (math) {
      case operations.add:
         return  Number(a) + Number(b) ;
         break;
      case operations.sub:
         return  a - b ;
         break;
      case operations.multi:
         return  a * b ;
      default :
         return "Ошибка"
   }
}

console.log(calculate (operations.add, 12, 15))
console.log(calculate (operations.sub, 121, 105))
console.log(calculate (operations.multi, 11, 12))
