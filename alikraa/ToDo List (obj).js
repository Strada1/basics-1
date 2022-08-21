const STATUSES = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
}

const DEFAULT_STATUS = STATUSES.TO_DO;

const list = {
    'read the book': STATUSES.TO_DO,
    'create a new practice task': STATUSES.IN_PROGRESS,
    'have a workout': STATUSES.TO_DO,
    'write a post': STATUSES.TO_DO
}

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
    } else {
        console.log('Error: task is not found');
    }
}

function addTask(task) {
    if (task in list) {
        console.log('Error: there is already a task');
    } else {
        list[task] = DEFAULT_STATUS;
    }
}

function deleteTask(task) {
    if (task in list) {
        delete list[task];
    } else {
        console.log('Error: task is not found');
    }
}

function showList(list) {
    let toDo = '';
    let inProgress = '';
    let done = '';

    for (let task in list) {
        if (list[task] === STATUSES.TO_DO) {
            toDo += `'${task}'\n\t`;
        } else if (list[task] === STATUSES.IN_PROGRESS) {
            inProgress += `'${task}'\n\t`;
        } else {
            done += `'${task}'\n\t`;
        }
    }

    if (toDo !== '') {
        console.log(`To Do:\n\t` + toDo);
    } else {
        console.log(`To Do:\n\t-`);
    }

    if (inProgress !== '') {
        console.log(`In Progress:\n\t` + inProgress);
    } else {
        console.log(`In Progress:\n\t-`);
    }

    if (done !== '') {
        console.log(`Done:\n\t` + done);
    } else {
        console.log(`Done:\n\t-`);
    }
}

changeStatus('create a new practice task', STATUSES.DONE);
changeStatus('read the book', STATUSES.DONE);
changeStatus('have a workout', STATUSES.DONE);

addTask('have a walk');

deleteTask('write a post');

showList(list);