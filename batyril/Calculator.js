
function сalc( operator, firstValue = 0 , secondValue = 0){
  let result = 0;

  const operations = {
    add: '+',
    multi: '*',
    subtract: '-',
  }

  switch (operator){
    case operations.multi:
      result = firstValue * secondValue;
      break;
    case operations.add:
      result = firstValue + secondValue ;
      break;
    case operations.subtract:
      result = firstValue - secondValue;
      break;
    default:
      result = "operator not found" ;
  }

  return result
}

console.log(сalc('+', 4, 4))
console.log(сalc('-', 14, 2) )
console.log(сalc('*', 15, 10) )
console.log(сalc('subtrac79t', 3, 2) )
