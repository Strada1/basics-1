import { list_high, list_low, changeStatus, deleteTask } from '../main.js'

const STATUS = {
    task_done: 'task_done',
    task_undone: 'task_undone',
};

const PRIORITY = {
    task_HIGH: 'task_HIGH',
    task_LOW: 'task_LOW'
};

const allTask = [ 
    { name: 'Вот вам и супер интересная тема.', status: STATUS.task_undone, priority: PRIORITY.task_HIGH },
    { name: 'Сверстать этот TODO list', status: STATUS.task_undone, priority: PRIORITY.task_HIGH },
    { name: 'Поработать', status: STATUS.task_done, priority: PRIORITY.task_HIGH },
    { name: 'Позвонить в типографию', status: STATUS.task_undone, priority: PRIORITY.task_LOW },
    { name: 'Заказать кроссы', status: STATUS.task_undone, priority: PRIORITY.task_LOW },
    { name: 'Погладить свою кошечку', status: STATUS.task_done, priority: PRIORITY.task_LOW },
];

function showList() {
    try {
        let deleteTasks = document.querySelectorAll('.task_undone');
        deleteTasks.forEach((task) => {
            task.remove();
        });
    
        for (let task of allTask) {
            if (task.priority === PRIORITY.task_HIGH) {
                list_high.insertAdjacentHTML('beforeend', 
            `<li class="task_undone">
            <label>
            <input type="checkbox" class="checkbox" ${(task.status == STATUS.task_done) ? 'checked' : ''}>
                 <p class="task_name" name="task">
                 ${task.name}
                 </p>
            </label>
            <button class="btn_delete" type="button"></button>
            </li>`
                )
            };
        };
    
        for (let task of allTask) {
            if (task.priority === PRIORITY.task_LOW) {
                list_low.insertAdjacentHTML('beforeend', 
            `<li class="task_undone">
            <label>
            <input type="checkbox" class="checkbox" ${(task.status == STATUS.task_done) ? 'checked' : ''}>
                 <p class="task_name">
                 ${task.name}
                 </p>
            </label>
            <button class="btn_delete" type="button"></button>
            </li>`
                )
            };
        };
    
        for (let task of document.querySelectorAll('input[type=checkbox]')) {
            if (task.checked) {
                let li = task.parentNode.parentNode;
                li.classList.add('status_done');
            }
        }
    } catch(err) {
        alert(`Ошибка: ${err.message}`);
    }
    deleteTask()
    changeStatus();
};


export { showList, allTask, PRIORITY, STATUS};