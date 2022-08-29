let taskLists = [
    {task:'Wash Dishes', status: "To Do"},
    {task:"Do homework", status: "In Progress"},
    {task:"Make new practice task", status: "Done"},
]
function addTask(newTask, newStatus = "To Do") {
    if (checkForMatches(newTask) == -1) {
        taskLists.push({task: newTask, status: newStatus});
    } else {
        return console.log("This task already exists");
    }
}

function showList() {
    console.log("To Do:");
    taskLists.forEach(item => {
        if (item.status == "To Do") {
        console.log(`   - ${item.task}`); }
    });
    console.log("In Progress:");
    taskLists.forEach(item => {
        if (item.status == "In Progress") {
        console.log(`   - ${item.task}`); }
    });
    console.log("Done:");
    taskLists.forEach(item => {
        if (item.status == "Done") {
        console.log(`   - ${item.task}`); }
    });
}

function deleteTask(deleteTask) {
    if (checkForMatches(deleteTask) != -1) {
        return taskLists.splice(checkForMatches(deleteTask), 1);
    }
}

function checkForMatches(task) {
    return taskLists.findIndex(item =>  item.task == task);
}
function changeStatus(taskName, newStatus = "Done") {
    if (checkForMatches(taskName) != -1) {
        taskLists[checkForMatches(taskName)].status = newStatus;
    } else {
        return console.log("Task name is not corrected, please, enter the task name again");
    }
}
