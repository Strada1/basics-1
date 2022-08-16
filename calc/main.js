

function calc (firstNumber, secondNumber, operator) {
    let result;

    let isNumber = ((typeof (firstNumber) === "number") && (typeof (secondNumber) === "number"));

    if (isNumber === false) {
        return console.log("not a number");
    }

    switch (operator) {
        case "addition":
            result = firstNumber + secondNumber;
            break;
        case "subtraction":
            result = firstNumber - secondNumber;
            break;
        case "multiplication":
            result = firstNumber * secondNumber;
            break
        default:
            result = "operator is not defined...";
    }

    return console.log (result);
}


const operations = {
    addiction: "+",
    subtraction: "-",
    multiplication: "*",
}
