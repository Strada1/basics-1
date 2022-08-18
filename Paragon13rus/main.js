//add, multi, subtract
function calc (operator, a, b){
	let result = 0;
  switch (operator){
  	case 'add':
  	 result = a + b;
     break;
    case 'multi':
  	 result = a * b;
     break;
    case 'subtract':
     result = a - b;
     break;
    default:
     console.log ("you need to write smt");
  }
  console.log(result);
}

calc ("add", 2, 4);
calc ("multi", 2, 4);
calc ("subtract", 2, 4);