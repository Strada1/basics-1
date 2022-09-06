const list = [ { name: 'create a post', status: 'In Progress', priority: 'low'  }, { name: 'test', status: 'Done', priority: 'high'  } ];
const taskStatus = { to_do: 'To Do', in_progress: 'In Progress', done: 'Done'};
const taskPriority = {high: 'high', low: 'low'};

function addTask(taskName, taskPriority) {
    const checkTaskName = list.find(item => item.name === taskName);
    if (checkTaskName) {
        return console.log('Такая задача уже есть в списке')
    }
    if (taskName !== undefined && taskPriority !== undefined) {
        list.push({name: taskName, status: taskStatus.to_do, priority: taskPriority })
    } 
};

function changeStatus(taskName, taskStatus) {
    const checkTaskName = list.findIndex(item => item.name === taskName);
    if (checkTaskName !== -1) {
        list[checkTaskName].status = taskStatus
    }
    else {
        console.log('Задачи нет в списке')
    }
};

function changePriority(taskName, taskPriority) {
    const checkTaskName = list.findIndex(item => item.name === taskName);
    if (checkTaskName !== -1) {
        list[checkTaskName].priority = taskPriority
    }
    else {
        console.log('Задачи нет в списке')
    }
};

function deleteTask(taskName) {
    const checkTaskName = list.findIndex(item => item.name === taskName);
    if (checkTaskName !== -1) {
        list.splice(checkTaskName, 1)
    }
    else {
        console.log('Задачи нет в списке')
    }
};

function showStatus(taskStatus) {
    let statusList = list.filter(item => item.status === taskStatus);
    console.log(`${taskStatus} :`)
    if (taskStatus === 'Done') {
        statusList.forEach((item) => {
            if (item.status === taskStatus) {
                console.log(`\t${item.name}`)
            }
        });
    } else {
        statusList.forEach((item) => {
            if (item.status === taskStatus) {
                console.log(`\t${item.name}, priority - ${item.priority}`)
            }
        });
    }

    console.log(`\t`)
};

function showList(params) {
    showStatus(taskStatus.to_do);
    showStatus(taskStatus.in_progress);
    showStatus(taskStatus.done);
};

addTask('go sport', 'high');
addTask('go eat', taskPriority.low);
addTask('smoke', 'low')
changeStatus('go eat', 'Done');
changeStatus('smoke', taskStatus.done);
changePriority('go sport', taskPriority.low);
deleteTask('smoke')
showList();