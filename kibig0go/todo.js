const todoList = {
    'run': 'To Do',
    'wash': 'In progress',
    'study': 'Done',
};

function changeStatus(taskName, status) {
    if (checkTask(taskName)) {
        todoList[taskName] = status;
    } else {
        console.log('no such task');
    }
};
function addTask(taskName) {
    if (checkTask(taskName)) {
        console.log('task already exists');
    } else {
        todoList[taskName] = 'To Do';
    }
};
function deleteTask(taskName) {
    if (checkTask(taskName)) {
        delete todoList[taskName];
    } else {
        console.log('no such task');
    }
};

function checkTask(taskName) {
    for (let task in todoList) {
        if (task == taskName) return true;
    }
    return false;
}

function showList() {
    let statusPresence;
    console.log('To Do:');
    for (let task in todoList) {
        if (todoList[task] == 'To Do') {
            console.log(`"${task}"`);
            statusPresence = true;
        }
    }
    if (!statusPresence) {
        console.log('-')
    } else {
        statusPresence = false;
    }
    console.log('In Progress:');
    for (let task in todoList) {
        if (todoList[task] == 'In progress') {
            console.log(`"${task}"`);
            statusPresence = true;
        } 
    }
    if (!statusPresence) {
        console.log('-')
    } else {
        statusPresence = false;
    }
    console.log('Done:');
    for (let task in todoList) {
        if (todoList[task] == 'Done') {
            console.log(`"${task}"`);
            statusPresence = true;
        }
    }
    if (!statusPresence) {
        console.log('-')
    } else {
        statusPresence = false;
    }
}
changeStatus('run', 'In progress');
addTask('code');
deleteTask('study');
console.log(todoList);
showList();