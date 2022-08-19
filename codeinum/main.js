let todoList = new Object();

function changeStatus (nameTask) {
    todoList[nameTask] = !this[nameTask];
}
function addTask (nameTask) {
    todoList[nameTask] = false;
}
function deleteTask (nameTask) {
    delete todoList[nameTask]; 
}
function showList () {
    console.log('My ToDo ');
    for (key in todoList) {
        console.log(`${key} - ` + `${todoList[key]}`);
    }
}

addTask('working on the garden')
console.log(todoList)
addTask('code practice')
console.log(todoList)
addTask('playing computer games')
console.log(todoList)
deleteTask('code practice')
changeStatus('working on the garden')
console.log(todoList)
showList()