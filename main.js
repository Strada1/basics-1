const divHigh = document.querySelector('.row-high')
const divLow = document.querySelector('.row-low')

const buttonHigh = document.querySelector('.form-high')
const buttonLow = document.querySelector('.form-low')

const inputHigh = document.querySelector('.form-high-text')
const inputLow = document.querySelector('.form-low-text')

let newTaskMarkupHigh = `
        <div class="row">
            <div>
                <label>
                    <input type="checkbox">
                </label>
            </div>
            <div class="task-high">
            </div>
            <div>
               <button class="btn">x</button>
            </div>
        </div>
    `
let newTaskMarkupLow = `
        <div class="row">
            <div>
                <label>
                    <input type="checkbox">
                </label>
            </div>
            <div class="task-low">
            </div>
            <div>
               <button class="btn">x</button>
            </div>
        </div>
    `


buttonHigh.addEventListener('click', addTaskHigh)
buttonLow.addEventListener('click', addTaskLow)

function addTaskHigh(event) {
    event.preventDefault()
    divHigh.insertAdjacentHTML('afterend', newTaskMarkupHigh)
    let newTask = document.querySelector('.task-high')
    newTask.textContent = inputHigh.value
}

function addTaskLow(event) {
    event.preventDefault()
    divLow.insertAdjacentHTML('afterend', newTaskMarkupLow)
    let newTask = document.querySelector('.task-low')
    newTask.textContent = inputLow.value
}