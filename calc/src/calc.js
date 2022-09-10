const operations = {
    add: 'add',
    multi:'multi',
    subtract: 'subtract',
    divide: 'divide'
};


export function calcObject( operation, firstNumber, secondNumber ) {
    let secondNum = document.querySelector(".secondNumber").value;

    switch (operation) {
        case (operations.add):
            return +firstNumber + +secondNumber;
        case (operations.multi):
            return  firstNumber * secondNumber;
        case (operations.subtract):
            return  firstNumber - secondNumber;
        case (operations.divide):

            if (secondNum === "0"){
                result.textContent = "can't divide by zero"
            } else{
                return  firstNumber / secondNumber;
            }

        default:
            return "unknown operation";
    }
}
