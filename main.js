const ELEMENTS = {
    addTaskHigh : document.getElementById('add_task_high'),
    addTaskLow : document.getElementById('add_task_low'),
    listHigh : document.querySelector('.list_high li:first-child'),
    listLow : document.querySelector('.list_low li:first-child'),
}

function addTask () {

let addNewTaskHigh = ELEMENTS.addTaskHigh.value;
let addNewTaskLow = ELEMENTS.addTaskLow.value;

if(addNewTaskHigh != '') {
    ELEMENTS.listHigh.insertAdjacentHTML('afterend',
    `<li>
        <input type="checkbox" id="first_task_high" name="to_do">
            <label for="first_task_high">
                <p>
                ${addNewTaskHigh}
                </p>
            </label>
                <button class="btn_exit" type="button"></button>
    </li>`
     );  
};

if(addNewTaskLow != '' ) {
    ELEMENTS.listLow.insertAdjacentHTML('afterend',
    `<li>
        <input type="checkbox" id="first_task_high" name="to_do">
            <label for="first_task_high">
                <p>
                ${addNewTaskLow}
                </p>
            </label>
                <button class="btn_exit" type="button"></button>
    </li>`
     );  
};

ELEMENTS.addTaskHigh.value = '';
ELEMENTS.addTaskLow.value = '';
};


