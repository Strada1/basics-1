const list = [];                //массив задач todo листа
const STATUS = {TO_DO:'To Do',  
                DONE:'Done'};              // массив статусов
const PRIORITY = {
    HIGH: "High",
    LOW: "Low"
}
const ELEMENTS = {
    DIVCONTAINER: document.querySelector(".container"),
    HIGHCONTAINER: document.querySelector("#high-priority"),
    LOWCONTAINER: document.querySelector("#low-priority"),
    CONTAINERTODO: document.querySelector('.container'),
    HIGHPRIORITYINPUT: document.querySelector('#high-priority-input'),
    LOWPRIORITYINPUT: document.querySelector('#low-priority-input'),
    HIGHINPUTCONTAINER: document.getElementsByClassName('input-container')[0],
    LOWINPUTCONTAINER: document.getElementsByClassName('input-container')[1],
    HIGHTASKFORM: document.getElementsByClassName('form')[0],
    LOWTASKFORM: document.getElementsByClassName('form')[1],
    HIGHADDBUTTON: document.querySelector('#high-add-button'),
    LOWADDBUTTON: document.querySelector('#low-add-button'),
    CHECBOXES: document.querySelectorAll('input[type="checkbox"]'),
    TASK: document.querySelectorAll("#task-outer")
}
const ERRORS = {
    NULLSTRING: 'Введите что-нибудь',
}
const nullString = ''

function createTaskUI(elem, priority) {
    let i = Date.now();
    if (elem.value !== nullString) {
        list.push({id: i, name: elem.value, status: STATUS.TO_DO, priority}); 
        elem.value = nullString;    
    } else {
        alert(ERRORS.NULLSTRING);
    }
    render();
}

ELEMENTS.HIGHADDBUTTON.addEventListener('click', (event) => {
    event.preventDefault(); 
    createTaskUI(ELEMENTS.HIGHPRIORITYINPUT, PRIORITY.HIGH)
})

ELEMENTS.LOWADDBUTTON.addEventListener('click', (event) => {
    event.preventDefault(); 
    createTaskUI(ELEMENTS.LOWPRIORITYINPUT, PRIORITY.LOW)   
})

ELEMENTS.HIGHTASKFORM.addEventListener('submit', (event) => {
    event.preventDefault(); 
    createTaskUI(ELEMENTS.HIGHPRIORITYINPUT, PRIORITY.HIGH)
})

ELEMENTS.LOWTASKFORM.addEventListener('submit', (event) => {
    event.preventDefault(); 
    createTaskUI(ELEMENTS.LOWPRIORITYINPUT, PRIORITY.LOW)
}) 

function changeStatus(name, i) {
    let checkbox = document.querySelector(`#checkbox${i}`)
    for (let i = 0;  i < list.length; i++) {
        if (list[i].id === name) {
            if (checkbox.checked) {
                list[i].status = STATUS.DONE;
                render()
            } else {
                list[i].status = STATUS.TO_DO;  
                render()
            }
        }              
    } 
}

function removeTask(name, i) {
    let button = ELEMENTS.CONTAINERTODO.querySelector(`#button${i}`);
    let div = document.querySelector(`#task-outer${i}`).remove();
    for (let i = 0;  i < list.length; i++) {
        if (list.find(item => item.id === name)) {
            list.splice(list.findIndex(item => item.id === name, 0), 1);
        }
    }
    render();
}

function render() {
    const deleteTask = document.querySelectorAll('.task-todo');
    deleteTask.forEach(function(item) {
        item.remove()
    });

    for (let i = 0;  i < list.length; i++) {
        if (list[i].priority === PRIORITY.HIGH) {
            ELEMENTS.HIGHINPUTCONTAINER.insertAdjacentHTML('afterend', `
            <div class='task-todo' id="task-outer${i}">
                <div class="text-container">
                    <input ${list[i].status === STATUS.DONE ? "checked" : ' '} onchange="changeStatus(${list[i].id}, ${i})" class="checkbox" type="checkbox" id="checkbox${i}" name="checkbox${i}"> 
                    <label for="checkbox${i}" class="texttask">${list[i].name}</label>      
                    <button onclick="removeTask(${list[i].id}, ${i})" id="button${i}"> <img src="./img/close-icon.svg"> </button>
                </div>
            </div>
            `); 
        }    
        if (list[i].priority === PRIORITY.LOW) {
            ELEMENTS.LOWINPUTCONTAINER.insertAdjacentHTML('afterend', `
            <div class='task-todo' id="task-outer${i}">
                <div class="text-container">
                    <input ${list[i].status === STATUS.DONE ? "checked" : ' '} onchange="changeStatus(${list[i].id}, ${i})" class="checkbox" type="checkbox" id="checkbox${i}" name="checkbox${i}"> 
                    <label for="checkbox${i}" class="texttask">${list[i].name}</label>      
                    <button onclick="removeTask(${list[i].id}, ${i})" id="button${i}"> <img src="./img/close-icon.svg"> </button>
                </div>
            </div>
            `); 
        }
    }
}

