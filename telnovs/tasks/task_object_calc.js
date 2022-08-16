let operations ={
   add : '+',
   multi: '*',
   subtract: '-'

};

function calc(operations,b,c){
      if ( b && c === undefined ){
        return  console.log('Вы не ввили число')
      } ;
    
      switch (operations){
       case "add": 
        console.log ( b +c);
       break;
       case 'multi':
         console.log ( b * c);
        break; 
       case 'subtract':
         console.log (b - c);
         break;
       default:
        console.log("Вы не ввили действе")  
      };
}  

calc('add',6,7);
calc('multi',6,7);
calc('subtract',6,7);