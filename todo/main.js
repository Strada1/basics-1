const STATUS = {
    TO_DO: 'Todo',
    DONE: 'Done',
};

const PRIORITIES = {
    HIGH: 'High',
    LOW: 'Low',
};

const ELEMENTS = {
    addTaskHigh: document.querySelector('#highAdd'),
    addTaskLow: document.querySelector('#lowAdd'),
    listHigh: document.querySelector('#listHigh'),
    listLow: document.querySelector('#listLow'),
    highInput: document.querySelector('.high-input'),
    lowInput: document.querySelector('.low-input'),
}

let toDoList = [
    { name: 'wash the dishes', status: STATUS.TO_DO, priority: PRIORITIES.LOW },
    { name: 'read a psychology literature', status: STATUS.DONE, priority: PRIORITIES.HIGH },
];

function changeStatus(task) {
    let taskIndex = toDoList.findIndex(todo => todo.name === task);
    if (taskIndex != -1) {
        if (toDoList[taskIndex].status === STATUS.TO_DO) { toDoList[taskIndex].status = STATUS.DONE; }
        else if (toDoList[taskIndex].status === STATUS.DONE) {
            toDoList[taskIndex].status = STATUS.TO_DO;
        }
    }
    render();
}

//Add
function addTask(event, task, newPriority) {
    let newTask = { name: task.value, status: STATUS.TO_DO, priority: newPriority };
    toDoList.push(newTask);
    event.preventDefault();
    render();
};

ELEMENTS.highInput.addEventListener('submit', (event) => {
    addTask(event, ELEMENTS.addTaskHigh, PRIORITIES.HIGH);
    event.preventDefault();
});

ELEMENTS.lowInput.addEventListener('submit', (event) => {
    addTask(event, ELEMENTS.addTaskLow, PRIORITIES.LOW);
    event.preventDefault();
});

//Delete
function deleteTask(task) {
    let taskIndex = -1;
    toDoList.findIndex(todo => todo.name === task);
    if (taskIndex != -1) { toDoList.splice(taskIndex, 1); }
    render();
};

function showList() {
    for (let key in STATUS) {
        let tempArr = toDoList.filter(elem => elem.status === STATUS[key]);
        console.log(STATUS[key] + ': {')
        for (let todo of tempArr) {
            console.log(`\tname: ${todo.name}, priority: ${todo.priority}`);
        };
        console.log('}\n');
    }
};

function render() {
    let tasksToDelete = document.querySelectorAll('.list-item');
    tasksToDelete.forEach(element => {
        element.remove();
    });

    for (let task of toDoList) {
        if (task.priority === PRIORITIES.HIGH) {
            ELEMENTS.listHigh.insertAdjacentHTML('beforeend',
                `<li class="list-item">
                <input type="checkbox" onclick= 'changeStatus("${task.name}")' ${(task.status == STATUS.DONE) ? 'checked' : ''}  class="list-item__checkbox">
                <p class="list-item__text">
                        ${task.name}
                </p>
                <button class="list-item__button" onclick='deleteTask("${task.name}") type="button"></button>
            </li>`
            );
        }

        if (task.priority === PRIORITIES.LOW) {
            ELEMENTS.listLow.insertAdjacentHTML('beforeend',
                `<li class="list-item">
                <input type="checkbox" onclick= 'changeStatus("${task.name}")' ${(task.status == STATUS.DONE) ? 'checked' : ''}  class="list-item__checkbox">
                <p class="list-item__text">
                        ${task.name}
                </p>
                <button class="list-item__button" onclick='deleteTask("${task.name}") type="button"></button>
            </li>`
            );
        }
    }
}

render();