const list = [ { name: 'create a post', status: 'In Progress', priority: 'low'  }, { name: 'test', status: 'Done', priority: 'high'  } ]

const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
}

function changeStatus(arr, task, newStatus, newPriority) {
    let changeTask = arr.find(item => item.name === task);
    changeTask.status = newStatus;
    changeTask.priority = newPriority;
}

function addTask(arr, task) {
    arr.push(task);
}

function deleteTask(arr, task) {
    let index = arr.findIndex(item => item.name === task);
    arr.splice(index, 1);
}

function showList (arr) {
    console.log(STATUS.TO_DO + ':');
    arr.forEach(function(item) {
        if (item.status === STATUS.TO_DO) {
            console.log(item.name, '* priority -', item.priority);
        }
    });
    console.log(STATUS.IN_PROGRESS + ':');
    arr.forEach(function(item) {
        if (item.status === STATUS.IN_PROGRESS) {
            console.log(item.name, '* priority -', item.priority);
        }
    });
    console.log(STATUS.DONE + ':');
    arr.forEach(function(item) {
        if (item.status === STATUS.DONE) {
            console.log(item.name, '* priority -', item.priority);
        }
    });
}




addTask(list, {name: 'finish todo', status: 'In Progress', priority: 'high'});
addTask(list, {name: 'relax', status: 'To Do', priority: 'low'});
changeStatus(list, 'create a post', 'Done', 'high');
deleteTask(list, 'test');
showList(list);
