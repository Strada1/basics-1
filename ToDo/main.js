const TODO = 'ToDo';
const INPROGRESS = 'In Progers';
const DONE = 'Done';


const list = {
    'make ToDo' : TODO,
    'go for a walk' : DONE,
    'read a book' : INPROGRESS,
    'relax': TODO,
};

function changeStatus (task, status = INPROGRESS) {
    list[task] = status;
};

function addTask (task, status = INPROGRESS) {
    list[task] = status;
};

function deleteTask (task){
    delete list[task];
};

function showList(){
    console.log('ToDo:');
    for ( let key in list) {
        if ( list[key] == TODO) {
            console.log( ` -${key}` );
        };
    }
    console.log('In Progerss:');
    for ( let key in list) {
        if ( list[key] == INPROGRESS) {
            console.log( ` -${key}` );
        };
    }
    console.log('Done:');
    for ( let key in list) {
        if ( list[key] == DONE) {
            console.log( ` -${key}` );
        };
    }
};

addTask('make a bad', DONE);
deleteTask('go for a walk');
changeStatus('make ToDo', DONE);
showList(list);


