const list = {
    "do homework": "In progress",
    "do the job": "Done",
    "feed the cats": "Done",
    "call the boss": "To Do",
}

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
    }

}

function addTask(task) {
    list[task] = "In progress";
}

function deleteTask(task) {
    if (task in list) {
        delete list[task];
    }

}

function showList() {
    for (let key in list) {
        console.log(key + ":" + list[key]);
    }
}

changeStatus("call the boss", "Done");
addTask("relax");
deleteTask("feed the cats");
showList();