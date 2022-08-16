function checkInput(firstNumber,secondNumber) {
    let checkInput = (typeof firstNumber !== 'number' || typeof secondNumber !== 'number')
    if (checkInput) {
        return true;
    }
}


function calcObject(operation, firstNumber, secondNumber) {
    if ( checkInput(firstNumber,secondNumber) ) return "Is not number";

    const operations = {
        'add': firstNumber + secondNumber,
        'multi': firstNumber * secondNumber,
        'subtract': firstNumber - secondNumber
    };

    const findOperator = ([operation] in operations);

    if (findOperator){
      return   operations[operation];
    }else {
        console.log("unknown operation")
    }
}

console.log("------ Конструкция Object ------")
console.log( calcObject( "add",1,2 ) );
console.log( calcObject( "multi",2,1 ) );
console.log( calcObject( "subtract",3,2 ) );
