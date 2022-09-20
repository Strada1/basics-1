import {alwaysTask, priorityTask, statusTask} from './arrays.js';
let formHigh = document.getElementById('addTaskForHigh');
let formLow = document.getElementById('addTaskForLow');
let TaskNameHigh = document.getElementById('TaskNameForHigh');
let TaskNameLow = document.getElementById('TaskNameForLow');
let outputForHigh = document.getElementById('outputForHigh');
let TaskName;
let TaskPriority;
formHigh.addEventListener('submit', addToArray);
formLow.addEventListener('submit', addToArray);





function WhereDoesTaskFrom() {
    if (TaskNameHigh.value != '') {
        TaskPriority = 'High';
        console.log(TaskPriority);
         return TaskNameHigh;
    } else {
        TaskPriority = 'Low';
        console.log(TaskPriority);
        return TaskNameLow;
    }
}

function render() {
    outputForHigh.innerHTML = '';
    outputForLow.innerHTML = '';
    TaskName.value = '';
    
    function createDOMTaskBox(taskName) { 
    let newTask = document.createElement('div');
    newTask.classList.add('TaskBox');
    newTask.innerHTML = `
        <input type="radio" id="TaskStatus" class="ball">
        <span  class="TaskText">${taskName}</span>
        <button type="button" id="deleteTask" class="cross"></button>
    `;
        switch(TaskPriority) {
            case 'High':
                document.body.querySelector('#outputForHigh').append(newTask);
            break;
            case 'Low':
                document.body.querySelector('#outputForLow').append(newTask);
        }

}
    alwaysTask.forEach(item => {
        createDOMTaskBox(item.taskName);
    });
}


function addToArray(event) {

event.preventDefault();
TaskName = WhereDoesTaskFrom();
let text = TaskName.value;

function pushTask(taskName, priority, status) {
    
    let task = {
        taskName,
        priority,
        status
    }
    alwaysTask.push(task);
    
}
pushTask(text, TaskPriority, statusTask.inProgress);
console.log(alwaysTask);
render();
}
