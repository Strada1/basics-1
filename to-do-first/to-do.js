const STATUS = {
    DONE: 'Done',
    IN_PROGRESS: 'In progress',
    TO_DO: 'To do',
}

let list = {
    'calculator': STATUS.DONE,
    'object method': STATUS.DONE,
    'make to do': STATUS.IN_PROGRESS,
}

function showList() {

    let showToDo = '';
    let showDone = '';
    let showInProgress = '';

    for (let Key in list) {
        if (list[Key] === STATUS.TO_DO) {showToDo += `  \"${Key}\"\n`}
        if (list[Key] === STATUS.DONE) {showDone += `  \"${Key}\"\n`}
        if (list[Key] === STATUS.IN_PROGRESS) {showInProgress += `  \"${Key}\"\n`}
    }

    if (showToDo === ''){showToDo = '  -'}
    if (showInProgress === ''){showInProgress = '  -'}
    if (showDone === ''){showDone = '  -'}


    console.log(`${STATUS.TO_DO}:\n${showToDo}\n${STATUS.IN_PROGRESS}:\n${showInProgress}\n${STATUS.DONE}:\n${showDone}`);

}

showList();


function addTask(task){
    list[task] = STATUS.TO_DO;
}

addTask('new task');
showList();

function deleteTask(task){
    if(task in list){
        delete list[task];
    }
}

deleteTask('calculator');
showList();

function changeStatus(task, status) {
    if (task in list){
        list[task] = status;
    }
}

changeStatus('make to do', STATUS.DONE);
showList();
