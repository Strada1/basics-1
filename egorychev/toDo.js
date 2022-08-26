const STATUSES = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
}

const list = [
    { name: 'create a post', status: 'In progress', priority: 'low'  },
    { name: 'test', status: 'Done', priority: 'high'  }
]

function ChangeStatus(task, status) {
    let findTaskStatus = list.find(item => item.name === task);
    findTaskStatus.status = status;
}

function ChangePriority(task, priority) {
    let findTaskPriority = list.find(item => item.name === task);
    findTaskPriority.priority = priority;
}

function addTask(task, priority) {
    list.push({name: task, status: STATUSES.TO_DO, priority: priority,})
}

function deleteTask(task) {
    let indexTask = list.findIndex(item => item.name === task);
    list.splice(indexTask,1);
}

function findTasksOnStatus(status) {
    let count = 0;
    list.forEach((item) => {
        if(item.status === status) {
            console.log('\t' + item.name);
            count++;
        }
    });
    if (count === 0) {
        console.log(`\t -`)
    }

}

function showList() {
    console.log('To do:');
    findTasksOnStatus(STATUSES.TO_DO);
    console.log('In progress:');
    findTasksOnStatus(STATUSES.IN_PROGRESS);
    console.log('Done:');
    findTasksOnStatus(STATUSES.DONE);
}

ChangeStatus('create a post', 'Done');
ChangePriority('test', 'low');
addTask('play in basketball', 'low');
addTask('read a book', 'low');
addTask('listen to music', 'high');
// ChangeStatus('listen to music', 'In Progress');
deleteTask('read a book');

console.log(list);

showList();











// const list = {
//     "create a new practice task": "In Progress",
//     "make a bed": "Done",
//     "write a post": "To Do",
// }
//
// function changeStatus(task, status) {
//     for(let key in list) {
//     if(key === task) {
//         list[key] = status;
//         }
//     }
// }
//
// function addTask(task) {
//     list[task] = 'To Do';
// }
//
// function deleteTask(task) {
//     delete list[task];
// }
//
// function findTask(status) {
//     let count = 0;
//     for(let key in list) {
//         if(list[key] === status) {
//             console.log(`\t${key}`);
//             count++;
//         }
//
//     }
//     if (count === 0) {
//         console.log('\t-');
//     }
// }
//
// function showList() {
//     console.log('To Do:')
//     findTask('To Do')
//
//     console.log('In Progress:')
//     findTask('In Progress');
//
//     console.log('Done:');
//     findTask('Done');
// }
//
// changeStatus('make a bed', 'In Progress');
// addTask('read book');
// addTask('walk on the street');
// changeStatus('walk on the street', 'Done');
// deleteTask('create a new practice task');
//
// showList();




