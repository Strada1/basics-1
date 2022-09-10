let a = document.querySelector('.numberOne');
let b = document.querySelector('.numberTwo');
let operation = document.querySelector('.operator');
let btn = document.querySelector('.result')
let result = document.querySelector('.showResult')
let div = document.querySelector('.row')

export {a, b, operation, result, div}
import {calc} from "./calc.js";

btn.addEventListener('click', calc)


       










