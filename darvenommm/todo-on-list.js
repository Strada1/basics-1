const TODO = [];

function addTask(taskName, taskStatus = "Started", taskPriority = "low") {
  let newTask = {
    name: taskName,
    status: taskStatus,
    priority: taskPriority,
  };
  TODO.push(newTask);
}

function changeTask(taskName, taskStatus, taskPriority) {
  let taskForChange = TODO.find((task) => task.name === taskName);
  if (taskForChange) {
    taskForChange.status = taskStatus;
    taskForChange.priority = taskPriority;
  } else {
    console.log("Нет задания с таким именем");
  }
}

function deleteTask(taskName) {
  let taskIndexForDelete = TODO.findIndex((task) => task.name === taskName);
  if (taskIndexForDelete !== -1) {
    TODO.splice(taskIndexForDelete, 1);
  } else {
    console.log("Нет задания с таким именем");
  }
}

function showList() {
  allTaskByStatus = {};
  for (let task of TODO) {
    taskValue = `${task.name} - ${task.priority}`;
    taskStatus = task.status;
    if (allTaskByStatus[taskStatus]) {
      allTaskByStatus[taskStatus].push(taskValue);
    } else {
      allTaskByStatus[taskStatus] = [taskValue];
    }
  }
  showTodoInConsole(allTaskByStatus);
}

function showTodoInConsole(todo) {
  for (let taskStatus in todo) {
    console.log(`${taskStatus}:`);
    for (let taskvalue of todo[taskStatus]) {
      console.log(`    ${taskvalue}`);
    }
  }
}

addTask("first");
addTask("second", "done", "high");
addTask("third", "In progress");
addTask("fourth", "done");
addTask("fifth", "done");
addTask("sixth");
addTask("eighth", "done", "high");
addTask("tenth", "In progress");

showList();
