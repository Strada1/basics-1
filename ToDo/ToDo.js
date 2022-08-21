let todoList = {};
const STATUS = {
    TO_DO: 'TO_DO',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
};

function addTask(taskName){
    if(taskName in todoList){
        console.log('Такая задача уже существует. Добавление отклонено.');
        return;
    }
    else if(taskName == false || taskName == undefined){
        console.log('Пустая задача. Добавление отклонено.');
        return;
    }
    else{
    todoList[taskName] = STATUS.TO_DO;
    console.log(`Задача "${taskName}" добалена`);
    }
}

function showList(){
    
    function sortStatus(status){
        for(let key in todoList){
            if(status == todoList[key]){
                console.log('   ' + key);
            }
        }
    }
    
    console.log('--------------------------------------------------');
    console.log('To Do:')
    sortStatus(STATUS.TO_DO);
    console.log('In progress:');
    sortStatus(STATUS.IN_PROGRESS);
    console.log('Done:');
    sortStatus(STATUS.DONE);
    console.log('--------------------------------------------------');
}

function changeStatus(taskName, taskStatus){
    if(taskName == false || taskStatus == false || taskName == undefined || taskStatus == undefined){
        console.log('Неверное значение задачи или статуса. Изменение отклонено.');
        return;
    }
    if(taskStatus in STATUS){
        if(taskName in todoList){
            todoList[taskName] = taskStatus;
            console.log(`Статус задачи "${taskName}" заменён на "${taskStatus}"`);
        }
        else{
            console.log('Такой задачи не существует.');
            return;
        }
    }
    else{
        console.log('Неверное значение статуса. Изменение статуса отклонено.');
        return;
    }
}

function deleteTask(taskName){
    if(taskName in todoList){
        delete todoList[taskName];
        console.log(`Задача "${taskName}" удалена`);
    }
    else{
        console.log('Такого задания не существует');
    }
}


addTask('Помыть посуду');
addTask('Помыть пол');
addTask('Купить хлеб');
addTask('Заплатить за квартиру');
addTask('Покормить кота');
addTask('Постирать бельё');
showList();

changeStatus('Купить хлеб', STATUS.IN_PROGRESS);
changeStatus('Заплатить за квартиру', STATUS.IN_PROGRESS);
changeStatus('Покормить кота', STATUS.DONE);
changeStatus('Постирать бельё', STATUS.DONE);
deleteTask('Покормить кота');
showList();
