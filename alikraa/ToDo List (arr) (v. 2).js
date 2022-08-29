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

function checkTask(name) {
    return list.find(function (task) {
        return task.name === name;
    })
}

function addTask(name) {
    const newTask = { name: name, status: DEFAULT_STATUS, priority: DEFAULT_PRIORITY };

    const task = checkTask(name);

    if (task) {
        return 'Error: there is already task';
    } else {
        list.push(newTask);
    }
}

function changeStatus(name, status) {
    const newStatus = checkTask(name);

    if (newStatus) {
        newStatus.status = status;
    } else {
        return 'Error: task is not found';
    }
}

function changePriority(name, priority) {
    const newPriority = checkTask(name);

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

    if (removeTask >= 0) {
        list.splice(removeTask, 1);
    } else {
        return 'Error: task is not found';
    }
}

function showList(type) {
    if (type === 'status') {
        for (let status in STATUSES) {
            console.log(STATUSES[status] + ':');
            const statusList = list.filter(function (task) {
                if (task.status === STATUSES[status]) {
                    console.log(`\t'${task.name}'`);
                } else if (!task.status === STATUSES[status]) {
                    console.log('\t-');
                }
            })

            if (!statusList) return 'Error';
        }
    }

    if (type === 'priority') {
        for (let priority in PRIORITIES) {
            console.log(PRIORITIES[priority] + ':');
            const priorityList = list.filter(function (task) {
                if (task.priority === PRIORITIES[priority]) {
                    console.log(`\t'${task.name}'`);
                } else if (!task.priority === PRIORITIES[priority]) {
                    console.log('\t-');
                }
            })

            if (!priorityList) return 'Error';
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
// deleteTask('read the book');

showList('status');
showList('priority');

console.log(list);