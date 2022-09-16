import { addTask } from '/modulus/addTask.js';
//import { deleteTask } from '/modulus/deleteTask.js';
import { changeStatus } from '/modulus/changeStatus.js';
import { showList, allTask } from '/modulus/render.js';

let list_high = document.querySelector('.list_high');
let list_low = document.querySelector('.list_low');

showList()

let form_high_submit = document.getElementById('task_HIGH');
let form_low_submit = document.getElementById('task_LOW');
let add_high_task = document.getElementById('add_high_task');
let add_low_task = document.getElementById('add_low_task');

form_high_submit.addEventListener('submit', (event)=> {
    addTask(add_high_task, form_high_submit);
    event.preventDefault();
});

form_low_submit.addEventListener('submit', (event)=> {
    addTask(add_low_task, form_low_submit);
    event.preventDefault();
});

document.getElementById("container").addEventListener("click", function(event) {
    changeStatus(event.target.textContent);
    event.preventDefault();
}, false);


export { list_high, list_low }