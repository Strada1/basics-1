const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
};
const PRIORITY = {
    HIGH: 'High',
    MEDIUM: 'Medium',
    LOW: 'Low',
}

function addTask(list, task, status = STATUS.TO_DO, priority = PRIORITY.LOW) {
    if (task !== undefined)
    list.push({name: task, status: status, priority: priority});
}

function changeStatus(list, task, newStatus = STATUS.DONE,) {
    let changeStatusHappened = false;
    for (let item in list) {
        if (item !== undefined && list[item].name === task) {
            list[item].status = newStatus;
            changeStatusHappened = true;
        }
    }
    if (!changeStatusHappened){
        console.log('Status not changed');
    }
}

function deleteTask(list, task) {
    let deleteHappened = false;
    for (let item in list) {
        if (item !== undefined && list[item].name === task) {
            delete list[item];
            deleteHappened = true;
        }
    }
    if (!deleteHappened){
        console.log("delete did not happen");
    }
}


function showList(list) {
    for (let keySTATUS in STATUS) {
        console.log(STATUS[keySTATUS]);
        for (let item in list) {
            if (list[item].status === STATUS[keySTATUS]) {
                console.log('     ' + list[item].name);
            }
        }
    }
}

function showListOfPriority(list) {
    for (let key in PRIORITY) {
        console.log(PRIORITY[key]);
        for (let item in list) {
            if (list[item].priority === PRIORITY[key]) {
                console.log('     ' + list[item].name);
            }
        }
    }
}

const list = [
    {
        name: 'create a post',
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.LOW
    },
    {
        name: 'test',
        status: STATUS.DONE,
        priority: PRIORITY.HIGH
    }
]

showList(list);
addTask(list, 'task1');
addTask(list, 'task2', STATUS.IN_PROGRESS);
addTask(list, 'task3', STATUS.TO_DO, PRIORITY.MEDIUM);
deleteTask(list, 'task2')
deleteTask(list, 'task2')
showListOfPriority(list);
