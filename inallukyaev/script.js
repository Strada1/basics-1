const Status = {
  inProgress: 'In Progress',
  done: 'Done',
  toDo: 'To Do',
};

const toDoList = {
  'create a new practice task': 'In Progress',
  'make a bed': 'Done',
  'write a post': 'To Do',
};
function examination(task) {
  if (task in toDoList) {
    return true;
  } else {
    return false;
  }
}
function changeStatus(nameTask, status) {
  examination(nameTask)
    ? (toDoList[nameTask] = status)
    : console.log('Такой задачи не существует');
}

function addTask(nameTask) {
  toDoList[nameTask] = 'To Do';
}
function deleteTask(nameTask) {
  examination(nameTask)
    ? delete toDoList[nameTask]
    : console.log('Такой задачи не существует');
}

function showList() {
  for (let nameStatus in Status) {
    console.log(Status[nameStatus]);
    for (let key in toDoList) {
      if (Status[nameStatus] === toDoList[key]) console.log(`--${key}--`);
    }
  }
}

addTask('Сделать уроки');
changeStatus('Сделать уроки', Status.inProgress);
deleteTask('create a new practice task');
showList();
