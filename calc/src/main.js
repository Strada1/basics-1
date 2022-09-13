import {calcObject} from './calc.js';
import {element} from "./element.js";


function checkInput(firstNumber,secondNumber) {
    let checkInput = (element.firstNumber === "" || element.secondNumber === "" )
    if (checkInput) {
        return true;
    }
}

element.clear.addEventListener("click", function (){
    element.firstNumber.value = '';
    element.secondNumber.value = '';
    element.result.textContent = '';
});

element.equals.addEventListener("click", function () {
    let operation = element.operation.value;
    let firstNumber = element.firstNumber.value;
    let secondNumber = element.secondNumber.value;


    if ( checkInput(firstNumber,secondNumber) ) {
        console.log("Is not number");
        element.result.textContent = "Is not number";
    }  else {
        let calc = calcObject(operation, firstNumber, secondNumber).toFixed(5);
        element.result.textContent =  Number(calc);
    }
});

function createMyDiv(){
    let div = document.createElement('div');

    div.addEventListener("click", function () {
        div.remove();
    });

    div.innerHTML = element.result.textContent;
    element.history.append(div);
    div.style.cursor = "pointer";
}

element.equals.addEventListener('click', createMyDiv);
