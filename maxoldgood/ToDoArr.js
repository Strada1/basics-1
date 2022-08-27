const list = [];

let toDo="Сделать:";
let inProgress="In Progress:";
let done="Done:";

let lowPriority = "low";
let highPriority = "high";
let mediumPriority = "medium";

function addTask (newTask, taskStatus, taskPriority) {
    let addedTask = {}
    addedTask.name = newTask;
    addedTask.status = taskStatus;
    addedTask.priority = taskPriority;
    list.push(addedTask);
}
addTask("Сделать задание", toDo, highPriority);
console.log(list);

