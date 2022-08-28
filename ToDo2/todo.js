
const STATUSES = {
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  TO_DO: "To Do",
};

const list = [
  { name: "write a post", status: STATUSES.TO_DO, priority: "high" },
  { name: "make a bed", status: STATUSES.IN_PROGRESS, priority: "low" },
  { name: "new task", status: STATUSES.DONE, priority: "high" },
];

console.log(list);


// добавление задачи========================================================

function addTask(newTask, newPriority) {
  list.push({
    name: newTask,
    status: STATUSES.TO_DO,
    priority: newPriority,
  });
}
addTask("run", "low");

console.log(list);

// удаление задачи=================================================================================

function deleteTask(task) {
  let a = list.findIndex((item) => {
    if (item.name == task) return true;
  });
  list.splice(a, 1);
}

deleteTask("make a bed");

console.log(list);

// изменение статуса задачи====================================================================

function changeTask(task,newStatus) {

    let b = list.findIndex((item) => {
        if (item.name == task) return true;
    });

    list[b].status = newStatus;
    
}

changeTask("make a bed",STATUSES.DONE);

console.log(list);




