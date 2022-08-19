
let toDo = {
    running: 'in progress',
    work: 'done',

};

function changeStatus(task, newStatus) {
    toDo[task] = newStatus;

};

function addTask(task, status) {
    toDo[task] = status;
};


function deleteTask (task) {
    delete toDo[task];
};

function showList() {
    for (let key in toDo) {
        console.log (key +' - '+toDo[key]) ; 
    }

};


addTask('feed cat', 'done');
deleteTask ('work');
changeStatus ('running', 'done');
showList();

