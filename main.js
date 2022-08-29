const repositoryToDo = {
  test:'2'  
};

function changeStatus(task, statusTask) {
    if ( statusTask == 'done' ) {  
        repositoryToDo[task] += ' done'
    } else {
        console.log("Введите значение done, если задача выполнена");
    }
}

function addTask(numberTask, description) {
    (repositoryToDo["task" + numberTask]) = description;
}

function deleteTask(task) {
    task = delete repositoryToDo[task];
}

function showList() {
    for (let key in repositoryToDo) {
        console.log( key );
        console.log( repositoryToDo[key] );
    }
}


addTask(2, 'Сделать яичницу');
changeStatus("task2", " done")
showList();

