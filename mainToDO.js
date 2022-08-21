const status = {
    STATUS_IN_PROGRESS: "In Progress",
    STATUS_DONE: "Done",
    STATUS_TO_DO: "To Do",
}
let list  = {
    'create a new practice task': status.STATUS_IN_PROGRESS,
    'make a bed': status.STATUS_DONE,
    'write a post': status.STATUS_TO_DO,
}

function addTask (name){
    return list[name];
}



function changeStatus (name, status = status.STATUS_TO_DO) {
    if ( status ) {
        list[name] = status;
    }
}

function deleteTask(name){
    delete list[name];
}


function checkStatus(status){
    let count = false;

    console.log ('\t'+status + ":");
    for ( let name in list ) {
        if ( list[name] === status ) {
            console.log (` \t\t"${name}"`);
            count = true;
        }
    }
    if ( !count ) {
        console.log ( '\t\t'+"-" );
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
addTask('VITALIK');
addTask('workk');
addTask('eat');

changeStatus("learJS", 'In Progress');
changeStatus("VITALIK", 'To Do');
changeStatus("eat", 'To Do');
changeStatus("learJS", 'Done');

showList();
console.log("---------------------------------------------------------")

changeStatus("VITALIK", 'Done');
deleteTask ( "VITALIK" );


showList();

console.log("---------------------------------------------------------")





