const form = document.querySelectorAll('.form');
const highPrioritiTaskList = document.querySelector('.todo__high-list');
const lowPrioritiTaskList = document.querySelector('.todo__low-list');
let formInputValue;
const taskTemplate = document.querySelector('#task').content.querySelector('.task-list__task-item');

const STATUS = {
    TO_DO: 'To Do',
    DONE: 'Done',
};

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high'
};

const list = [];


// Добавление задач

form.forEach(form => {
    form.addEventListener('submit', evt => {
        evt.preventDefault();
        if (evt.target.closest('.todo__high')) {
            formInputValue = evt.target.querySelector('.form__input').value;
            list.push({ name: formInputValue, status: STATUS.TO_DO, priority: PRIORITY.HIGH });
            evt.target.querySelector('.form__input').value = '';
        }

        if (evt.target.closest('.todo__low')) {
            formInputValue = evt.target.querySelector('.form__input').value;
            list.push({ name: formInputValue, status: STATUS.TO_DO, priority: PRIORITY.LOW });
            evt.target.querySelector('.form__input').value = '';
        }
        render();
    })
})



// Синхронирация массива задач с UI


function render() {
    const taskItem = document.querySelectorAll('.task-list__task-item');

    taskItem.forEach((task) => {
        task.remove()
    });

    const highPrioritiTask = list.filter(task => task.priority === PRIORITY.HIGH).reverse();
    const lowPrioritiTask = list.filter(task => task.priority === PRIORITY.LOW).reverse();

    for (let i = 0; i < highPrioritiTask.length; i++) {
        const taskElement = taskTemplate.cloneNode(true);
        taskElement.querySelector('.check__text').textContent = highPrioritiTask[i].name;

        if (highPrioritiTask[i].status === STATUS.DONE) {
            taskElement.querySelector('.check__input').checked = true;
            taskElement.classList.add('task-list__task-item--checked');
        }
        highPrioritiTaskList.appendChild(taskElement);
    }

    for (let i = 0; i < lowPrioritiTask.length; i++) {
        const taskElement = taskTemplate.cloneNode(true);
        taskElement.querySelector('.check__text').textContent = lowPrioritiTask[i].name;

        if (lowPrioritiTask[i].status === STATUS.DONE) {
            taskElement.querySelector('.check__input').checked = true;
            taskElement.classList.add('task-list__task-item--checked');
        }
        lowPrioritiTaskList.appendChild(taskElement);
    }

    // Удаление задач

    const deleteTaskButton = document.querySelectorAll('.task-list__btn');
    deleteTaskButton.forEach(button => {
        button.addEventListener('click', evt => {
            const taskText = evt.target.previousElementSibling.querySelector('.check__text').textContent;
            const taskindex = list.findIndex(task => task.name === taskText);
            list.splice(taskindex, 1);
            render();
        })
    })

    // Изменение статуса задач

    const checkInput = document.querySelectorAll('.check__input');
    checkInput.forEach(input => {
        input.addEventListener('click', evt => {
            if (evt.target.checked === true) {
                evt.target.closest('.task-list__task-item').classList.add('task-list__task-item--checked');
                const taskText = evt.target.closest('.task-list__task-item').querySelector('.check__text').textContent;
                const taskindex = list.findIndex(task => task.name === taskText);
                list[taskindex].status = STATUS.DONE;
            }
            if (evt.target.checked === false) {
                evt.target.closest('.task-list__task-item').classList.remove('task-list__task-item--checked');
                const taskText = evt.target.closest('.task-list__task-item').querySelector('.check__text').textContent;
                const taskindex = list.findIndex(task => task.name === taskText);
                list[taskindex].status = STATUS.TO_DO;
            }
        })
    })
}






