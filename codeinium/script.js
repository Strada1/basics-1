const list = [];                //массив задач todo листа
const STATUS = {TO_DO: 'To Do',  
                DONE:'Done'};              // массив статусов
const ELEMENTS = {
    HIGHPRIORITYINPUT: document.getElementById('high-priority-input'),
    LOWPRIORITYINPUT: document.getElementById('low-priority-input'),
    HIGHINPUTCONTAINER: document.getElementsByClassName('input-container')[0],
    LOWINPUTCONTAINER: document.getElementsByClassName('input-container')[1],
    HIGHTASKFORM: document.getElementsByClassName('form')[0],
    LOWTASKFORM: document.getElementsByClassName('form')[1],
    // CHECKTASK: ff,
    HIGHADDBUTTON: document.querySelector('#high-add-button'),
    LOWADDBUTTON: document.querySelector('#low-add-button') 
}
const nullString = ''

function createTask(inputelem, place) {
    if (inputelem.value !== nullString) {
        place.insertAdjacentHTML('afterend', `
            <div class="task-outer">
                        <div class="task-inner">
                            <div class="text-container">
                                <label class="text"> 
                                    <input type="checkbox" id="task" name="task"> 
                                    <div class="task">${inputelem.value}</div>      
                                    <button> <img src="./img/close-icon.svg"> </button>
                                </label>
                        </div>
                    </div>
            `);
        list.push({name: inputelem.value, status: STATUS.TO_DO});
        inputelem.value = nullString;
    } else {
        alert('Введите что-нибудь');
    }
}


function removeTask() {
    let tasks = document.querySelectorAll('.text');
    for (let task of tasks) {
        if (list.find(item => item.name === task.textContent)) {
            list.splice(list.findIndex(item => item.name === taskName, 0), 1);
        }
    }
}


// function addTask (taskName) {     // функция добавления задачи в todo лист
//     if (taskName !== undefined && taskPriority !== undefined) {
//         list.push({name: taskName, status: STATUS.TO_DO, priority: taskPriority});
//     } else return;
// }
function changeStatus (taskName, taskStatus) { // функция изменения статуса todo листа
    for (let i = 0;  i < list.length; i++) {
        if (list[i].name === taskName && taskStatus !== undefined) {
            list[i].status = taskStatus;
        } else return;
    }
}

function deleteTask (taskName) {
    if (list.find(item => item.name === taskName)) {
        list.splice(list.findIndex(item => item.name === taskName, 0), 1);
    }
}

ELEMENTS.HIGHADDBUTTON.addEventListener('click', (event) => {
    event.preventDefault(); 
    createTask(ELEMENTS.HIGHPRIORITYINPUT, ELEMENTS.HIGHINPUTCONTAINER);
})

ELEMENTS.LOWADDBUTTON.addEventListener('click', (event) => {
    event.preventDefault(); 
    createTask(ELEMENTS.LOWPRIORITYINPUT, ELEMENTS.LOWINPUTCONTAINER);
})

ELEMENTS.HIGHTASKFORM.addEventListener('submit', (event) => {
    event.preventDefault(); 
    createTask(ELEMENTS.HIGHPRIORITYINPUT, ELEMENTS.HIGHPUTCONTAINER);
})

ELEMENTS.LOWTASKFORM.addEventListener('submit', (event) => {
    event.preventDefault(); 
    createTask(ELEMENTS.LOWPRIORITYINPUT, ELEMENTS.LOWINPUTCONTAINER);
})

// function changePriority (taskName, taskPriority) {
//     for (let i = 0;  i < list.length; i++) {
//         if (list[i].name === taskName && taskPriority !== undefined) {
//             list[i].priority = taskPriority;
//         } else return;
//     }
// }



