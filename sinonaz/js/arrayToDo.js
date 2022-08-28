const status = {
  IN_PROGRESS: `In Progress`,
  TO_DO: `To do`,
  DONE: `Done`,
};

const priority = {
  LOW: `Low`,
  HIGHT: `Hight`,
};

const list = [
  {
    name: `make a bed`,
    status: status.DONE,
    priority: priority.HIGHT,
  },
  {
    name: `do array homework`,
    status: status.IN_PROGRESS,
    priority: priority.HIGHT,
  },
];

function addTask(name, status, priority) {
  if (!name || !status || !priority) {
    console.log(`Please write all values`);
  } else {
    list.push({ name, status, priority });
    console.log(`Task '${name}' added to list`);
  }
}

function deleteTask(taskName) {
  let item = list.findIndex((item) => item.name == taskName);
  if (item != -1) {
    list.splice(item, 1);
    console.log(`Task '${taskName}' has been deleted`);
  } else {
    console.log(`Can not find this task name`);
  }
}

function changeStatus(name, status) {
  let item = list.find((item) => item.name == name);
  if (item) {
    item.status = status;
  } else {
    console.log(`Please write all values`);
  }
}

function showList() {
  let taskToDo = list.filter((item) => item.status == status.TO_DO);
  console.log(`TODO: (${taskToDo.length})`);
  for (let i = 0; i < taskToDo.length; i++) {
    const item = taskToDo[i];
    const taskList = `\t ${item.name}: ${item.status}(${item.priority})`;
    console.log(taskList);
  }
  let taskInProgress = list.filter((item) => item.status == status.IN_PROGRESS);
  console.log(`IN_PROGRESS: (${taskInProgress.length})`);
  for (let i = 0; i < taskInProgress.length; i++) {
    const item = taskInProgress[i];
    const taskList = `\t ${item.name}: ${item.status}(${item.priority})`;
    console.log(taskList);
  }
  let taskDone = list.filter((item) => item.status == status.DONE);
  console.log(`DONE: (${taskDone.length})`);
  for (let i = 0; i < taskDone.length; i++) {
    const item = taskDone[i];
    const taskList = `\t ${item.name}: ${item.status}(${item.priority})`;
    console.log(taskList);
  }
}

addTask(`check addTask function`, status.IN_PROGRESS, priority.HIGHT);
changeStatus(`check addTask function`, status.DONE);
addTask(`check deleteTask function`, status.IN_PROGRESS, priority.HIGHT);
changeStatus(`check deleteTask function`, status.DONE);
addTask(`add some task`, status.DONE, priority.LOW);
deleteTask(`add some task`);
addTask(`pull request the homework`, status.TO_DO, priority.HIGHT);
showList();
// console.log(list.length);
