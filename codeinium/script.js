const list = [];                //массив задач todo листа
const STATUS = {TO_DO:'To Do',  
                DONE:'Done'};              // массив статусов
const PRIORITY = {
    HIGH: "High",
    LOW: "Low"
}
const ELEMENTS = {
    BODY: document.body,
    CONTAINERTODO: document.querySelector('.container'),
    HIGHPRIORITYINPUT: document.getElementById('high-priority-input'),
    LOWPRIORITYINPUT: document.getElementById('low-priority-input'),
    HIGHINPUTCONTAINER: document.getElementsByClassName('input-container')[0],
    LOWINPUTCONTAINER: document.getElementsByClassName('input-container')[1],
    HIGHTASKFORM: document.getElementsByClassName('form')[0],
    LOWTASKFORM: document.getElementsByClassName('form')[1],
    HIGHADDBUTTON: document.querySelector('#high-add-button'),
    LOWADDBUTTON: document.querySelector('#low-add-button'),
    CHECBOXES: document.querySelectorAll(".box"),
}
const nullString = ''

let i = 0;
function createTaskUI(inputelem, place, priority) {
    i += 1;
    if (inputelem.value !== nullString) {
        place.insertAdjacentHTML('afterend', `
            <div id="task-outer${i}">
                <div class="text-container">
                    <input type="checkbox" class="box" id="${i}" name="checkbox"> 
                    <label for="${i}" class="texttask">${inputelem.value}</label>      
                    <button id="button${i}"> <img src="./img/close-icon.svg"> </button>
                </div>
            </div>
            `);
        const button = ELEMENTS.CONTAINERTODO.querySelector(`#button${i}`)
        const div = document.querySelector(`#task-outer${i}`)
        
        button.addEventListener('click', () => {
            div.remove();
            removeTaskFromList(inputelem.value);
        });
        list.push({id: i, name: inputelem.value, status: STATUS.TO_DO, priority});
        inputelem.value = nullString;
    } else {
        alert('Введите что-нибудь');
    }
}

function removeTaskFromList(elem) {
    if (list.find(item => item.name === elem.name)) {
        list.splice(list.findIndex(item => item.name === elem.name, 0), 1);
    }
}


function changeStasusUI() {
    for (let checkbox of ELEMENTS.CHECBOXES) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                changeStatusFromList(checkbox.id, STATUS.DONE);
            } else {
                changeStatusFromList(checkbox.id, STATUS.TO_DO);
            };
        });
    };
}

function changeStatusFromList(checkboxId, taskStatus) { // функция изменения статуса todo листа
    for (let i = 0;  i < list.length; i++) {
        if (list[i].id === checkboxId) {
            list[i].status = taskStatus;
        } 
    }
}

function render() {
    //что сюда????
}

ELEMENTS.HIGHADDBUTTON.addEventListener('click', (event) => {
    event.preventDefault(); 
    createTaskUI(ELEMENTS.HIGHPRIORITYINPUT, ELEMENTS.HIGHINPUTCONTAINER, PRIORITY.HIGH);
})

ELEMENTS.LOWADDBUTTON.addEventListener('click', (event) => {
    event.preventDefault(); 
    createTaskUI(ELEMENTS.LOWPRIORITYINPUT, ELEMENTS.LOWINPUTCONTAINER, PRIORITY.LOW);
})

ELEMENTS.HIGHTASKFORM.addEventListener('submit', (event) => {
    event.preventDefault(); 
    createTaskUI(ELEMENTS.HIGHPRIORITYINPUT, ELEMENTS.HIGHPUTCONTAINER, PRIORITY.HIGH);
})

ELEMENTS.LOWTASKFORM.addEventListener('submit', (event) => {
    event.preventDefault(); 
    createTaskUI(ELEMENTS.LOWPRIORITYINPUT, ELEMENTS.LOWINPUTCONTAINER, PRIORITY.LOW);
})


