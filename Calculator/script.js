


function Calc(a,b,operation){
       
const isNotValid = (a !== Number(a) || b !== Number(b) || a === '' || b === '');
       

        if(!isNotValid) {
            
     switch(operation){
    case "add":
        console.log(a+b);
      break;
    case "mult": 
        console.log(a*b);
      break; 
    case "sub":
        console.log(a-b);
        break;
    case "div":
        console.log(a/b);
      break;
    case "deg":
        console.log(a**b);
      break;
        default:
            console.log("Увы, Вы ввели недопустимый оператор =(");
            console.log("Попробуйте еще раз");
        }
  } 
  else {
  console.log("Вы все перепутали, это не число");
  }
}

    let a = +prompt("Введите операнд a");
    let b = +prompt("Введите операнд b");
    let operation = prompt("Введите оператор:");
    
    Calc(a,b,operation)
 