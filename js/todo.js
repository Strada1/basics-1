let taskList = [];

const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
};

function addTask(task, status = 'To Do', priority = 'Низкий'){
    let newTask = {
        name: task,
        status: status,
        priority: priority
    };
    taskList.push(newTask);
}

function changeStatus(task, status){
    let newStatus = taskList.find(item => (item.name == task) ? item.status = status: false);
    if(!newStatus){
        console.log(`Ошибка при смене статуса! Задача "${task}" отсутствует в списке`);
    }
}

function changePriority(task, priority){
    let newPriority = taskList.find(item => (item.name == task) ? item.priority = priority: false);
    if(!newPriority){
        console.log(`Ошибка при смене приоритета! Задача "${task}" отсутствует в списке`);
    }
}

function showList(){
    let active = 'To Do: \n', progress = 'In Progress: \n', done = 'Done: \n';

    taskList.forEach((item) => {
        let sample = `"${item.name}" - Приоритет: ${item.priority} \n`;

        if(item.status == STATUS.TO_DO){
            active += sample;
        }

        if(item.status == STATUS.IN_PROGRESS){
            progress += sample;
        }

        if(item.status == STATUS.DONE){
            done += sample;
        }
    });

    return (active + '\n' + progress + '\n' + done);
}

function deleteTask(task){
    let del = taskList.find((item,index) => (item.name == task) ? taskList.splice(index,1): false);
    if(!del){
        console.log(`Ошибка при удалении! Задача "${task}" отсутствует в списке!`);
    }
}

addTask('Купить молоко');
addTask('Прочитать книгу');
addTask('Погулять');

addTask('Сделать медитацию','To Do','Высокий');

changeStatus('Погулять', 'In Progress');
changeStatus('Купить молоко', 'Done');
deleteTask('Сделать медитацию');

console.log(showList());