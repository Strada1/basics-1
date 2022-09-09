const calculator = document.querySelector(`.js-calculator`);

const calcButton = calculator.querySelector(`.js-button`);
const firstInput = calculator.querySelector(`.js-first-operand`);
const secondInput = calculator.querySelector(`.js-second-operand`);
const operator = calculator.querySelector(`.js-operator`);
const value = calculator.querySelector(`.js-value`);

function calc() {
    let firstOperand = +firstInput.value;
    let secondOperand = +secondInput.value;
    switch(operator.value) {
        case `sum`:
            value.innerHTML = firstOperand + secondOperand
            break;
        case `sub`:
            value.innerHTML = firstOperand - secondOperand;
            break;
        case `multi`:
            value.innerHTML = firstOperand * secondOperand;
            break;
        case `div`:
            value.innerHTML = firstOperand / secondOperand;
            break;
        default:
            console.log(`Error`)
    }
}

calcButton.addEventListener(`click`, calc);