const STATUS = {
    IN_PROGRESS: 'In progress',
    TO_DO: 'to do',
    DONE: 'done',
};

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
};

let list = [
    { name: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW },
    { name: 'sleep', status: STATUS.TO_DO, priority: PRIORITY.LOW },
    { name: 'test', status: STATUS.DONE, priority: PRIORITY.HIGH },
    { name: 'git', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
    { name: 'read', status: STATUS.TO_DO, priority: PRIORITY.LOW },
    { name: 'shopping', status: STATUS.DONE, priority: PRIORITY.HIGH },
];

function showListStatus() {
    let taskToDo = '';
    let taskInProgress = '';
    let taskDone = '';

    list.forEach((task) => {
        if (task.status === STATUS.TO_DO) {taskToDo += `\t"${task.name}" - ${task.priority}\n`}
        if (task.status === STATUS.IN_PROGRESS) {taskInProgress += `\t"${task.name}" - ${task.priority}\n`}
        if (task.status === STATUS.DONE) {taskDone += `\t"${task.name}" - ${task.priority}\n`}
    })

    if (taskToDo === '') {taskToDo = '-'}
    if (taskInProgress === '') {taskInProgress = '-'}
    if (taskDone === '') {taskDone = '-'}

    console.log(`Now "${list.length}" Tasks:\nStatus task list:\n\nTo do:\n${taskToDo}In Progress:\n${taskInProgress}Done:\n${taskDone}`)
}
showListStatus()

function showListPriority() {
    let taskLow = '';
    let taskHigh = '';
    list.forEach((task) => {
        if (task.priority === PRIORITY.LOW) {taskLow += `\t"${task.name}" - ${task.status}\n`}
        if (task.priority === PRIORITY.HIGH) {taskHigh += `\t"${task.name}" - ${task.status}\n`}
    })

    if (taskLow === '') {taskLow = '-'}
    if (taskHigh === '') {taskHigh = '-'}

    console.log(`Now "${list.length}" Tasks:\nPriority task list:\n\nLow:\n${taskLow}High:\n${taskHigh}`)
}
showListPriority()

function showListName() {
    let taskNames = '';

    list.forEach((task) => {
        taskNames += `\t"${task.name}"\n`;
    });

    console.log(`Now "${list.length}" Tasks:\n\n${taskNames}`);
}
showListName();

function showTask(task) {
    let thisTask = '';
    let taskName = list.find((item) => item.name === task);
    if (task === undefined) {
        console.log('"Enter task"')
    } else if (taskName === undefined) {
        console.log('"That task is not present"')
    } else{
        let cloneTaskName = Object.assign({}, taskName);
        delete cloneTaskName.name;
        for (let key in cloneTaskName) {
            thisTask += `\t${key}: ${cloneTaskName[key]}\n`;
        }
        console.log(`Task "${task}":\n\n${thisTask}`);
    }
}
showTask('git');

function showTasksStatus(status) {
    let tasks = list.filter((task) => task.status === status);

    let nameTasks = '';

    tasks.forEach((task) => {
        nameTasks += `\t"${task.name}"\n`;
    });

    console.log(`Status "${status}" tasks:\n\n${nameTasks}`);
}
showTasksStatus('done');

function showTasksPriority(priority) {
    let tasks = list.filter((task) => task.priority === priority);

    let nameTasks = '';

    tasks.forEach((task) => {
        nameTasks += `\t"${task.name}"\n`;
    });

    console.log(`Priority "${priority}" tasks:\n\n${nameTasks}`);
}
showTasksPriority('high');

function changeStatus(task, status) {
    let taskName = list.find((item) => item.name === task);
    taskName.status = status;
}
changeStatus('create a post', 'done');

function changePriority(task, priority) {
    let taskName = list.find((item) => item.name === task);
    taskName.priority = priority;
}
changePriority('create a post', 'high');

function addTask(task, priority = PRIORITY.LOW) {
    list.push({ name: task, status: STATUS.TO_DO, priority: priority });
}
addTask('new task');
addTask('show tv')

function deleteTask(task) {
    let thisTask = list.find((item) => item.name === task);
    let indexThisTask = list.indexOf(thisTask);
    list.splice(indexThisTask, 1);
}
deleteTask('create a post');
showListStatus()

