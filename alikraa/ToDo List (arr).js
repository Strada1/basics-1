const STATUSES = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
};

const DEFAULT_STATUS = STATUSES.TO_DO;

const PRIORITIES = {
    HIGH: 'high',
    LOW: 'low'
};

const DEFAULT_PRIORITY = PRIORITIES.LOW;

const list = [
    { name: 'read the book', status: STATUSES.TO_DO, priority: PRIORITIES.LOW },
    { name: 'create a new practice task', status: STATUSES.IN_PROGRESS, priority: PRIORITIES.HIGH },
    { name: 'have a workout', status: STATUSES.TO_DO, priority: PRIORITIES.HIGH },
    { name: 'write a post', status: STATUSES.TO_DO, priority: PRIORITIES.LOW }
];

function addTask(name) {
    const newTask = { name: name, status: DEFAULT_STATUS, priority: DEFAULT_PRIORITY };

    const checkTask = list.find(function (item) {
        return item.name === name;
    });

    if (checkTask) {
        return 'Error: there is already task';
    } else {
        list.push(newTask);
    }
}

function changeStatus(name, status) {
    const newStatus = list.find(function (item) {
        return item.name === name;
    })

    if (newStatus) {
        newStatus.status = status;
    } else {
        return 'Error: task is not found';
    }
}

function changePriority(name, priority) {
    const newPriority = list.find(function (item) {
        return item.name === name;
    })

    if (newPriority) {
        newPriority.priority = priority;
    } else {
        return 'Error: task is not found';
    }
}

function deleteTask(name) {
    const removeTask = list.findIndex(function (item) {
        return item.name === name;
    });

    if (removeTask) {
        list.splice(removeTask, 1);
    } else {
        return 'Error: task is not found';
    }
}

function showList(type) {
    let toDo = '';
    let inProgress = '';
    let done = '';

    let high = '';
    let low = '';

    if (type === 'status') {
        const statusList = list.filter(function (item) {
            if (item.status === STATUSES.TO_DO) {
                toDo += `'${item.name}'\n\t`;
            } else if (!item.status === STATUSES.TO_DO) {
                toDo += '-';
            }

            if (item.status === STATUSES.IN_PROGRESS) {
                inProgress += `'${item.name}'\n\t`;
            } else if (!item.status === STATUSES.IN_PROGRESS) {
                inProgress += '-';
            }

            if (item.status === STATUSES.DONE) {
                done += `'${item.name}'\n\t`;
            } else if (!item.status === STATUSES.DONE) {
                done += '-';
            }
        })

        if (statusList) {
            console.log(`To Do:\n\t` + toDo + `\nIn Progress:\n\t` + inProgress + `\nDone:\n\t` + done);
        } else {
            return 'Error';
        }
    }

    if (type === 'priority') {
        const priorityList = list.filter(function (item) {
            if (item.priority === PRIORITIES.HIGH) {
                high += `'${item.name}'\n\t`;
            } else if (!item.priority === PRIORITIES.HIGH) {
                high += '-';
            }

            if (item.priority === PRIORITIES.LOW) {
                low += `'${item.name}'\n\t`;
            } else if (!item.priority === PRIORITIES.LOW) {
                low += '-';
            }
        })

        if (priorityList) {
            console.log(`high:\n\t` + high + `\nlow:\n\t` + low);
        } else {
            return 'Error';
        }
    }
}

addTask('have a walk');
addTask('read the book');

changeStatus('create a new practice task', STATUSES.DONE);
changeStatus('read the book', STATUSES.IN_PROGRESS);
changeStatus('have a workout', STATUSES.DONE);

changePriority('read the book', PRIORITIES.HIGH);
changePriority('have a workout', PRIORITIES.LOW);
changePriority('have a walk', PRIORITIES.HIGH);

deleteTask('write a post');

showList('status');
showList('priority');

console.log(list);