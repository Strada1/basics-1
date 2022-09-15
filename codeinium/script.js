const list = [];                //массив задач todo листа
const STATUS = {TO_DO:'To Do',  
                DONE:'Done'};              // массив статусов
const PRIORITY = {
    HIGH: "High",
    LOW: "Low"
}
const ELEMENTS = {
    CONTAINERTODO: document.querySelector('.container'),
    HIGHPRIORITYINPUT: document.getElementById('high-priority-input'),
    LOWPRIORITYINPUT: document.getElementById('low-priority-input'),
    HIGHINPUTCONTAINER: document.getElementsByClassName('input-container')[0],
    LOWINPUTCONTAINER: document.getElementsByClassName('input-container')[1],
    HIGHTASKFORM: document.getElementsByClassName('form')[0],
    LOWTASKFORM: document.getElementsByClassName('form')[1],
    HIGHADDBUTTON: document.querySelector('#high-add-button'),
    LOWADDBUTTON: document.querySelector('#low-add-button'),
    TASKOUTER: document.querySelectorAll('.task-outer'),
    BODY: document.body
}
const nullString = ''

let i = 0;
function createTaskUI(inputelem, place, priority) {
    i += 1;
    if (inputelem.value !== nullString) {
        place.insertAdjacentHTML('afterend', `
            <div id="task-outer${i}">
                <div class="text-container">
                    <input type="checkbox" class="box" id="${i}" name="task"> 
                    <label for="${i}" class="texttask">${inputelem.value}</label>      
                    <button id="button${i}"> <img src="./img/close-icon.svg"> </button>
                </div>
            </div>
            `);
        const button = ELEMENTS.CONTAINERTODO.querySelector(`#button${i}`)
        const div = document.querySelector(`#task-outer${i}`)
        button.addEventListener('click', () => {
            div.remove();
            removeTaskFromList(i);
        });
        // const checkbox = ELEMENTS.CONTAINERTODO.querySelector(`#${i}`)
        // checkbox.addEventListener('change', () => {
        //     if (this.checked) {
        //         changeStatusFromList(i, STATUS.DONE);
        //     } else {
        //         changeStatusFromList(i, STATUS.TO_DO)
        //     };
        // });
        list.push({id: i, status: STATUS.TO_DO, priority});
        inputelem.value = nullString;
        render();
    } else {
        alert('Введите что-нибудь');
    }
}

function removeTaskFromList(elem) {
    if (list.find(item => item.id === elem)) {
        list.splice(list.findIndex(item => item.id === elem, 0), 1);
    }
}


function changeStasusUI() {
    let checkboxes = document.querySelectorAll(".box");
    for (elem of checkboxes) {
        elem.addEventListener('change', () => {
            if (this.checked) {
                changeStatusFromList(elem.id, STATUS.DONE);
            } else {
                changeStatusFromList(elem.id, STATUS.TO_DO)
            };
        });
    };
}

function changeStatusFromList(id, taskStatus) { // функция изменения статуса todo листа
    if (list.find(item => item.id == id)) {
        list[i].status = taskStatus;
    }
}

function render() {
    list.forEach(() => {
        cre
    })

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
ELEMENTS.BODY.onload(() => {
    render()
})

