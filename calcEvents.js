import {calc} from './calcFn.js';

export function createResult(){
    document.getElementById("result").innerHTML += `<li class="probably-removed">${calc()}</li>`;
}

export function addResult(){
    button.addEventListener("click", createResult);
    button.addEventListener("click", removeResult);
}

export function removeResult(){
    let elements = document.querySelectorAll('.probably-removed');
    for (let elem of elements) {
        elem.onclick = function(event) {
            elem.remove();     
        };
    }
}

button.onclick = addResult();


