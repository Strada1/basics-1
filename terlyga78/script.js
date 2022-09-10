import { calc } from './calc.js'

const buttonEquals = document.getElementById("calcButton");
buttonEquals.onclick = runCalc;

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

