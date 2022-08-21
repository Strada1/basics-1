const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS:  'In Progress',
    DONE: 'Done'
    };
const list = {
    'create a new practice task': STATUS.IN_PROGRESS,
    'make a bed': STATUS.DONE,
    'write a post': STATUS.TO_DO,
}


function addTask(list, task, status = STATUS.TO_DO) {
    list[task] = status;
}

function changeStatus(list, task, newStatus = STATUS.DONE) {
    list[task] = newStatus;
}

function deleteTask(list, task) {
    delete list[task];
}

const space = '     ';

function showList(list) {
    for (let keySTATUS in STATUS) {
        console.log(STATUS[keySTATUS]);
        for (let key in list) {
            if (list[key] === STATUS[keySTATUS]) {
                console.log(space + key);
            }
        }
    }
    console.log('________________');
}


addTask(list, 'task1');
addTask(list, 'task2', STATUS.IN_PROGRESS);
showList(list);
deleteTask(list, 'task2')
showList(list);
