

  let a = prompt ('Введите a', '') ;
  let b = prompt ('Введите b', '') ;
  let operation = prompt ('Введите действие', 'add, multi, subtract?');
  
  
   function calc (operation, a, b) {
  
    switch (operation) {
      case 'add' :
          return (+a + +b);
      
      case 'multi' :
          return (a*b);
  
      case 'subtract' :
          return (a-b);
  
      default :
      return ('mistake')
  
  
    }
  }
   
  alert (calc (operation, a, b));