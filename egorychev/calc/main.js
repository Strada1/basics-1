
const FIRSTNUMBER = document.getElementById('first_Number');
const SECONDNUMBER = document.getElementById('second_Number');
const EQUALS = document.getElementById('equals');
const OPERATORS = document.getElementById('opr');
const COLUMDIV = document.getElementById('colum');


let firstNum = null;
let secondNum = null;
let operator = null;




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


    EQUALS.addEventListener("click", runCalc);


    function runCalc() {
        firstNum = FIRSTNUMBER.value;
        secondNum = SECONDNUMBER.value;
        operator = OPERATORS.value;
        let result = calc(firstNum, secondNum, operator);


        let div = document.createElement('div');
        div.className = 'total1';
        div.innerHTML = result;
        div.addEventListener('click',function () {div.remove()});
        COLUMDIV.prepend(div);

    }



