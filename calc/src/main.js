let equals = document.querySelector(".equals");
let result = document.querySelector(".result");


function clear() {
    document.querySelector(".firstNumber").value = '';
    document.querySelector(".secondNumber").value = '';
    document.querySelector(".result").value = result.textContent = '';

}
document.querySelector(".clear").onclick = clear;

function checkInput(firstNumber,secondNumber) {
    let checkInput = (firstNumber === "" || secondNumber === "" )
    if (checkInput) {
        return true;
    }
}


// function MyaddEventListener(){
//     let operation = document.querySelector(".operation").value;
//     let firstNumber = document.querySelector(".firstNumber").value;
//     let secondNumber = document.querySelector(".secondNumber").value;
//     if ( checkInput(firstNumber,secondNumber) ) {
//         console.log("Is not number");
//         result.textContent = "Is not number";
//     } else {
//         let calc = calcObject(operation, firstNumber, secondNumber);
//         result.textContent =  Number(calc.toFixed(5));
//     }
// }
// //document.querySelector(".equals").onclick = MyaddEventListener;
// equals.addEventListener('click' ,MyaddEventListener);

equals.addEventListener("click", function () {
    let operation = document.querySelector(".operation").value;
    let firstNumber = document.querySelector(".firstNumber").value;
    let secondNumber = document.querySelector(".secondNumber").value;

    if ( checkInput(firstNumber,secondNumber) ) {
        console.log("Is not number");
        result.textContent = "Is not number";
    } else {
        let calc = calcObject(operation, firstNumber, secondNumber).toFixed(5);
        result.textContent =  Number(calc);
    }
});



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
        case (operations.divide):
            if (secondNum === "0"){
                result.textContent = "can't divide by zero"
            }else{
                return  firstNumber / secondNumber;
            }
        default:
            return "unknown operation";
    }

}