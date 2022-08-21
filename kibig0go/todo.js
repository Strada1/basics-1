const STATUSES = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
}

const todoList = {
    'run': STATUSES.TO_DO,
    'wash': STATUSES.IN_PROGRESS,
    'study': STATUSES.DONE,
};

function changeStatus(taskName, status) {
    if (taskName in todoList) {
        todoList[taskName] = status;
    } else {
        console.log('no such task');
    }
};
function addTask(taskName) {
    if (taskName in todoList) {
        console.log('task already exists');
    } else {
        todoList[taskName] = STATUSES.TO_DO;
    }
};
function deleteTask(taskName) {
    if (taskName in todoList) {
        delete todoList[taskName];
    } else {
        console.log('no such task');
    }
};

function showList() {
    for (let status in STATUSES) {
        console.log(`${STATUSES[status]}:`);
        let statusPresence;
        for (let task in todoList) {
            if (todoList[task] == STATUSES[status]) {
                console.log(`"${task}"`);
                statusPresence = true;
            }
        }
        if (!statusPresence) console.log('-');
    }
}

changeStatus('run', 'In progress');
addTask('code');
changeStatus('code', 'In progress');
deleteTask('study');
changeStatus('run', 'Done');
changeStatus('wash', 'Done');
console.log(todoList);
showList();