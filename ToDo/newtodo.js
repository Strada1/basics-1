const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
};

let list = {
    "learn git": STATUS.IN_PROGRESS,
    "write a post": STATUS.TO_DO,
    "prepare tea": STATUS.TO_DO,
    "create a new test task": STATUS.IN_PROGRESS,
    "make a bed": STATUS.TO_DO,
    "play games": STATUS.DONE,
};

function changeStatus(task, status) {
    list[task] = status;
};

function addTask(task = "undefined new task") {
    list[task] = STATUS.TO_DO;
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    let todoStr = "";
    let inProgStr = "";
    let doneStr = "";

    for (let key in list) {
        if (list[key] === STATUS.TO_DO) {
            todoStr += key + "\n";
        }  if (todoStr == "") {
            todoStr = "-" + "\n";
        }
    }

    for (let key in list) {
        if (list[key] === STATUS.IN_PROGRESS) {
            inProgStr += key + "\n";
        } if (inProgStr === "") {
            inProgStr = "-" + "\n";
        }
    }

    for (let key in list) {
        if (list[key] === STATUS.DONE) {
            doneStr = key + "\n";
        } if (doneStr === "") {
            doneStr = "-" + "\n"
        };
    }


    console.log("Todo:" + "\n" + todoStr + "\n" + "In Progress:" + "\n" + inProgStr + "\n" +  "Done:" + "\n" + doneStr);
}


addTask("Pet a cat");
changeStatus("make a bed", STATUS.IN_PROGRESS);
deleteTask("play games");
showList();
