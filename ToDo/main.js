const list = {
    'do a new practice task': 'in progress',
    'make a bed': 'done',
    'work': 'to do',
}

console.log (list);

let userDo = prompt('Выберите задачу', '');
let toDoStatus = prompt('Текущий статус задачи', '');


function showMess(userDo, toDoStatus) {
    if (toDoStatus == 'to do') {
    alert (userDo + ' - предстоящая задача');
} else if (toDoStatus == 'done') {
    alert (userDo + ' - задача выполнена');
} else if (toDoStatus == 'in progress') {
    alert (userDo + ' - в работе');
}
}

showMess(userDo, toDoStatus);


function changeStatus(userDo, toDoStatus) {
    if (userDo in list) {
    list[userDo] = [toDoStatus];
} 
}

changeStatus(userDo, toDoStatus);


function addTask (task) {
    if ((userDo !==  'do a new practice task') && (userDo !==  'make a bed') && (userDo !== 'work')) {
        list[task] = 'to do';
    }

}
addTask ('new task');


function deleteTask (userDo) {
 if (toDoStatus == 'del') {
    delete list[userDo];
 } 
}
deleteTask ();


function showList () {
    for (let key in list) {
        console.log (key, list[key]);
    }
}

showList();
