const status = {
    STATUS_IN_PROGRESS: "In Progress",
    STATUS_DONE: "Done",
    STATUS_TO_DO: "To Do",
}

const priority = {
    PRIORITY_LOW: "low",
    PRIORITY_HIGH: "high",
}

let list = [ { name: 'create a post', status: status.STATUS_IN_PROGRESS, priority: priority.PRIORITY_HIGH  },
             { name: 'test', status: status.STATUS_TO_DO, priority: priority.PRIORITY_LOW  } ]


function addTask (nameTask , priorities = priority.PRIORITY_LOW){
    list.push({name:nameTask, status: status.STATUS_TO_DO, priority: priorities});
}

function deleteTask(nameTask){

    let result = list.findIndex(item => nameTask === item.name);
    if ( result === -1 ) {
        console.log( `Вы не можете удалить ${nameTask} , так как не существует` );
    } else {
        return list.splice( result, 1 );
    }

}


function changeStatus(nameTask, newStatus) {

    let result = list.findIndex(item => nameTask === item.name);
    if ( result === -1 ) {
        console.log( `Вы не можете поменять статус ${newStatus} , так как не существует` );
    } else {
        return (list[result].status = newStatus);
    }

}

function changePriority(nameTask, newPriority) {

    let result = list.findIndex(item => nameTask === item.name);
    if ( result === -1 ) {
        console.log( `Вы не можете поменять статус ${newPriority} , так как не существует` );
    } else {
        return (list[result].priority = newPriority);
    }

}


function showIndividual (status){
    let count = false;
    console.log (`\t ${status}:`);
    let obj = list.filter(item => item.status === status);
    //console.log(obj);
    for (let task of obj){
        if(obj[task] === status.name) {
          console.log(`\t\t "${task.name}" \n\t\t\t priority: "${task.priority}"`);
          count = true;
        }
    } if (!count) {
        console.log (`\t\t-`);
     }
    count = false;
}


function showList() {

    console.log('ToDO:')
    showIndividual(status.STATUS_TO_DO);
    showIndividual(status.STATUS_IN_PROGRESS);
    showIndividual(status.STATUS_DONE);

}
addTask("JS",priority.PRIORITY_HIGH );
addTask("VITALIK",priority.PRIORITY_HIGH );
changeStatus ("JS" , status.STATUS_TO_DO);

changeStatus ("JS" , status.STATUS_DONE);
changePriority ("test", priority.PRIORITY_HIGH);
changePriority ("test", priority.PRIORITY_LOW);
deleteTask('JS');
showList();


