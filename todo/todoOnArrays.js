const STATUS = {
    NEW: 'New',
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
};

const PRIORITIES = {
    HIGH: 'High',
    MIDDLE: 'Middle',
    LOW: 'Low',
};

let toDoList = [
    { name: 'wash the dishes', status: STATUS.NEW, priority: PRIORITIES.MIDDLE },
    { name: 'read a psychology literature', status: STATUS.IN_PROGRESS, priority: PRIORITIES.HIGH },
];

function changeStatus(task, newStatus) {
    let taskIndex = toDoList.findIndex(todo => todo.name === task);
    let statusFlague = false;
    for (let key in STATUS) {
        if (STATUS[key] === newStatus) { statusFlague = true; break; }
    }
    if (taskIndex != -1 && statusFlague) {
        toDoList[taskIndex].status = newStatus;
    }
}

function addTask(task) {
    let newTask = { name: task, status: STATUS.NEW, priority: PRIORITIES.LOW };
    toDoList.push(newTask);
};

function deleteTask(task) {
    let taskIndex = -1;
    toDoList.findIndex(todo => todo.name === task);
    if (taskIndex != -1) { toDoList.splice(taskIndex, 1); }
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

addTask('cook a cake');
showList();
changeStatus('cook a cake', 'Done');
changeStatus('wash the dishes', 'In progress');
showList();
deleteTask('wash the dishes');
showList();