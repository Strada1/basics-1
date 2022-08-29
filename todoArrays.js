const STATUS = {
    TODO: 'To Do',
    DONE: 'Done',
    INPROGRESS: 'In Progress',
}
const PRIORITY = {
    LOW: "Низкий приоритет",
    HIGH: "Высокий приоритет",
}
const LIST = [
    {name:'create a new practice task', status: STATUS.INPROGRESS, priority: PRIORITY.HIGH},
    {name:'make a bed', status: STATUS.TODO, priority: PRIORITY.LOW},
    {name:'write a post', status: STATUS.DONE, priority: PRIORITY.LOW},
]
function addTask(name, status = STATUS.TODO, priority = PRIORITY.HIGH) {
    let position = LIST.findIndex(item => item.name == name)
    if (position < 0) {
      	LIST.push({name, status, priority})
      	console.log(`Задача "${name}" успешно добавлена`)
    } else {
        console.log(`Задача "${name}" уже существует`)
    }
}
function delTask(name) {
    let position = LIST.findIndex(item => item.name == name)
    if (position >= 0) {
        LIST.splice(position, 1)
      	console.log(`Задача "${name}" успешно удалена`)
    } else {
        console.log(`Задача "${name}" не существует`)
    }
}
function changeStatus(name, status) {
    let position = LIST.findIndex(item => item.name == name)
    if (position >= 0 && Object.values(STATUS).includes(status)) {
        LIST[position].status = status
        console.log(`Статус задачи "${name}" успешно изменен на ${status}`)
    } else {
        console.log(`Задача "${name}" не существует`)
    }
}
function changePriority(name, priority) {
    let position = LIST.findIndex(item => item.name == priority)
    if (position >= 0 && Object.values(PRIORITY).includes(priority)) {
        LIST[position].priority = priority
        console.log(`Статус задачи "${name}" успешно изменен на ${priority}`)
    } else {
        console.log(`Задача "${name}" не существует`)
    }
} 
function showList() {  
    for (let status in STATUS) {
        console.log(STATUS[status])
        const listFilter = LIST.filter(item => item.status == STATUS[status])
        if (listFilter.length === 0) {
            console.log("- - - - -")
        } else {
            listFilter.map(item => console.log( `\t ${item.name}, \t ${item.priority}`))
        }
    } 
}

console.log('Проверить есть ли такая задача и выполнить действие')
addTask("добавить задачу1")
console.log('------------------------------')

console.log('Смена статуса задачи')
changeStatus('uyfufuy', STATUS.DONE)
console.log('------------------------------')

console.log('Смена статуса задачи')
changeStatus('write a post', STATUS.DONE);
console.log('------------------------------')

console.log('Проверить есть ли такая задача и выполнить действие')
addTask("добавить задачу1")
console.log('------------------------------')

console.log('Проверить есть ли такая задача и выполнить действие')
addTask("добавить задачу2")
console.log('------------------------------')

console.log('Проверить задачу при удалении')
delTask("write a post")
console.log('------------------------------')

console.log('Проверить есть ли такая задача и выполнить действие')
addTask("добавить задачу1", STATUS.DONE)
console.log('------------------------------')

console.log('Смена приоритета задачи')
changePriority("добавить задачу2", PRIORITY.LOW)
console.log('------------------------------')
showList()