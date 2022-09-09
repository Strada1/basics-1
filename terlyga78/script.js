function runCalc() {
    const firstNumber = document.getElementById("firstNumber");
    const operation = document.getElementById("operation");
    const secondNumber = document.getElementById("secondNumber");
    const result = document.getElementById("result");

    let firstValue = convertStringToNumber(firstNumber.value);
    let secondValue = convertStringToNumber(secondNumber.value);

    if ((isNaN(firstValue) || (isNaN(secondValue)))) {
        alert("Operand must be Number");
        return;
    }

    let value = calc(operation.value, firstValue, secondValue);
    result.value = value;

    let div = document.createElement('div');
    div.className = "saveDiv";
    div.innerHTML = value;
    div.onclick = () => div.remove();
    document.body.append(div);
}

function convertStringToNumber(text) {
    return +text;
}

function calc(operation, num1, num2) {
    const operations = { add: '+', multi: '*', subtract: '-', divide: '/' };
    let result;
    switch (operation) {
        case operations.add:
            result = num1 + num2;
            break;
        case operations.multi:
            result = num1 * num2;
            break;
        case operations.subtract:
            result = num1 - num2;
            break;
        case operations.divide:
            result = num1 / num2;
            break;
        default:
            result = undefined;
    };
    return result;
}
