const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";
const STATUS_TO_DO = "To Do";

let list  = {
    'create a new practice task': STATUS_IN_PROGRESS,
    'make a bed': STATUS_DONE,
    'write a post': STATUS_TO_DO,
}

function addTask (name){
    for (let key in list) {
        list[name] = list[key];
    }
    return list[name];
}



function changeStatus (name, status = STATUS_TO_DO) {
    const isValidStatus = (status === STATUS_IN_PROGRESS || status === STATUS_DONE || status === STATUS_TO_DO )
    if ( isValidStatus ) {
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
        if (list[name] === status) {
            console.log (` \t\t"${name}"`);
            count = true;
        }
    }
    if (!count) {
        console.log ('\t\t'+"-");
    }
    count = false;
}

function showList(){
    console.log('ToDO:')
    checkStatus (STATUS_TO_DO);
    checkStatus (STATUS_IN_PROGRESS);
    checkStatus (STATUS_DONE);
}



addTask('learJS');
addTask('VITALIK');
addTask('workk');
addTask('eat');

changeStatus("learJS", 'In Progress');
changeStatus("VITALIK", 'To Do');
changeStatus("eat", 'To Do');
changeStatus("learJS", 'Done');

showList();
console.log("---------------------------------------------------------")



deleteTask('VITALIK');
showList();
console.log("---------------------------------------------------------")



