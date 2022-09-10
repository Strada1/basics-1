
let button = document.getElementById('btn');
let result = document.getElementById('result');

button.addEventListener('click', calc);

function calc() {

let num1 = document.getElementById('n1').value;
let num2 = document.getElementById('n2').value;
let operator = document.getElementById('operation').value;
let results; 
   
    
    switch (operator) {
        case "+":
            results = ( +num1 + +num2);
            result.innerHTML = +results;
            break;
        case "-":
            results = ( num1 - num2);
            result.innerHTML = results;
            break;
        case "*":
            results = Number( num1 * num2);
            result.innerHTML = results;
            break;
        case "/":
            results = Number( num1 / num2);
            result.innerHTML = results;
            break;
        default:
            console.log("Error");
    }
}
