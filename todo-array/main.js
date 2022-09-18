const addBtnHight = document.querySelector('.btnHight');
const addBtnLow = document.querySelector('.btnLow')
const form = document.querySelector('.add-todo-high')
const formLow = document.querySelector('.add-todo-low')
const addListHight = document.querySelector('.addlistHight');
const addListLow = document.querySelector('.addlistLow');
const inputFieldHight = document.getElementById('todo-input-high');
const inputFieldLow = document.getElementById('todo-input-low');


const TASKITEMS = []

let input;

const STATUS = {
    TODO: 'To Do',
    DONE: 'Done',
}
const PRIORITY = {
    HIGH: 'High',
    LOW: 'Low'
}
form.addEventListener('submit' , checkhigh)

function checkhigh(event) {
    event.preventDefault()
    input = inputFieldHight.value;
    addTask()
}
formLow.addEventListener('submit' , checkLow)
function checkLow(event) {
    event.preventDefault()
    input = inputFieldLow.value;
    addTask()

}

function addTask() {
    if(input == inputFieldHight.value) {
        TASKITEMS.push({
            name: input,
            status: STATUS.TODO,
            priority: PRIORITY.HIGH,
        })
        addListHight.insertAdjacentHTML('afterbegin' , `<div id="removelistLow" class="addlistLow">
        <li class="item" id="item">
            <a href="#">
                <label class="container">
                    <input type="checkbox" name="radio">
                    <span class="checkmark"></span>
                </label>
            </a>
            <span class="todo-text">${input}</span>
            <a href="#" id="itemToDo"class="todo-remove-high"><img id="todo-remove" src="img/delete-task.svg" alt=""></i></a>
        </li>
    </div>`)
        console.log(TASKITEMS)

    } else {
        TASKITEMS.push({
            name: input,
            status: STATUS.TODO,
            priority: PRIORITY.LOW,
        })
        addListLow.insertAdjacentHTML('afterbegin' , `<div id="removelistLow" class="addlistLow">
        <li class="item" id="item">
            <a href="#">
                <label class="container">
                    <input type="checkbox" name="radio">
                    <span class="checkmark"></span>
                </label>
            </a>
            <span class="todo-text">${input}</span>
            <a href="#" id="itemToDo"class="todo-remove-low"><img id="todo-remove" src="img/delete-task.svg" alt=""></i></a>
        </li>
    </div>`)
        console.log(TASKITEMS)
    }

}



