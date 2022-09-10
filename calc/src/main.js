import {divide} from './calcDivide.js';


let equals = document.querySelector(".equals");
let result = document.querySelector(".result");
let history = document.querySelector(".history");
let clear = document.querySelector(".clear");

const operations = {
    add: 'add',
    multi:'multi',
    subtract: 'subtract',
    divide: 'divide'
};


function calcObject( operation, firstNumber, secondNumber ) {
    let secondNum = document.querySelector(".secondNumber").value;

    switch (operation) {
        case (operations.add):
            return +firstNumber + +secondNumber;
        case (operations.multi):
            return  firstNumber * secondNumber;
        case (operations.subtract):
            return  firstNumber - secondNumber;
        // case (operations.divide):
        //
        //     if (secondNum === "0"){
        //         result.textContent = "can't divide by zero"
        //     } else{
        //         return  firstNumber / secondNumber;
        //     }

        default:
            return "unknown operation";
    }
}

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
    } if ( operation === operations.divide){
        let calc = divide(firstNumber, secondNumber).toFixed(5);
        result.textContent =  Number(calc);
    }else {
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