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
    function show(status) {
        for (key in todoList) {
            if (todoList[key] == status) {
                console.log('    ' + `"${key}"`);
            }
        }
    }
    console.log('\nToDo: ');
    show('To Do')
    console.log('\nIn Progress: ');
    show('In Progress')         
    console.log('\nDone: ');
    show('Done')
}
show()
addTask('working in the garden');
addTask('code practice');
addTask('playing computer games');
changeStatus('working in the garden', 'Done');
changeStatus('code practice', 'In Progress');
changeStatus('playing computer games', 'In Progress');
deleteTask('working in the garden');
showList();
