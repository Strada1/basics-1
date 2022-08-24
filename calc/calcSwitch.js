
function calc (operator, operandOne, operandTwo) {
    switch (operator){
    case 'subtract' :
      return Number(operandOne) - Number(operandTwo);
    case 'add' :
      return Number(operandOne) + Number(operandTwo);
    case 'multi' :
      return Number(operandOne) * Number(operandTwo);
    }
}

console.log(calc("subtract", 10, 4));
console.log(calc("add", 4, 2));
console.log(calc("multi", 2, 3));