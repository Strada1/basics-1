const STATUS = {
    To_Do: 'To Do',
    In_Progress: 'In Progress',
    Done: 'Done'
}
const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
}

const list = [
    { name: 'do code', status: STATUS.In_Progress, priority: PRIORITY.HIGH, },
    { name: 'do housework', status: STATUS.Done, priority: PRIORITY.LOW },
];


function changeStatus(task, status) {
    if (list.find(item => item.name === task)) {
        console.log(`status changed to ${status} `);
    } else { console.log(`task "${task}" already exists`) }
}


function addTask(task) {
    if (list.find(item => item.name === `${task}`)) {
        console.log(`task "${task}" already exists`);
    } else {
        list.splice(0, 0, task);
        console.log(`task "${task}" added`);
    }
}


function deleteTask(task) {
    let indexTask = list.findIndex((item) => item.name === task);
    if (indexTask !== -1) {
        list.splice([indexTask], 1);
    } else {
        console.log('task not found');
    }
}
function showlist() {
    for (let value of list)
        console.log(value.status + ':' + '\n' + value.name + "(priority:" + value.priority + ')');
}

changeStatus('do code', STATUS.Done);
addTask('cry');
deleteTask('do housework');
showlist()
