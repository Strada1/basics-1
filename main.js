let equalsButton = document.querySelector('.equals__btn');
let select = document.querySelector('.select');
let isFirstTime = true;

const OPERATIONS = {
    ADD: 'add',
    SUBTRACT: 'subtract',
    MULTI: 'multi',
}

function calculate(operand1, action, operand2) {
    switch(action) {
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

equalsButton.addEventListener('click', function() {
    let operand1 = +document.querySelectorAll('.input')[0].value;
    let operand2 = +document.querySelectorAll('.input')[1].value;
    let actualResult = document.querySelector('.actual__result');
    if (!isFirstTime) {
        saveResult(actualResult);
    }
    actualResult.innerHTML = calculate(operand1, select.value,operand2);
    isFirstTime = false;
})