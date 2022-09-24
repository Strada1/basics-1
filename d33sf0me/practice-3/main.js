import { addTask } from '/modulus/addTask.js';
import { showList, allTask, STATUS } from '/modulus/render.js';

let list_high = document.querySelector('.list_high');
let list_low = document.querySelector('.list_low');
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

const changeStatus = function() {
    try {
        let checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(checkbox => checkbox.addEventListener('click', event => {
            let task_name = event.target.nextElementSibling.textContent;
            for (let task of allTask) {
                if (task.name === task_name.trim()) {
                    if (task.status === STATUS.task_undone) {
                        task.status = STATUS.task_done;
                    } else task.status = STATUS.task_undone;
                };
            };
            showList();
        }));
    } catch(err) {
        alert(`Ошибка: ${err.message}`);
    }
};

const deleteTask = function() {
    try {
        let btns_delete = document.querySelectorAll('.btn_delete');
        btns_delete.forEach(btn_delete => btn_delete.addEventListener('click', event => {
            let task_name = event.target.previousElementSibling.textContent;
            for (let i = 0; i < allTask.length; i++) {
                if (allTask[i].name === task_name.trim()) {
                    allTask.splice(i, 1);
                };
            };
            showList();
        }));
    } catch(err) {
        alert(`Ошибка: ${err.message}`);
    }
};

showList();


export { list_high, list_low, changeStatus, deleteTask }