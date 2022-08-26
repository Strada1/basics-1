const STATUSES = {
    TODO: 'To Do',
    In_Progress: 'In Progress',
    Done: 'Done'
};

const PRIORITIES = {
    LOW: 'low',
    MIDDLE: 'middle',
    HIGH: 'high'
}

const list = [
    {name: 'shopping', status: 'To do', priority: 'middle'},
    {name: 'eating', status: 'Done', priority: 'low'},
    {name: 'test', status: 'In Progress', priority: 'high'}
];

function changeStatus(task, status) {
    let taskForChange = list.find(item => item.name == task)
    if (task) {
        taskForChange.status = status
    }
};

function addTask(name, status = STATUSES.TODO, priority = PRIORITIES.LOW) {
    let newTask = {
        name,
        status,
        priority
    }
    if (name) {
        list.push(newTask)
    }
}

function deleteTask(task) {
    let taskForDelete = list.findIndex(item => item.name == task)
    if (taskForDelete) {
        list.splice(taskForDelete, 1)
    }
}

changeStatus('test', STATUSES.In_Progress)
addTask('walk')
deleteTask('test')
console.log(list)