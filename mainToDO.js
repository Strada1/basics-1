const STATUS = {
    STATUS_IN_PROGRESS: "In Progress",
    STATUS_DONE: "Done",
    STATUS_TO_DO: "To Do",
}

const PRIORITY = {
    PRIORITY_LOW: "low",
    PRIORITY_HIGH: "high",
}

let list = [ { name: 'create a post', status: STATUS.STATUS_IN_PROGRESS, priority: PRIORITY.PRIORITY_HIGH  },
    { name: 'test', status: STATUS.STATUS_TO_DO, priority: PRIORITY.PRIORITY_LOW  } ]


function myFindIndex (nameTask){
    let result = list.findIndex(item => nameTask === item.name);
    return result;
}

function addTask (nameTask , statuses = STATUS.STATUS_TO_DO, priorities = PRIORITY.PRIORITY_LOW){

    let result = myFindIndex(nameTask);
    if ( result === -1 ) {
        return  ( list.push({name:nameTask, status: statuses, priority: priorities}) );
    } else {
        console.log( `Вы не можете добавить ${nameTask} , так как не существует` );
    }

}

function deleteTask(nameTask){

    let result = myFindIndex(nameTask);
    if ( result === -1 ) {
        console.log( `Вы не можете удалить ${nameTask} , так как не существует` );
    } else {
        return list.splice( result, 1 );
    }

}


function changeStatus(nameTask, newStatus) {

    let result = myFindIndex(nameTask);
    if ( result === -1 ) {
        console.log( `Вы не можете поменять статус ${newStatus} , так как не существует` );
    } else {
        return (list[result].status = newStatus);
    }

}

function changePriority(nameTask, newPriority) {

    let result = myFindIndex(nameTask);
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


function showList2(status) {
    let obj = list.filter(function (item){
        if (item.status === status) {
            return true;
        }
    } );

            console.log(obj);
    // let obj2= list.filter(item => item.status === status);
    //      console.log(obj2);

}

function showList() {

    console.log('ToDO:')
    showIndividual(STATUS.STATUS_TO_DO);
    showIndividual(STATUS.STATUS_IN_PROGRESS);
    showIndividual(STATUS.STATUS_DONE);

}

addTask("JS",STATUS.STATUS_TO_DO,PRIORITY.PRIORITY_HIGH );
addTask("VITALIK",STATUS.STATUS_TO_DO,PRIORITY.PRIORITY_HIGH );
addTask("JS",STATUS.STATUS_TO_DO,PRIORITY.PRIORITY_HIGH );
addTask("VITALIK",STATUS.STATUS_TO_DO,PRIORITY.PRIORITY_HIGH );

changeStatus ("JS" , STATUS.STATUS_TO_DO);
changeStatus ("JS" , STATUS.STATUS_DONE);

changePriority ("test", PRIORITY.PRIORITY_HIGH);
changePriority ("test", PRIORITY.PRIORITY_LOW);

deleteTask('JS');

showList();

