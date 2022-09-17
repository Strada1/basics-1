let buttonsAdd = document.querySelectorAll('.todo__submit');
let buttonsDelete;
const taskList = [];
let checkboxId = 0;

const STATUS = {
    TO_DO: 'To Do',
    DONE: 'Done'
};

const PRIORITY = {
    HIGH: 'High',
    LOW: 'Low'
};

const addTask = function(task, priority, status = STATUS.TO_DO){
    let newTask = {
        name: task,
        status: status,
        priority: priority
    };
    taskList.push(newTask);
    render();
}

const render = function(){
    document.querySelectorAll('.todo__list').forEach(list => list.innerHTML = "");
    for(element of taskList){
        createItem(element.name, element.status, element.priority);
    }
}

const createItem = function(task, status, priority){
    checkboxId++;
    let insertionPoint;
    let statusChange;
    let checked;

    if(priority == 'High'){
        insertionPoint = document.querySelectorAll('.todo__create')[0].nextElementSibling;
    } else{
        insertionPoint = document.querySelectorAll('.todo__create')[1].nextElementSibling;
    }

    if(status == STATUS.DONE){
        statusChange = 'todo_item_checked';
        checked = 'checked';
        console.log(0);
    } else{
        statusChange = '';
        checked = '';
        console.log(1);
    }

    insertionPoint.insertAdjacentHTML("afterbegin", `
        <div class="todo__item ${statusChange}">
        <input type="checkbox" class="todo__checkbox custom-checkbox" id="custom_checkbox${checkboxId}" ${checked}>
        <label class="todo__label" for="custom_checkbox${checkboxId}"></label>
        <p>${task}</p>
        <button class="todo__delete">X</button>
        </div>    
        `);

    buttonsDelete = document.querySelectorAll('.todo__delete');
    deleteTask(buttonsDelete);
    changeStatus();
}

const changeStatus = function(){
    let inputs = document.querySelectorAll('.todo__checkbox');
    inputs.forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            if (e.target.checked) {
                taskList.filter(item => item.status = STATUS.DONE);
                checkbox.closest('.todo__item').classList.add('todo_item_checked');
                console.log(taskList)
            } else {
                taskList.filter(item => item.status = STATUS.TO_DO);
                checkbox.closest('.todo__item').classList.remove('todo_item_checked');
                console.log(taskList)
            }
        })
    })
}

const deleteTask = function(buttons){
    buttons.forEach(buttonDel => buttonDel.addEventListener('click', function(){
        let currentText = buttonDel.previousElementSibling.textContent;
        currentText = currentText.trim();
        taskList.find((item,index) => (item.name == currentText) ? taskList.splice(index,1): false);
        render();
    }));
};

buttonsAdd.forEach(button => button.addEventListener('click', function(event){
    event.preventDefault();

    let task = event.target.previousElementSibling.value;
    let priority = event.target.closest('.todo__section').dataset.priority;

    addTask(task, priority);
}));