const operations = {
    result: 'result',
    add: 'add',
    multi:'multi',
    subtract:'subtract'
};

function calcObject(operation, firstNumber, secondNumber) {
    if ( checkInput(firstNumber,secondNumber) ) return "Is not number";

    switch (operation) {
        case (operations.add):
            return operations.result = firstNumber + secondNumber;
        case (operations.multi):
            return operations.result = firstNumber * secondNumber;
        case (operations.subtract):
            return operations.result = firstNumber - secondNumber;
        default:
            return "unknown operation";
    }
}

console.log("------ Конструкция Object ------")
console.log( calcObject( operations.add,1,2 ) );
console.log( calcObject( operations.multi,1,2 ) );
console.log( calcObject( operations.subtract,3,2 ) );