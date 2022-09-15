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
    CHECBOXES: document.querySelectorAll(".box"),
    TASK: document.querySelectorAll("#task-outer")
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

        const button = ELEMENTS.CONTAINERTODO.querySelector(`#button${i}`);
        const div = document.querySelector(`#task-outer${i}`);
        button.addEventListener('click', () => {
            div.remove();
            removeTaskFromList(inputelem.value);
            render();
        });

        list.push({id: i, name: inputelem.value, status: STATUS.TO_DO, priority});
        inputelem.value = nullString;
        render();
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
            if (this.checked) {
                changeStatusFromList(this.id, STATUS.DONE);
            } else {
                changeStatusFromList(this.id, STATUS.TO_DO);
            };
        });
        render();
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
    ELEMENTS.HIGHCONTAINER.remove();
    ELEMENTS.LOWCONTAINER.remove();
    
    ELEMENTS.DIVCONTAINER.insertAdjacentHTML('afterbegin',`
                <div id="high-priority">
                    <div id="high">HIGH</div>
                    <div class="input-container">
                            <form class="form">
                                <input type="text" id="high-priority-input" placeholder="Добавить важных дел">
                                <button id="high-add-button"> <img class="add" src="./img/add-icon.svg"> </button>
                            </form>
                    </div>  

                </div>
    `);
    
    ELEMENTS.DIVCONTAINER.insertAdjacentHTML('beforeend',`
            <div id="low-priority">
                <div id="low">LOW</div>
                <div class="input-container">
                    <form class="form">
                        <input type="text" id="low-priority-input" placeholder="Добавить">  
                        <button id="low-add-button"> <img class="add" src="./img/add-icon.svg"> </button>
                    </form> 
                </div>
            
            </div>
    `);

    for (let i = 0;  i < list.length; i++) {
        if (list[i].priority === PRIORITY.HIGH) {
            ELEMENTS.HIGHINPUTCONTAINER.insertAdjacentHTML('afterend', `
            <div id="task-outer${i}">
                <div class="text-container">
                    <input type="checkbox" class="box" id="${i}" name="checkbox"> 
                    <label for="${i}" class="texttask">${list[i].name}</label>      
                    <button id="button${i}"> <img src="./img/close-icon.svg"> </button>
                </div>
            </div>
        `);
        } 

        if (list[i].priority === PRIORITY.LOW) {
            ELEMENTS.LOWINPUTCONTAINER.insertAdjacentHTML('afterend', `
            <div id="task-outer${i}">
                <div class="text-container">
                    <input type="checkbox" class="box" id="${i}" name="checkbox"> 
                    <label for="${i}" class="texttask">${list[i].name}</label>      
                    <button id="button${i}"> <img src="./img/close-icon.svg"> </button>
                </div>
            </div>
            `);
        }
    }
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

