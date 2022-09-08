let BUTTONS = {
    FIRST_NUMBER: document.querySelector('.firstNumber'),
    SECOND_NUMBER: document.querySelector('.secondNumber'),
    OPERATION: document.querySelector('.operation'),
    RESULT: document.querySelector('.equal'),
    TOTAL_NUMBER: document.querySelector('p')
}

function calc(operation, a, b) {
    const operations = {
        add: '+',
        multi: '*',
        subtract: '-',
        divide: '/'
    }

    switch (operation) {
        case operations.add:
            return Number(a) + Number(b);
        case operations.multi:
            return a * b;
        case operations.subtract:
            return a - b;
        case operations.divide:
            return a / b;
        default:
            return 'Error';
    }

}

BUTTONS.RESULT.addEventListener('click', total);

function total() {
    let a = BUTTONS.FIRST_NUMBER.value;
    let b = BUTTONS.SECOND_NUMBER.value;
    let operation = BUTTONS.OPERATION.value;

    let totalNumber = BUTTONS.TOTAL_NUMBER;

    if (a === '' || b === '') {
        return totalNumber.textContent = 'Error: input a number';
    } else {
        return totalNumber.textContent = Number(calc(operation, a, b).toFixed(10));
    }
}