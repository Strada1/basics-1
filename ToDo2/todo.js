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

// добавление задачи===============================================================================

function addTask(newTask, newPriority) {
  list.push({
    name: newTask,
    status: STATUSES.TO_DO,
    priority: newPriority,
  });
}

// удаление задачи===================================================================================

function deleteTask(task) {
  let a = list.findIndex((item) => {
    if (item.name == task) return true;
  });
  list.splice(a, 1);
}


// изменение статуса задачи===========================================================================

function changeTask(task, newStatus) {
  let b = list.findIndex((item) => {
    if (item.name == task) {
      return true;
    } else {
      console.log("такой задачи не существует");
    }
  });

  list[b].status = newStatus;
}


// вывод задач по статусу===============================================================================
function showList () {

console.log ('Done:    ')
for (i=0; i < list.length; i++) {
  if(list[i].status == STATUSES.DONE){
    console.log (list[i].name)
  } 
}

console.log ('In Progress:    ')
for (i=0; i < list.length; i++) {
  if(list[i].status == STATUSES.IN_PROGRESS){
    console.log (list[i].name)
  } 
}

console.log ('Io Do:    ')
for (i=0; i < list.length; i++) {
  if(list[i].status == STATUSES.TO_DO){
    console.log (list[i].name)
  } 
}
}

changeTask("write a post", "Done");
addTask("fishing", "low");
addTask("watch film", "low");
deleteTask("make a bed")
addTask("run", "low");
showList();