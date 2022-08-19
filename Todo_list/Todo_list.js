
let toDo = {
    running: 'undone',
    work: 'undone',

};

function changeStatus(task) {
    toDo[task] = 'done';

};

function addTask(task) {
    toDo[task] = 'undone';
};


function deleteTask (task) {
    delete toDo[task];
};

function showList() {
    for (let key in toDo) {
        console.log (key +' - '+toDo[key]) ; 
    }

};


addTask('feed cat');
addTask('walking');
deleteTask ('work');
changeStatus ('running');
changeStatus('walking');
showList();

