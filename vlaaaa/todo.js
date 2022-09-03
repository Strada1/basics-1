const list = {
    "make homework": "In progress",
    "work day": "Done",
    "take a shower": "To Do"
};

function changeStatus(task, status) {
    list[task] = status
};

function addTask(task) {
    list[task] = "To Do"
};

function deleteTask(task) {
    delete list[task];
};

function showList () {
    let toDo = "To Do";
    let inProgress = "In Progress";
    let Done = "Done";

    for (let key in list) {
        const status = list[key];
        if (status == toDo) {
            console.log("toDo: \n" + key + "\n");
        } else if (status == inProgress) {
            console.log("inProgress: \n" + key + "\n");
        } else if (status == Done) {
            console.log("Done: \n" + key + "\n");
        }
    }
};

changeStatus("make homework", "Done");
addTask("make dinner");
deleteTask("make dinner");
addTask("make a breakfast");
showList();