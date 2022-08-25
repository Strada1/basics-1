const status_toDo = {
    IN_PROGRESS : "In Progress",
    DONE : "Done",
    TODO : "To Do",
};

const list = {
    "create a new practice task" : status_toDo.IN_PROGRESS,
    "make a bed" : status_toDo.DONE,
    "write a post" : status_toDo.TODO,
};

function changeStatus(taskName, status) {
    if (taskName in list) {
        list[taskName] = status;
    } else {
        console.log ("Такой задачи не существует");
    }
}

function addTask(taskName) {
    if (taskName in list)  {
        console.log ("Такая задача уже существует");
    } else {
        let defaultStatus = status_toDo.TODO;
        list[taskName] = defaultStatus;
    }
}

function deleteTask(taskName) {
    if (taskName in list) {
    delete list[taskName];
    } else {
        console.log ("Вы пытаетесь удалить несуществующую задачу");
    }
}

function showList() {
    let inProgress = "In Progress: \n";
    let toDo = "To Do: \n";
    let done = "Done: \n";

    for ( let key in list) {
        if (list[key] === status_toDo.IN_PROGRESS) {
            inProgress = inProgress + "   " + key + "\n" ;
            console.log(inProgress);

        } else if (list[key] === status_toDo.TODO) {
            toDo = toDo + "   " + key + "\n" ;
            console.log(toDo);

        } else {
            done = done + "   " + key + "\n" ;
            console.log(done);
        }
    }
}

showList();
changeStatus("create a new practice task", status_toDo.DONE);
addTask("register a domain");
deleteTask("buy an elephant");
changeStatus("relax", status_toDo.TODO);
addTask("make a bed");
showList();
changeStatus("register a domain", status_toDo.IN_PROGRESS);
showList();
deleteTask("create a new practice task");
showList();

