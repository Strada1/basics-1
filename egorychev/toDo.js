const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    for(let key in list) {
    if(key === task) {
        list[key] = status;
        }
    }
}

function addTask(task) {
    list[task] = 'To Do';
}

function deleteTask(task) {
    delete list[task];
}

function findTask(status) {
    let count = 0;
    for(let key in list) {
        if(list[key] === status) {
            console.log(`\t${key}`);
            count++;
        }

    }
    if (count === 0) {
        console.log('\t-');
    }
}

function showList() {
    console.log('To Do:')
    findTask('To Do')

    console.log('In Progress:')
    findTask('In Progress');

    console.log('Done:');
    findTask('Done');
}

changeStatus('make a bed', 'In Progress');
addTask('read book');
addTask('walk on the street');
changeStatus('walk on the street', 'Done');
deleteTask('create a new practice task');

showList();




