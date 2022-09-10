import {calcObject} from './calc.js';
import {btn} from "./btn.js";


function checkInput(firstNumber,secondNumber) {
    let checkInput = (firstNumber === "" || secondNumber === "" )
    if (checkInput) {
        return true;
    }
}

btn.clear.addEventListener("click", function (){
    btn.firstNumber.value = '';
    btn.secondNumber.value = '';
    btn.result.textContent = '';
});

btn.equals.addEventListener("click", function () {
    let operation = btn.operation.value;
    let firstNumber = btn.firstNumber.value;
    let secondNumber = btn.secondNumber.value;


    if ( checkInput(firstNumber,secondNumber) ) {
        console.log("Is not number");
        btn.result.textContent = "Is not number";
    }  else {
        let calc = calcObject(operation, firstNumber, secondNumber).toFixed(5);
        btn.result.textContent =  Number(calc);
    }
});

function createMyDiv(){
    let div = document.createElement('div');

    div.addEventListener("click", function () {
        div.remove();
    });

    div.innerHTML = btn.result.textContent;
    btn.history.append(div);
    div.style.cursor = "pointer";
}

btn.equals.addEventListener('click', createMyDiv);
