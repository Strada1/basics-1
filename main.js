const ELEMENTS = {
    addTaskHigh : document.querySelector('.add_task_high'),
    addTaskLow : document.querySelector('.add_task_low'),
    highInput : document.querySelector('.high_input'),
    lowInput : document.querySelector('.low_input'),
    listHigh : document.querySelector('.list_high'),
    listLow : document.querySelector('.list_low')
}

const PRIORITY = {
    high: 'high',
    low: 'low',
}

const STATUS = {
    toDo : 'status_todo',
    done : 'status_done',
}


const list = [ { name: 'Изучить новую тему', priority: PRIORITY.high, status: STATUS.toDo},
               { name: 'Сверстать этот TODO list', priority: PRIORITY.high, status: STATUS.toDo},
               { name: 'Начать делать задачу', priority: PRIORITY.high, status: STATUS.toDo},
               { name: 'Посмотреть ютубчик', priority: PRIORITY.low, status: STATUS.toDo},];

function addTask (event, newTask, priority) {

if(newTask.value.trim() != '' && list.findIndex (function (item) {return item.name == newTask.value; }) == -1) {

 list.push({'name': newTask.value, 'priority': priority, 'status' : STATUS.toDo});

};
event.preventDefault();
newTask.value = '';
render();
};

ELEMENTS.highInput.addEventListener('submit', (event)=> {
    addTask(event, ELEMENTS.addTaskHigh, PRIORITY.high);
    
});

ELEMENTS.lowInput.addEventListener('submit', (event)=> {
    addTask(event, ELEMENTS.addTaskLow, PRIORITY.low);
});


function deleteTask(task) {
    if(list.findIndex (function (item) {return item.name ===  task; }) !== -1) {
        let deleteItem = list.findIndex(function (item) {
            return item.name === task;  
        });
        list.splice(deleteItem, 1);
    };

    render();
};


function changeStatus(task) { 
    if(list.findIndex (function (item) {return item.name ===  task; }) !== -1) {
        let changeIndex = list.find(function (item) {
            return (item.name == task); 
        });
        if(changeIndex.status == STATUS.toDo){
         changeIndex.status = STATUS.done;


        } else {
            changeIndex.status = STATUS.toDo; 
        }
    }
    render();
};


function render () {

    let delTasks = document.querySelectorAll('.task_todo');
    delTasks.forEach((item) => {
        item.remove();
    });

   for (let item of list) {
        
    if(item.priority === PRIORITY.high) {
        ELEMENTS.listHigh.insertAdjacentHTML('beforeend', 
    `<li class="task_todo">
    <label>
    <input type="checkbox" name="to_do" onclick = 'changeStatus("${item.name}")' ${(item.status == STATUS.done) ? 'checked' : ''}>
         <p class="task_name">
         ${item.name}
         </p>
    </label>
    <button class="btn_exit" type="button" onclick = 'deleteTask("${item.name}")'></button>
</li>`
     );
     };
    

    if(item.priority === PRIORITY.low) {
        ELEMENTS.listLow.insertAdjacentHTML('beforeend', 
        `<li class="task_todo">
        <label>
        <input type="checkbox" name="to_do" onclick = 'changeStatus("${item.name}")' ${(item.status == STATUS.done) ? 'checked' : ''}>
             <p class="task_name">
             ${item.name}
             </p>
        </label>
        <button class="btn_exit" type="button" onclick = 'deleteTask("${item.name}")'></button>
    </li>`
     );
     };
};

for (let item of document.querySelectorAll('input[type=checkbox]')) {
    if (item.checked) {
        let li = item.parentNode.parentNode;
        li.classList.add('status_done');
    }
}
};

render();
