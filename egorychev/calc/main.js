import {FIRSTNUMBER, SECONDNUMBER, OPERATORS, EQUALS, COLUMDIV} from "./module.js";

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



