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
    console.log('Invalid priority');
    return false;
}

function changeStatus(taskName, newStatus) {
    if (!statusCheck(newStatus)) return console.log('Invalid status');
    let currentTask = list.find(item => item.name == taskName);
    if (!currentTask) return console.log('Task not found');
    if (currentTask.status !== newStatus) {
        currentTask.status = newStatus;
    } else console.log('The same status!');
}

function changePriority(taskName, newPrioriry) {
    if (!priorityCheck(newPrioriry)) return;
    let currentTask = list.find(item => item.name == taskName);
    if (!currentTask) return console.log('Task not found');
    if (currentTask.priority !== newPrioriry) {
        currentTask.priority = newPrioriry;
    } else console.log('The same priority!');
}

function addTask(newTaskName, priority, status = STATUSES.TO_DO) {
    if (taskCheck(newTaskName)) return console.log('This task already exists');
    if (priorityCheck(priority) && statusCheck(status)) {
        list.push({ name: newTaskName, status: status, priority: priority });
    }
}


function deleteTask(taskName) {
    if (!taskCheck(taskName)) return console.log('No such task');
    list.splice(list.findIndex(item => item.name == taskName), 1);
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

changeStatus('wash', 'Invalid status');
changeStatus('walk', STATUSES.DONE)
addTask('new task', 'High', STATUSES.DONE)
addTask('very new task', PRIORITY.HIGH)
deleteTask('wash');
changePriority('walk', 'High');
showList();