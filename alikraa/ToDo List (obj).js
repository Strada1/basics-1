const statuses = {
    to_do: 'To Do',
    in_progress: 'In Progress',
    done: 'Done'
}

const defaultStatus = statuses.to_do;

const list = {
    'read the book': 'To Do',
    'create a new practice task': 'In Progress',
    'have a workout': 'To Do',
    'write a post': 'To Do',
}

function changeStatus(task, status) {
    if(task === task) {
        list[task] = status;
    }
}

function addTask(task) {
    list[task] = defaultStatus;
}

function deleteTask(task) {
   delete list[task];
}

function showList(list) {
    let toDo = '';
    let inProgress = '';
    let done = '';

    for (let task in list) {
        if (list[task] === statuses.to_do) {
            toDo += `'${task}'\n\t`;
        } else if (list[task] === statuses.in_progress) {
            inProgress += `'${task}'\n\t`;
        } else {
            done += `'${task}'\n\t`;
        }
}

    if (toDo !== '') {
        console.log(`To Do:\n\t` + toDo)
    } else {
        console.log(`To Do:\n\t-`)
    }

    if(inProgress !== '') {
        console.log(`In Progress:\n\t` + inProgress) 
    } else {
        console.log(`In Progress:\n\t-`)
    }

    if(done !== '') {
        console.log(`Done:\n\t` + done) 
    } else {
        console.log(`Done:\n\t-`)
    }
    
} 

changeStatus('create a new practice task', statuses.done)
changeStatus('read the book', statuses.done)
changeStatus('have a workout', statuses.done)

addTask('have a walk')

deleteTask('write a post')

showList(list)