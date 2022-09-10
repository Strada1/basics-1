import { result } from "./script.js";
export function check() {
    calc()
if (isNaN(results) !== false) {
    result.innerHTML = 'Введите числа!'
    }
}
export let results;
export function calc() {
let number1 = +document.getElementById("num1").value;;
let number2 = +document.getElementById("num2").value;
let operation = document.getElementById("operation").value

switch (operation) {
    case'+':
        results = number1 + number2;
        result.innerHTML = results;
        break;
    case '*': 
        results = number1 * number2;
        result.innerHTML = results
        break;
    case '-': 	
        results = number1 - number2;
        result.innerHTML = results
        break;
    case '/':
        results = number1 / number2
        result.innerHTML = results
}

}