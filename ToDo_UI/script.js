const addBtnHight = document.querySelector('.btnHight');
const addBtnLow = document.querySelector('.btnLow')
const addListHight = document.querySelector('.addlistHight');
const addListLow = document.querySelector('.addlistLow');
const inputFieldHight = document.getElementById('todo-input-high');
const inputFieldLow = document.getElementById('todo-input-low');

addBtnHight.addEventListener ('click', checkHigh)
addBtnLow.addEventListener ('click', checkLow)
function checkHigh(event) {
    event.preventDefault()

    if (inputFieldHight.value.trim() == '') {
        alert('Введите текст!')
    } else {
        addTaskHigh(event)
    }
}

function addTaskHigh (event) {
    event.preventDefault()

    addListHight.insertAdjacentHTML("afterbegin", `<div id="removelistHigh" class="addlist">
    <li class="item" id="item">
        <a href="#">
            <label class="container">
                <input type="checkbox" name="radio">
                <span class="checkmark"></span>
            </label>
        </a>
        <span class="todo-text">${inputFieldHight.value}</span>
        <a href="#" id="itemToDo"class="todo-remove-high"><img id="todo-remove" src="img/delete-task.svg" alt=""></i></a>
    </li>
</div>`) ;
let removeHighTasks = document.querySelector('.todo-remove-high')
let deleteHighTarget = document.querySelector('#removelistHigh')
removeHighTasks.addEventListener( 'click', ()=> {
    deleteHighTarget.remove(this)
})

}
function checkLow(event) {
    event.preventDefault()

    if (inputFieldLow.value.trim() == '') {
        alert('Введите текст!')
    } else {
        addTaskLow(event)
    }
}
function addTaskLow (event) {
    event.preventDefault()

    addListLow.insertAdjacentHTML("afterbegin", `<div id="removelistLow" class="addlistLow">
    <li class="item" id="item">
        <a href="#">
            <label class="container">
                <input type="checkbox" name="radio">
                <span class="checkmark"></span>
            </label>
        </a>
        <span class="todo-text">${inputFieldLow.value}</span>
        <a href="#" id="itemToDo"class="todo-remove-low"><img id="todo-remove" src="img/delete-task.svg" alt=""></i></a>
    </li>
</div>`) ;
let removeLowTasks = document.querySelector('.todo-remove-low')
let deleteLowTarget = document.querySelector('#removelistLow')
removeLowTasks.addEventListener( 'click', ()=> {
    deleteLowTarget.remove(this)
})


}
