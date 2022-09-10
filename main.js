import {UI_ELEMENTS} from './view.js';

UI_ELEMENTS.resultButton.addEventListener('click', function() {
    let firstNum = Number(UI_ELEMENTS.firstNumber.value);
    let secondNum = Number(UI_ELEMENTS.secondNumber.value);

    if (Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
        
        switch (UI_ELEMENTS.operator.value) {
            case '+':
                UI_ELEMENTS.resultDisplay.textContent = firstNum + secondNum;
                UI_ELEMENTS.firstNumber.value = '';
                UI_ELEMENTS.secondNumber.value = '';
                addResult(UI_ELEMENTS.resultDisplay.textContent);
                break;
            case '-':
                UI_ELEMENTS.resultDisplay.textContent = firstNum - secondNum;
                UI_ELEMENTS.firstNumber.value = '';
                UI_ELEMENTS.secondNumber.value = '';
                addResult(UI_ELEMENTS.resultDisplay.textContent);
                break;
            case '*':
                UI_ELEMENTS.resultDisplay.textContent = firstNum * secondNum;
                UI_ELEMENTS.firstNumber.value = '';
                UI_ELEMENTS.secondNumber.value = '';
                addResult(UI_ELEMENTS.resultDisplay.textContent);
                break;
            case '/':
                UI_ELEMENTS.resultDisplay.textContent = firstNum / secondNum;
                UI_ELEMENTS.firstNumber.value = '';
                UI_ELEMENTS.secondNumber.value = '';
                addResult(UI_ELEMENTS.resultDisplay.textContent);
                break;            
            default:
                break;
        }
    } else {
        alert('Одно или оба значения не являются числами.');
    };
});

function addResult(num) {
    let div = document.createElement('div');
    div.textContent = num;
    div.classList.add('result-save__item');
    div.addEventListener('click', function() {
        this.remove();
    })
    UI_ELEMENTS.results.prepend(div);
};