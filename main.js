import {equalsButton, clearButton, select} from './view.js';
import {calculate} from './calc.js';
let isFirstTime = true;

function saveResult(actualResult) {
    let previousResult = document.createElement('div');
    previousResult.className = 'result';
    previousResult.innerHTML = actualResult.innerHTML;
    previousResult.addEventListener('click', () => previousResult.remove())
    actualResult.after(previousResult);
}

function errorCheck(operand1, operand2) {
    if (isNaN(operand1) || isNaN(operand2)) {
        let error = document.querySelector('.error');
        let timerId = setInterval(() => {
            error.style.opacity = '1';
            error.style.visibility = 'visible';
            setTimeout(() => {
                error.style.opacity = '0';
                error.style.visibility = 'hidden';
            }, 300);
        }, 600);

        setTimeout(() => {
            clearInterval(timerId);
        }, 3000);
        return true;
    }
}

function runCalculation() {
    let operand1 = +document.querySelectorAll('.input')[0].value;
    let operand2 = +document.querySelectorAll('.input')[1].value;
    let actualResult = document.querySelector('.actual__result');
    if (errorCheck(operand1, operand2)) return;
    if (!isFirstTime) {
        saveResult(actualResult);
    }
    actualResult.innerHTML = +calculate(operand1, select.value, operand2).toFixed(4);
    isFirstTime = false;
}

function clearHistory() {
    let history = document.querySelectorAll('.result');
    for (let i = 0; i < history.length; i++) {
        history[i].remove();
    }
    document.querySelectorAll('.input')[0].value = 0;
    document.querySelectorAll('.input')[1].value = 0;
    document.querySelector('.actual__result').innerHTML = 0;
}

equalsButton.addEventListener('click', runCalculation);
document.addEventListener('keyup', event => {
    if (event.code === 'Enter') runCalculation();
});

clearButton.addEventListener('click', clearHistory)