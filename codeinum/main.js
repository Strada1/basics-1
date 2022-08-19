const todoList = {};

function changeStatus (nameTask, status) {
    switch (status) {
        case 'To Do':
            todoList[nameTask] = 'To Do';
            break;
        case 'In Progress':
            todoList[nameTask] = 'In Progress';
            break;
        case 'Done':
            todoList[nameTask] = 'Done';
            break;
    }
}
function addTask (nameTask) {
    todoList[nameTask] = 'To Do';
}
function deleteTask (nameTask) {
    delete todoList[nameTask]; 
}
function showList () {
    console.log('\nToDo: ');
    for (key in todoList) {
        if (todoList[key] == 'To Do') {
            console.log('- ' + `${key}`);
        }
    }
    console.log('\nIn Progress: ');
    for (key in todoList) {
        if (todoList[key] == 'In Progress') {
             console.log('- ' + `${key}`);
        }
    }
    console.log('\nDone: ');
    for (key in todoList) {
        if (todoList[key] == 'Done') {
            console.log('- ' + `${key}`);
        }
    }
}

addTask('working in the garden');
addTask('code practice');
addTask('playing computer games');
changeStatus('working in the garden', 'Done');
changeStatus('code practice', 'In Progress');
changeStatus('playing computer games', 'In Progress');
// deleteTask('working in the garden');
showList();
