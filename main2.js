import { addTask, changeStatus, deleteTask, list, PRIORITY, STATUSES } from "./todo.js";
import { deleteButtons, formHigh, inputHigh, listHigh } from "./view.js";

formHigh.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask(inputHigh.value.trim(), PRIORITY.HIGH, STATUSES.TO_DO);
    console.log(list);
    inputHigh.value = '';
    render();
})

function render() {
    let tasksForDelete = document.querySelectorAll('.high__list-item');
    tasksForDelete.forEach((item) => item.remove());
    for (let task of list) {
        if (task.priority == PRIORITY.HIGH) {
            let listItem = document.createElement('li');
            listItem.className = 'high__list-item';
            listItem.insertAdjacentHTML('afterbegin', `
            <div class="todo__task">
                <div class="todo__task-content">
                    <div class=""><label class="todo__task-text">
                            <input type="checkbox" class="todo__task-checkbox" onclick = "changeStatus('${task.name}')" ${(task.status == STATUSES.DONE) ? 'checked' : ''}>
                            <span class="todo__task-name">${task.name}</span>
                        </label></div>

                    <button class="todo__task-btn" onclick = "deleteTask('${task.name}')">
                        <img src="img/delete-btn.svg" alt="delete task">
                    </button>
                </div>
            </div>
            `);
            listHigh.prepend(listItem);
        } else {

        }
    }
}