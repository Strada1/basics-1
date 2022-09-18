const addTaskHigh = document.getElementById("add-high-task-form");
const addTaskLow = document.getElementById("add-low-task-form")
const highPriorityBlock = document.querySelector (".priority-high");
const lowPriorityBlock = document.querySelector(".priority-low")
const inputHighTask = document.getElementById("add-high-task-input");
const inputLowTask = document.getElementById("add-low-task-input");

addTaskHigh.addEventListener("submit", addTaskFunctionHigh);
addTaskLow.addEventListener("submit", addTaskFunctionLow);



function addTaskFunctionHigh () {
event.preventDefault();
highPriorityBlock.insertAdjacentHTML("beforeend", `
<div class="task">
    <input class="complete-task-button" type="checkbox">
        <div class="task-name"> 
            ${inputHighTask.value}
        </div>
            <input class="delete-task-button" type="image" src="./img/close-icon.svg">
</div>`)
}

function addTaskFunctionLow () {
    event.preventDefault();
    lowPriorityBlock.insertAdjacentHTML("beforeend", `
    <div class="task">
        <input class="complete-task-button" type="checkbox">
            <div class="task-name"> 
                ${inputLowTask.value}
            </div>
                <input class="delete-task-button" type="image" src="./img/close-icon.svg">
    </div>`)
    }