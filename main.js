const ELEMENTS = {
    addTaskHigh : document.querySelector('.add_task_high'),
    addTaskLow : document.querySelector('.add_task_low'),
    listHigh : document.querySelector('.list_high li:first-child'),
    listLow : document.querySelector('.list_low li:first-child'),
    highInput : document.querySelector('.high_input'),
    lowInput : document.querySelector('.low_input'),
}

function addTask (newTask, list) {

if(newTask.value.trim() != '') {
    list.insertAdjacentHTML('afterend',
    `<li>
        <input type="checkbox" id="first_task_high" name="to_do">
            <label for="first_task_high">
                <p>
                ${newTask.value}
                </p>
            </label>
                <button class="btn_exit" type="button"></button>
    </li>`
     );  
};

newTask.value = '';
};

ELEMENTS.highInput.addEventListener('submit', (event)=> {
    addTask(ELEMENTS.addTaskHigh, ELEMENTS.listHigh);
    event.preventDefault();
});

ELEMENTS.lowInput.addEventListener('submit', (event)=> {
    addTask(ELEMENTS.addTaskLow, ELEMENTS.listLow);
    event.preventDefault();
});
