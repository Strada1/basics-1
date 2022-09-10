import {div, result} from "./main.js";

export function addDiv() {
    div.insertAdjacentHTML('afterend', '<div class="show"></div>')
    let newDiv = document.querySelector('.show')

    newDiv.textContent = result.textContent

    newDiv.addEventListener('click', (event) => {
        event.currentTarget.remove()
    })
}