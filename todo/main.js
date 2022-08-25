const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
}

const list = {
    "Write a script": STATUS.IN_PROGRESS,
	"Do room cleaning": STATUS.DONE,
	"Film a video": STATUS.TO_DO,
};

function changeStatus(task, status) {
    if ((task in list) && typeof status == "string") {
        list[task] = status;
        console.log("changeStatus is DONE");
    } else console.log("changeStatus is NOT DONE");
};

function addTask(task, status) {
    if (typeof task == "string" && typeof status == "string") {
        list[task] = status;
        console.log("addTask is DONE");
    } else console.log("addTask is NOT DONE");
};

function deleteTask(task) {
    if (task in list) {
        delete list[task];
        console.log("deleteTask is DONE");
    } else console.log("deleteTask is NOT DONE");
};

function showList() {
    console.log("\nTASK LIST:");

    console.log("Todo:")
    for (let task in list) {
        if (list[task] === STATUS.TO_DO) {
            console.log(`\t${task}`);
        }
    }

    console.log("In Progress:")
    for (let task in list) {
        if (list[task] === STATUS.IN_PROGRESS) {
            console.log(`\t${task}`);
        }
    }

    console.log("Done:")
    for (let task in list) {
        if (list[task] === STATUS.DONE) {
            console.log(`\t${task}`);
        }
    }

    console.log("\n");
};

showList();

addTask("Workout", "To Do");

changeStatus("Workout", "In Progress");

deleteTask("Film a video");

showList();