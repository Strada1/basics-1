const STATUS = {
    TO_DO: 'To Do',
    DONE: 'Done',
    IN_PROGRESS: 'In Progress'
};

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high'
};

const list = [{ name: 'Поспать', status: STATUS.DONE, priority: 'low' },
{ name: 'Поесть', status: STATUS.DONE, priority: 'high' },
{ name: 'Погулять', status: STATUS.IN_PROGRESS, priority: 'high' },
{ name: 'Поиграть', status: STATUS.TO_DO, priority: 'high' },
{ name: 'Посмотреть телевизор', status: STATUS.TO_DO, priority: 'high' }];


function changeStatus(name, status) {
    if (list.some(el => el.name === name)) {
        const taskindex = list.findIndex(el => el.name === name);
        if (Object.values(STATUS).includes(status)) {
            list[taskindex].status = status;
        } else {
            console.log('Этого статуса нет в списке! \n\n Доступные статусы:\n To Do\n In Progress\n Done');
        }
    } else {
        console.log('Этой задачи нет в списке задач');
    }

}


// changeStatus('Погулять', 'To Do');



function changePriority(name, priority) {
    if (list.some(el => el.name === name)) {
        const taskindex = list.findIndex(el => el.name === name);
        if (Object.values(PRIORITY).includes(priority)) {
            list[taskindex].priority = priority;
        } else {
            console.log('Этого приоритета нет в списке! \n\n Доступные приоритеты:\n high\n low');
        }
    } else {
        console.log('Этой задачи нет в списке задач');
    }

}


// changePriority('Погулять', 'To Do');


function addTask(task) {
    if (task) {
        list.push({ name: task, status: STATUS.TO_DO, priority: PRIORITY.LOW })
    } else {
        console.log('Введите название задачи');
    }
}


// addTask('Попить воды');


function deleteTask(task) {
    if (list.some(el => el.name === task)) {
        const taskindex = list.findIndex(el => el.name === task);
        list.splice(taskindex, 1);
    } else {
        console.log('Этой задачи нет в списке задач');
    }
}


// deleteTask('Погулять');


function showList() {
    let toDo = 'To Do:\n';
    let inProgress = 'In Progress:\n';
    let done = 'Done:\n';

    list.forEach(el => {
        const template = `\t Задача: ${el.name}; Приоритет: ${el.priority} \n`;
        if (el.status === STATUS.TO_DO) {
            toDo += template;
        }
        if (el.status === STATUS.IN_PROGRESS) {
            inProgress += template;
        }
        if (el.status === STATUS.DONE) {
            done += template;
        }
    })
    return (`${toDo} \n${inProgress} \n${done}`)
}

console.log(showList());