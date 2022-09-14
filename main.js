import {getResult} from './calc.js';

let button = document.getElementById("button")
let result = document.getElementById("result")
let list = document.getElementById("list")

button.addEventListener('click', calc)


function calc() {
    const x = getResult();
    
    result.innerHTML = x;

    let divItem = document.createElement('div');
    divItem.innerHTML = x;
    divItem.addEventListener('click', function(){
        divItem.remove()
    })
    list.prepend(divItem);
}
