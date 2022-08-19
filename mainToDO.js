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

function showList(){
    console.log('ToDO:')
    for (let key in list) {
        console.log('\t'+`${list[key]}: \n \t\t ${key}` );
    }
}

addTask('VITALIK');
changeStatus("VITALIK", 'In Progress');
showList();
console.log("---------------------------------------------------------")


addTask('learJS');
addTask('VITALIK');
changeStatus("learJS", 'In Progress');
changeStatus("VITALIK", 'To Do');
showList();
console.log("---------------------------------------------------------")



deleteTask('VITALIK');
showList();
console.log("---------------------------------------------------------")



