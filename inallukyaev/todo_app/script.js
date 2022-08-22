const Status = {
  inProgress: 'In Progress',
  done: 'Done',
  todo: 'To Do',
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

function changeStatus(task, status) {
  examination(task)
    ? (toDoList[task] = status)
    : console.log('Такой задачи не существует');
}
function deleteTask(task) {
  examination(task)
    ? delete toDoList[task]
    : console.log('Задачу нельзя удалить. Её не существует');
}

function addTask(task) {
  toDoList[task] = 'To do';
}

function showList() {
  for (let nameStatus in Status) {
    console.log(`${Status[nameStatus]}: `);
    for (let key in toDoList) {
      if (toDoList[key] == Status[nameStatus]) {
        console.log(`--${key}--`);
      }
    }
  }
}

changeStatus('make a bed', Status.done);
deleteTask('make a bed');
showList();
