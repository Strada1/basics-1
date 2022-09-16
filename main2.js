import { addTask, changeStatus, deleteTask, list, PRIORITY, STATUSES } from "./todo.js";
import { formHigh, inputHigh, listHigh, formLow, inputLow, listLow } from "./view.js";

formHigh.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask(inputHigh.value.trim(), PRIORITY.HIGH, STATUSES.TO_DO);
    inputHigh.value = '';
    render();
})

formLow.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask(inputLow.value.trim(), PRIORITY.LOW, STATUSES.TO_DO);
    inputLow.value = '';
    render();
})

function render() {
    let tasksForDelete = document.querySelectorAll('.list__item');
    tasksForDelete.forEach((item) => item.remove());
    for (let task of list) {
        let listItem = document.createElement('li');
        listItem.className = 'list__item';
        switch (task.priority) {
            case PRIORITY.HIGH:
                listItem.insertAdjacentHTML('afterbegin', `
                <div class="todo__task">
                    <div class="todo__task-content">
                        <div class="task__inner"><label class="todo__task-text">
                                <input type="checkbox" class="todo__task-checkbox" ${(task.status == STATUSES.DONE) ? 'checked' : ''}>
                                <span class="todo__task-name">${task.name}</span>
                            </label></div>

                        <button class="todo__task-btn">
                            <img src="img/delete-btn.svg" alt="delete task">
                        </button>
                    </div>
                </div>
                `);
                listHigh.prepend(listItem);
                break;
            case PRIORITY.LOW:
                listItem.insertAdjacentHTML('afterbegin', `
                <div class="todo__task">
                    <div class="todo__task-content">
                        <div class="task__inner"><label class="todo__task-text">
                                <input type="checkbox" class="todo__task-checkbox" ${(task.status == STATUSES.DONE) ? 'checked' : ''}>
                                <span class="todo__task-name">${task.name}</span>
                            </label></div>

                        <button class="todo__task-btn">
                            <img src="img/delete-btn.svg" alt="delete task">
                        </button>
                    </div>
                </div>
                `);
                listLow.prepend(listItem);
                break;
        }

        let deleteThisTask = document.querySelector('.todo__task-btn');
        deleteThisTask.addEventListener('click', () => {
            deleteTask(task.name);
            render();
        })

        let taskInner = document.querySelector('.task__inner');

        taskInner.addEventListener('click', () => {
            switch (task.status) {
                case STATUSES.TO_DO:
                    changeStatus(task.name, STATUSES.DONE);
                    console.log(task);
                    console.log(list); //проверяем, что статус в массиве изменился
                    break;
                case STATUSES.DONE:
                    // changeStatus(task.name, STATUSES.TO_DO);
                    break;
            }
            render();
        })
    }
    // console.log(list);
}