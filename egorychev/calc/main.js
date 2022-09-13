
const FIRSTNUMBER = document.getElementById('first_Number');
const SECONDNUMBER = document.getElementById('second_Number');
const RESULT = document.getElementById('result');
const OPERATORS = document.getElementById('opr');
const columDiv = document.getElementById('colum');
const totalDivRemove = document.getElementsByClassName('total1');

let firstNum = null;
let secondNum = null;
let operator = null;
let totalDiv = null;


function calc(firstNum, secondNum, operator) {
    switch (operator) {
        case 'div':
            if (secondNum === '0') {
                return 'Error';
            } else {
                return firstNum / secondNum;
            }
        case 'multy':
            return firstNum * secondNum;
        case 'add':
            return +firstNum + +secondNum;
        case 'sub':
            return firstNum - secondNum;
    }
};



    RESULT.addEventListener("click", function () {
        totalDiv = document.createElement('div');
        totalDiv.className = 'total1';

        firstNum = FIRSTNUMBER.value;
        secondNum = SECONDNUMBER.value;
        operator = OPERATORS.value;
        totalDiv.innerHTML = calc(firstNum, secondNum, operator);

        columDiv.insertAdjacentElement('afterbegin', totalDiv);


});

    totalDivRemove.addEventListener('click', function () {
        totalDivRemove.remove();
    });

