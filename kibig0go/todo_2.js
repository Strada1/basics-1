const STATUSES = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const PRIORITY = {
    HIGH: 'High',
    LOW: 'Low',
}

const list = [
    { name: 'walk', status: STATUSES.TO_DO, priority: PRIORITY.LOW, },
    { name: 'study', status: STATUSES.IN_PROGRESS, priority: PRIORITY.HIGH, },
    { name: 'wash', status: STATUSES.IN_PROGRESS, priority: PRIORITY.LOW, },
]

function taskCheck(taskName) {
    for (let task of list) {
        if (task.name == taskName) {
            return true;
        }
    }
    return false;
}

function statusCheck(newStatus) {
    for (let status in STATUSES) {
        if (newStatus == STATUSES[status]) {
            return true;
        }
    }
    return false;
}

function priorityCheck(newPrioriry) {
    for (let priority in PRIORITY) {
        if (PRIORITY[priority] == newPrioriry) {
            return true;
        }
    }
    console.log('Wrong priority');
    return false;
}

function changeStatus(taskName, newStatus) {
    if (taskCheck(taskName) && statusCheck(newStatus)) {
        for (let task of list) {
            if (task.name == taskName) {
                if (task.status !== newStatus) {
                    task.status = newStatus;
                } else {
                    console.log('The same status');
                }
            }
        }
    }
}

function changePriority(taskName, newPriority) {
    if (taskCheck(taskName) && priorityCheck(newPriority)) {
        for (let task of list) {
            if (task.name == taskName) {
                if (task.priority !== newPriority) {
                    task.priority = newPriority;
                } else {
                    console.log('The same priority');
                }
            }
        }
    }
}

function addTask(newTaskName, priority) {
    if (taskCheck(newTaskName)) return console.log('This task already exists');
    if (priorityCheck(priority)) {
        list.push({name: newTaskName, status: STATUSES.TO_DO, priority: priority});
    }
}


function deleteTask(taskName) {
    if (!taskCheck(taskName)) return console.log('No such task');
    let task = list.find(item => item.name == taskName);
    let num = list.indexOf(task);
    list.splice(num, 1);
}

function showList() {
    for (let priority in PRIORITY) {
        console.log(PRIORITY[priority] + ':');
        for (let stat in STATUSES) {
            console.log(`  ${STATUSES[stat]}:`);
            let statusPresence;
            for (let item of list) {
                if (item.status == STATUSES[stat] && item.priority == PRIORITY[priority]) {
                    console.log(`    "${item.name}"`);
                    statusPresence = true;
                }
            }
            if (!statusPresence) console.log('    -');
        }
    }
}

changeStatus('wash', 'Done');
addTask('new task', 'High')
deleteTask('wash');
showList();