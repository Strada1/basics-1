const STATUS = {
  inProgress: 'In Progress',
  done: 'Done',
  toDo: 'To Do',
};

const toDoList = {
  'create a new practice task': STATUS.inProgress,
  'make a bed': STATUS.done,
  'write a post': STATUS.toDo,
};
function examination(task) {
  return task in toDoList;
}

function changeStatus(nameTask, statusName) {
  if (statusName in STATUS) {
    examination(nameTask)
      ? (toDoList[nameTask] = STATUS[statusName])
      : console.log('Такой задачи не существует');
  } else {
    console.log('Такой статус не может быть использован');
  }
}

function addTask(nameTask) {
  if (examination(nameTask)) {
    console.log('Такая задача уже существует');
  } else if (nameTask) {
    toDoList[nameTask] = STATUS.toDo;
  }
}

function deleteTask(nameTask) {
  examination(nameTask)
    ? delete toDoList[nameTask]
    : console.log('Такой задачи не существует');
}

function showList() {
  for (let nameStatus in STATUS) {
    let countTask = 0;
    console.log(STATUS[nameStatus]);
    for (let key in toDoList) {
      if (STATUS[nameStatus] === toDoList[key]) {
        console.log(`--${key}--`);
        countTask += 1;
      }
    }
    if (!countTask) {
      console.log('-');
    }
  }
}

addTask('learn lesson');
addTask('');
changeStatus('learn lesson', 'inProgress');
deleteTask('create a new practice task');
showList();
