import { STATUSES, DEFAULT_STATUS, PRIORITIES, list, checkTask } from './base.js'

const ELEMENTS = {
    HIGH_PRIORITY_LIST: document.getElementById('container__high'),
    LOW_PRIORITY_LIST: document.getElementById('container__low'),
    FORMS: document.querySelectorAll('.add__task'),
    INPUT_TASK_HIGH: document.getElementById('high'),
    INPUT_TASK_LOW: document.getElementById('low')
}

let high = ELEMENTS.HIGH_PRIORITY_LIST;
let low = ELEMENTS.LOW_PRIORITY_LIST;
let empty = '';

for (let form of ELEMENTS.FORMS) {
    form.addEventListener('submit', function () {
        if (ELEMENTS.INPUT_TASK_HIGH.value !== empty) {
            addTask(ELEMENTS.INPUT_TASK_HIGH.value, PRIORITIES.HIGH)
            ELEMENTS.INPUT_TASK_HIGH.value = empty;
        } else if (ELEMENTS.INPUT_TASK_LOW.value !== empty) {
            addTask(ELEMENTS.INPUT_TASK_LOW.value, PRIORITIES.LOW)
            ELEMENTS.INPUT_TASK_LOW.value = empty;
        }

        event.preventDefault();
    })
}

function render() {
    high.innerHTML = empty;
    low.innerHTML = empty;

    return list.forEach(function (task) {
        if (task.priority === 'high') {
            let div = document.createElement('div');
            div.className = 'task__content';
            div.innerHTML = `<div class="task__text">
                <label>
                <input type="checkbox" class="task__status" ${task.status === STATUSES.DONE ? 'checked' : ''}>
                <span class="custom__checkbox"></span>
                    ${task.name}
                </label>
            </div>`;

            high.prepend(div);

            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete__task';
            deleteButton.innerHTML = '<img src="delete.svg" alt="Delete Task">';
            div.append(deleteButton);

            deleteButton.addEventListener('click', function () {
                div.remove();
                deleteTask(task.name);
            })

            let checkbox = document.querySelectorAll('.task__status');
            for (let check of checkbox) {
                check.addEventListener('click', function () {
                    if (check.checked) {
                        changeStatus(task.name, STATUSES.DONE);
                    } else {
                        changeStatus(task.name, STATUSES.TO_DO);
                    }
                })
            }

        } else if (task.priority === 'low') {
            let div = document.createElement('div');
            div.className = 'task__content';
            div.innerHTML = `<div class="task__text">
                <label>
                <input type="checkbox" class="task__status" ${task.status === STATUSES.DONE ? 'checked' : ''}>
                <span class="custom__checkbox"></span>
                    ${task.name}
                </label>
            </div>`;

            low.prepend(div);

            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete__task';
            deleteButton.innerHTML = '<img src="delete.svg" alt="Delete Task">';
            div.append(deleteButton);

            deleteButton.addEventListener('click', function () {
                div.remove();
                deleteTask(task.name);
            })

            let checkbox = document.querySelectorAll('.task__status')
            for (let check of checkbox) {
                check.addEventListener('click', function () {
                    if (check.checked) {
                        changeStatus(task.name, STATUSES.DONE);
                    } else {
                        changeStatus(task.name, STATUSES.TO_DO);
                    }
                })
            }
        }
    })
}

function addTask(name, priority) {
    const newTask = { name: name, status: DEFAULT_STATUS, priority: priority };

    const task = checkTask(name);

    if (task) {
        return 'Error: there is already task';
    } else {
        list.push(newTask);
    }

    render();
}

function deleteTask(name) {
    const removeTask = list.findIndex(function (item) {
        return item.name === name;
    });

    if (removeTask >= 0) {
        list.splice(removeTask, 1);
    } else {
        return 'Error: task is not found';
    }

    render();
}

function changeStatus(name, status) {
    const newStatus = checkTask(name);

    if (newStatus) {
        newStatus.status = status;
    } else {
        return 'Error: task is not found';
    }

    render();
}

render();