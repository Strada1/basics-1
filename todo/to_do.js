const STATUSTASK = {
  ToDo: "ToDo",
  in_progress: "in Progress",
  Done: "Done",
};
const PRIORITY = {
  low: "Low",
  high: "High",
};
const list = [
  {
    name: "create a post",
    status: STATUSTASK.in_progress,
    priority: PRIORITY.low,
  },
  {
    name: "test",
    status: STATUSTASK.Done,
    priority: PRIORITY.high,
  },
];
function indextask(Task) {
  return list.findIndex((item) => item.name === Task);
}
function isNotValidTask(indexTask) {
  if (~indexTask) {
    return true;
  }
}
function addTask(task, priorityTask) {
  list.push({
    name: task,
    status: STATUSTASK.in_progress,
    priority: priorityTask,
  });
}
function changeStatus(Task, statusTask) {
  const indexTask = indextask(Task);
  if (~indexTask) {
    list[indexTask].status = statusTask;
    console.log("Статус изменен");
    return true;
  }
  console.log("Такой задачи нет. Статус не изменен.");
  return false;
  //
}

function deleteTask(Task) {
  const indexTask = indextask(Task);
  if (~indexTask) {
    list.splice(indexTask, 1);
    console.log("Задача удалена");
    return true;
  }
  console.log("Такой задачи нет.");
  return false;
}
function showTaskInStatus(statusTask) {
  let showList = list.filter((item) => item.status === statusTask);
  console.log(statusTask + ":");
  if (showList.length > 0) {
    showList.forEach((task) =>
      console.log("\t" + task.name + ": " + task.priority)
    );
  } else {
    console.log("\t-");
  }
}
function showList() {
  showTaskInStatus(STATUSTASK.ToDo);
  showTaskInStatus(STATUSTASK.in_progress);
  showTaskInStatus(STATUSTASK.Done);
}

addTask("tururu", PRIORITY.high);
addTask("finih", PRIORITY.low);
deleteTask("tururu");
changeStatus("finih", STATUSTASK.ToDo);
showList();
