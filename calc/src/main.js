import {calcObject} from './calc.js';


let equals = document.querySelector(".equals");
let result = document.querySelector(".result");
let history = document.querySelector(".history");
let clear = document.querySelector(".clear");





function checkInput(firstNumber,secondNumber) {
    let checkInput = (firstNumber === "" || secondNumber === "" )
    if (checkInput) {
        return true;
    }
}


clear.addEventListener("click", function (){
    document.querySelector(".firstNumber").value = '';
    document.querySelector(".secondNumber").value = '';
    result = result.textContent = '';
});



equals.addEventListener("click", function () {
    let operation = document.querySelector(".operation").value;
    let firstNumber = document.querySelector(".firstNumber").value;
    let secondNumber = document.querySelector(".secondNumber").value;


    if ( checkInput(firstNumber,secondNumber) ) {
        console.log("Is not number");
        result.textContent = "Is not number";
    }  else {
        let calc = calcObject(operation, firstNumber, secondNumber).toFixed(5);
        result.textContent =  Number(calc);
    }
});

function createMyDiv(){
    let div = document.createElement('div');

    div.addEventListener("click", function () {
        div.remove();
    });

    div.innerHTML = result.textContent;
    history.append(div);
    div.style.cursor = "pointer";
}

document.querySelector(".equals").onclick = createMyDiv;