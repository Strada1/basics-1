const HighDiv = document.querySelector('#high') 
const LowDiv = document.querySelector('#low')
const newHighTask = document.querySelector('#highValue')
const newLowTask = document.querySelector('#lowValue')

//обьявим кнопки добавления и будем их слушать
const AddButtonHigh = document.querySelector('#addButtonHigh')
AddButtonHigh.addEventListener('click', addTaskHigh)
const AddButtonLow = document.querySelector('#addButtonLow')
AddButtonLow.addEventListener('click', addTaskLow)

//обьявим списки задач
const HighList = document.querySelector('#high_list')
const LowList = document.querySelector('#low_list')

//функция очистки списков
function delHighlist(){
    while (HighList.firstChild){
        HighList.removeChild(HighList.firstChild)
    }
}
function delLowlist(){
    while (LowList.firstChild){
        LowList.removeChild(LowList.firstChild)
    }
}

const STATUS = {
    TODO: 'To Do',
    DONE: 'Done',
    INPROGRESS: 'In Progress',
}
const PRIORITY = {
    LOW: "low",
    HIGH: "high",
}
const LIST = [
    {name:'create a new practice task', status: STATUS.INPROGRESS, priority: PRIORITY.HIGH},
    {name:'make a bed', status: STATUS.TODO, priority: PRIORITY.LOW},
    {name:'write a post', status: STATUS.DONE, priority: PRIORITY.LOW},
]

function render () {
//очистка полей ввода
    newHighTask.value = ''
    newLowTask.value = ''
    delHighlist()
    delLowlist()
for (let task of LIST) {
    const priority = '#'+task.priority 
//    const status = '#'+task.status 
    const priorityDiv = document.querySelector(priority)
    const div = document.createElement('div')
        div.classList.add('task_list')
        div.insertAdjacentHTML('afterbegin', `
            <label><input type="radio">${task.name}</label>
            <button id="delButton">×</button>`)
        div.querySelector('#delButton').addEventListener('click', delTask)
        div.querySelector('input').addEventListener('click', changeStatus)
        priorityDiv.querySelector('.list').append(div)
    }    
}
render()

//функции добавления задач
function addTaskHigh(env, name, status = STATUS.TODO, priority = PRIORITY.HIGH) {
    name = newHighTask.value
    let position = LIST.findIndex(item => item.name == name)
    if (position < 0 && name != '') {
      	LIST.push({name, status, priority})
      	console.log(`Задача "${name}" успешно добавлена`)
    } else {
        alert(`Задача "${name}" уже существует`)
    }
    env.preventDefault()
    render()
}
function addTaskLow(env, name, status = STATUS.TODO, priority = PRIORITY.LOW) {
    name = newLowTask.value
    let position = LIST.findIndex(item => item.name == name)
    if (position < 0 && name != '') {
      	LIST.push({name, status, priority})
      	console.log(`Задача "${name}" успешно добавлена`)
    } else {
        alert(`Задача "${name}" уже существует`)
    }
    env.preventDefault()
    render()
}

//функции добавления задач
function delTask(event, name) {
    name = event.target.previousElementSibling.textContent
    let position = LIST.findIndex(item => item.name == name)
    if (position >= 0) {
        LIST.splice(position, 1)
      	console.log(`Задача "${name}" успешно удалена`)
    } else {
        console.log(`Задача "${name}" не существует`)
    }
    render()
}

//пока изменение не связано с массивом
function changeStatus () {
    console.log(`Нажатие по чекбоксу`)
    render()
}