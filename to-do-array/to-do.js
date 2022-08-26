const STATUS = {
    IN_PROGRESS: 'In progress',
    TO_DO: 'to do',
    DONE: 'done',
}

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
}

let list = [
    { name: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW },
    { name: 'sleep', status: STATUS.TO_DO, priority: PRIORITY.LOW },
    { name: 'test', status: STATUS.DONE, priority: PRIORITY.HIGH },
    { name: 'git', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
    { name: 'read', status: STATUS.TO_DO, priority: PRIORITY.low },
    { name: 'shopping', status: STATUS.DONE, priority: PRIORITY.HIGH },

]

function addTask(name, priority = PRIORITY.LOW) {
    list.push({name: name, status:STATUS.TO_DO, priority: priority})
}
addTask('new task')

function showTasksName() {

    let showNames = '';

    list.forEach((elem) =>{
        showNames += `${elem.name}\n`
    })

    console.log(showNames)
}
showTasksName()

function showTask(task) {
    let thisTask = '';
    let taskName = list.find( item => item.name === task )
    for (let key in taskName) {
        thisTask += `${key}: ${taskName[key]}\n`;
    }
    console.log(thisTask)
}
showTask('create a post')

function showTasksStatus(status) {

    let tasks = list.filter(item => item.status === status)

    let showTasks = '';

    tasks.forEach((elem) =>{
        showTasks += `${elem.name}\n`
    })

    console.log(`${status}:\n${showTasks}`)
}
showTasksStatus('In progress')

function showTasksPriority(priority){
    let tasks = list.filter(item => item.priority === priority)

    let showTasks = '';

    tasks.forEach((elem) =>{
        showTasks += `${elem.name}\n`
    })

    console.log(`${priority}:\n${showTasks}`)
}
showTasksPriority('high')

function changeStatus(task, status) {
    let taskName = list.find(item => item.name === task);
    taskName.status = status;
}
changeStatus('create a post', 'done')
showTask('create a post')

function changePriority(task, priority) {
    let taskName = list.find(item => item.name === task);
    taskName.priority = priority;
}
changePriority('create a post', 'high')
showTask('create a post')

function deleteTask(task) {
    let thisTask = list.find( item => item.name === task )
    let indexThisTask = list.indexOf(thisTask)
    list.splice(indexThisTask, 1)
}
deleteTask('create a post')
showTasksName()


