const status = {
    STATUS_IN_PROGRESS: "In Progress",
    STATUS_DONE: "Done",
    STATUS_TO_DO: "To Do",
}

let list  = {

}

function addTask (name){
    if ( name in list ){
        console.log(`Есть задание с таким названием ${name}`)
    }else {
        return list[name] = status.STATUS_TO_DO;
    }
}

function changeStatus (name, status = status.STATUS_TO_DO) {
    if ( status ) {
        list[name] = status;
    }
}

function deleteTask(name){
    if (name in list){
        delete list[name];
    }else {
        console.log(`Вы не можите удалить ${name} , так как не существует`)
    }
}

function checkStatus(status){
    let count = false;

    console.log ( ` \t ${status} : ` );
    for ( let name in list ) {
        if ( list[name] === status ) {
            console.log (` \t \t ${name} `);
            count = true;
        }
    }
    if ( !count ) {
        console.log ( ` \t \t - ` );
    }
    count = false;
}

function showList(){
    console.log('ToDO:')
    checkStatus (status.STATUS_TO_DO);
    checkStatus (status.STATUS_IN_PROGRESS);
    checkStatus (status.STATUS_DONE);
}


addTask('learnJS');
addTask('eat');

changeStatus("learnJS", 'In Progress');
deleteTask('eat')
showList();

console.log("---------------------------------------------------------")





