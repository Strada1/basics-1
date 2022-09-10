import {showPrevious, deleteElement} from "./modules.js";

let oldResults = [], id = 1;

export{oldResults,id};

let calc = function (){
    let firstNum = document.querySelector('.calc__firstNum').value,
        secondNum = document.querySelector('.calc__secondNum').value,
        operator = document.querySelector('.calc__operator').value,
        result = document.querySelector('.calc__result');

    let currentResult;

    if(firstNum === "" || secondNum === ""){
        return alert('Не все поля заполнены!');
    }

    switch(operator){
        case "+":
            currentResult = +firstNum + +secondNum;
            break;
        case "-":
            currentResult = firstNum - secondNum;
            break;
        case "*":
            currentResult = firstNum * secondNum;
            break;
        case "/":
            currentResult = firstNum / secondNum;
            break;
    }
    currentResult = Number(currentResult.toFixed(10));
    result.textContent = currentResult;

    let prevOperation = {
        id: id++,
        leftOperand: firstNum,
        rightOperand: secondNum,
        operator: operator,
        equal: currentResult
    };

    oldResults.push(prevOperation);
    showPrevious();
    deleteElement();
}

document.querySelector('.calc__equal').addEventListener('click', calc);