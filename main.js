let equalsButton = document.querySelector('.equals__btn');
let select = document.querySelector('.select');
let isFirstTime = true;

const OPERATIONS = {
    ADD: 'add',
    SUBTRACT: 'subtract',
    MULTI: 'multi',
}

function calculate(operand1, action, operand2) {
    switch (action) {
        case OPERATIONS.ADD:
            return operand1 + operand2;
        case OPERATIONS.SUBTRACT:
            return operand1 - operand2;
        case OPERATIONS.MULTI:
            return operand1 * operand2;
    }
}

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

equalsButton.addEventListener('click', runCalculation);
document.addEventListener('keyup', event => {
    if (event.code === 'Enter') runCalculation();
});