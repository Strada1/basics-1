const listOfStatus = {todo:'To Do', inProgress: 'In Progress', done:'Done'};
const list = {
    'create a new practice task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
}


function addTask (list, task, status = 'To Do'){
    list[task] = status;
}
function changeStatus (list, task, newStatus = 'Done'){
    list[task] = newStatus;
}
function deleteTask (list, task){
    delete list[task];
}
const space = '     ';

function showList (list) {
    for (let keyInListOfStatus in listOfStatus){
        console.log(listOfStatus[keyInListOfStatus]);
        for ( let key in list){
            if (list[key] === listOfStatus[keyInListOfStatus]){
                console.log( space + key);
            }
        }
    }
    console.log("________________");
}


addTask(list, "task1");
addTask(list, "task2", listOfStatus.inProgress );
showList(list);
deleteTask(list, "task2")
showList(list);
