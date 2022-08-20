const taskList = {};

function addTask(task){
    taskList[task] = 'To Do';
}

function changeStatus(task, status){
    if(taskList[task]){
        taskList[task] = status;
    } else{
        console.log('Ошибка при смене статуса, задача не существует!');
    }
}

function showList(){
    let active = 'To Do: \n', progress = 'In progress: \n', done = 'Done: \n';

    for(key in taskList){
        if (taskList[key] == 'To Do'){
            active += key + "\n";
        } else if(taskList[key] == 'In progress'){
            progress += key + "\n";
        } else{
            done += key + "\n";
        }
    }

    return (active + '\n' + progress + '\n' + done);
}

function deleteTask(task){
    if(!taskList[task]){
        console.log('Ошибка при удалении, задача ' + task + ' отсутствует в списке!');
    } else {
        delete taskList[task];
    }
}

addTask('Купить молоко');
addTask('Подготовиться к учебе');
addTask('Прочитать книгу');
addTask('Погулять');

changeStatus('Купить молоко', 'Done');
changeStatus('Прочитать книгу', 'In progress');

console.log(showList());