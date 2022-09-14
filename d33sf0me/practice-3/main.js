let form_high_submit = document.getElementById('form_high_submit');
let form_low_submit = document.getElementById('form_low_submit');
let add_high_task = document.getElementById('add_high_task');

form_high_submit.addEventListener('submit', (event)=> {
    addTask(add_high_task, form_high_submit);
    event.preventDefault();
});

form_low_submit.addEventListener('submit', (event)=> {
    addTask(add_low_task, form_low_submit);
    event.preventDefault();
});

function addTask(newTask, form) {
    if(newTask.value.trim() != '') {
        form.insertAdjacentHTML('afterend',
        `<li>
            <input type="checkbox" id="task" name="to_do">
            <label for="task">
                <p>${newTask.value}
                </p>
            </label>
            <button class="btn_exit" type="button"></button>
        </li>`);
    };

    newTask.value = '';
};