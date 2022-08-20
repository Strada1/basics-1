const todoList = {};
const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
};
function changeStatus (nameTask, status) {
    switch (status) {
        case STATUS.TO_DO:
            todoList[nameTask] = STATUS.TO_DO;
            break;
        case STATUS.IN_PROGRESS:
            todoList[nameTask] = STATUS.IN_PROGRESS;
            break;
        case STATUS.DONE:
            todoList[nameTask] = STATUS.DONE;
            break;
    }
}
function addTask (nameTask) {
    todoList[nameTask] = STATUS.DONE;
}
function deleteTask (nameTask) {
    delete todoList[nameTask]; 
}
function showList () {
    function show(status) {
        console.log(status + ':');
        for (key in todoList) {
            if (todoList[key] == status) {
                console.log('    ' + `"${key}"`);
            }
        }
    }
    show(STATUS.TO_DO);
    show(STATUS.IN_PROGRESS);         
    show(STATUS.DONE);
}

addTask('working in the garden');
addTask('code practice');
addTask('playing computer games');
changeStatus('working in the garden', STATUS.DONE);
changeStatus('code practice', STATUS.IN_PROGRESS);
changeStatus('playing computer games', STATUS.IN_PROGRESS);
deleteTask('working in the garden');
showList();
