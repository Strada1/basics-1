let buttonsAdd = document.querySelectorAll('.todo__submit');
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
    if(task != ''){
        let newTask = {
            name: task,
            status: status,
            priority: priority
        };
        taskList.push(newTask);
        render();
    } else{
        alert('Введите задачу!');
    }
};

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
    } else{
        statusChange = '';
        checked = '';
    }

    insertionPoint.insertAdjacentHTML("afterbegin", `
        <div class="todo__item ${statusChange}">
        <input type="checkbox" class="todo__checkbox custom-checkbox" id="custom_checkbox${checkboxId}" ${checked}>
        <label class="todo__label" for="custom_checkbox${checkboxId}"></label>
        <p>${task}</p>
        <button class="todo__delete">X</button>
        </div>    
        `);

    let buttonsDelete = document.querySelectorAll('.todo__delete');
    deleteTask(buttonsDelete);
}

const changeStatus = function(){
    let checkboxes = document.querySelectorAll('.todo__checkbox');
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', e => {
        if (e.target.checked) {
            taskList.map((item) => (e.target.nextElementSibling.nextElementSibling.textContent == item.name) ? item.status = STATUS.DONE: false);
            checkbox.closest('.todo__item').classList.add('todo_item_checked');
        } else {
            taskList.map((item) => (e.target.nextElementSibling.nextElementSibling.textContent == item.name) ? item.status = STATUS.TO_DO: false);
            checkbox.closest('.todo__item').classList.remove('todo_item_checked');
        }
        })
    )
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
    changeStatus();
}));