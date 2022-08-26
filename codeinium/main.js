const list = [];  //массив задач todo листа
const STATUS = [{TO_DO: 'To Do'}, {IN_PROGRESS:'In Progress'}, {DONE:'Done'}]; // массив статусов
const PRIORITY = [{HIGH: 'High'}, {LOW: 'Low'}]; //массив приоритетов задачи

function addTask (taskName, taskStatus, taskPriority) { // функция добавления задачи в todo лист
    if (taskName !== undefined && taskStatus !== undefined && taskPriority !== undefined) {
        list.push({name: taskName, status: taskStatus, priority: taskPriority});
    } else return;
}
function changeStatus (taskName, taskStatus) { // функция изменения статуса todo листа
    for (let i = 0;  i < list.length; i++) {
        if (list[i].name === taskName && taskStatus !== undefined) {
            list[i].status = taskStatus;
        } else break;
    }
}
function changePriority (taskName, taskPriority) {
    for (let i = 0;  i < list.length; i++) {
        if (list[i].name === taskName && taskPriority !== undefined) {
            list[i].priority = taskPriority;
        } else return;
    }
}
function deleteTask (taskName) {
    if (list.find(item => item.name === taskName)) {
        list.splice(list.findIndex(item => item.name === taskName, 0), 1);
    }
}
function showList () {
    function show(status) {
        console.log(status + ':');
        for (let i = 0; i < list.length; i++) {
            if (list[i].status === status) {
                console.log('    ' + `"${list[i].name}"` + ', priority - ' + `${list[i].priority}`);
            }
        }
    }
    show(STATUS[0].TO_DO);
    show(STATUS[1].IN_PROGRESS);         
    show(STATUS[2].DONE);
}

//tests
addTask('test', STATUS[1].IN_PROGRESS, PRIORITY[0].HIGH)
addTask('working in the garden', STATUS[0].TO_DO, PRIORITY[1].LOW)
addTask('todolist', STATUS[0].TO_DO, PRIORITY[1].LOW)
changeStatus('test', STATUS[2].DONE)
changePriority('todolist', PRIORITY[1].LOW);
deleteTask('working in the garden')
console.log(list)
showList();
