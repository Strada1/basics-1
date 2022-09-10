import { BUTTONS } from './buttons.js';
import { calc } from './calc.js';

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

BUTTONS.RESULT.addEventListener('click', savedResults);

function savedResults() {
    let div = document.createElement('div');
    div.className = 'savedResult';
    div.innerHTML = BUTTONS.TOTAL_NUMBER.textContent;
    BUTTONS.HISTORY.prepend(div);

    div.addEventListener('click', function () {
        div.remove()
    })
}