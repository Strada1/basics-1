const list = [];                //массив задач todo листа
const STATUS = {TO_DO: 'To Do',  
                DONE:'Done'};              // массив статусов
const PRIORITY = {
    HIGH: "High",
    LOW: "Low"
}
const ELEMENTS = {
    HIGHPRIORITYINPUT: document.getElementById('high-priority-input'),
    LOWPRIORITYINPUT: document.getElementById('low-priority-input'),
    HIGHINPUTCONTAINER: document.getElementsByClassName('input-container')[0],
    LOWINPUTCONTAINER: document.getElementsByClassName('input-container')[1],
    HIGHTASKFORM: document.getElementsByClassName('form')[0],
    LOWTASKFORM: document.getElementsByClassName('form')[1],
    HIGHADDBUTTON: document.querySelector('#high-add-button'),
    LOWADDBUTTON: document.querySelector('#low-add-button'),
    TASKOUTER: document.querySelectorAll('.task-outer')
}
const nullString = ''

let i = 0;

function createTask(inputelem, place, priority) {
    i += 1;
    if (inputelem.value !== nullString) {
        
        place.insertAdjacentHTML('afterend', `
            <div class="task-outer" id="${i}">
                <div class="task-inner">
                    <div class="text-container">
                        <input type="checkbox" id="task" name="task"> 
                        <span class="texttask">${inputelem.value}</span>      
                        <button class="button"> <img src="./img/close-icon.svg"> </button>
                    </div>
                </div>
            </div>
            `);
        list.push({id: i, status: STATUS.TO_DO, priority});
        inputelem.value = nullString;
    } else {
        alert('Введите что-нибудь');
    }
}
function removeTask() {
    let taskOuter = document.querySelectorAll('.task-outer')
    let buttonOnTasks = document.querySelectorAll('.button')
    for (elem of taskOuter){
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === +elem.id) {
                for (butt of buttonOnTasks) {
                    butt.addEventListener('click', (event) => {
                        event.preventDefault();
                        butt.remove();
                    })
                }
            }
        }
    }
};


// function removeTask() {
//     for (let task of tasks) {
//         if (list.find(item => item.id === task.innerHTML)) {
//             list.splice(list.findIndex(item => item.name === taskName, 0), 1);
//         }
//     }
// }

function changeStatus(taskName, taskStatus) { // функция изменения статуса todo листа
    for (let i = 0;  i < list.length; i++) {
        if (list[i].name === taskName && taskStatus !== undefined) {
            list[i].status = taskStatus;
        } else return;
    }
}

// function deleteTask (taskName) {
//     if (list.find(item => item.name === taskName)) {
//         list.splice(list.findIndex(item => item.name === taskName, 0), 1);
//     }
// }


ELEMENTS.HIGHADDBUTTON.addEventListener('click', (event) => {
    event.preventDefault(); 
    createTask(ELEMENTS.HIGHPRIORITYINPUT, ELEMENTS.HIGHINPUTCONTAINER, PRIORITY.HIGH);
})

ELEMENTS.LOWADDBUTTON.addEventListener('click', (event) => {
    event.preventDefault(); 
    createTask(ELEMENTS.LOWPRIORITYINPUT, ELEMENTS.LOWINPUTCONTAINER, PRIORITY.HIGH);
})

ELEMENTS.HIGHTASKFORM.addEventListener('submit', (event) => {
    event.preventDefault(); 
    createTask(ELEMENTS.HIGHPRIORITYINPUT, ELEMENTS.HIGHPUTCONTAINER, PRIORITY.LOW);
})

ELEMENTS.LOWTASKFORM.addEventListener('submit', (event) => {
    event.preventDefault(); 
    createTask(ELEMENTS.LOWPRIORITYINPUT, ELEMENTS.LOWINPUTCONTAINER, PRIORITY.LOW);
})

// function changePriority (taskName, taskPriority) {
//     for (let i = 0;  i < list.length; i++) {
//         if (list[i].name === taskName && taskPriority !== undefined) {
//             list[i].priority = taskPriority;
//         } else return;
//     }
// }



