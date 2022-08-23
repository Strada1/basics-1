const STATUS = {
  inProgress: 'In Progress',
  done: 'Done',
  toDo: 'To Do',
}

const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function addTask(nameTask) {
  if (nameTask in list) {
    console.log('Такая задача уже существует');
  } else {
    if (nameTask.trim().length > 0) {
      list[nameTask] = STATUS.toDo;
    } else {
      console.log('Некорректный ввод');
    }
  }
}

function deleteTask(nameTask) {
  if (nameTask in list) {
    delete list[nameTask];
  } else {
    console.log('Такой задачи не существует');
  }
}

function changeStatus(nameTask, status) {
  if (nameTask in list) {
    list[nameTask] = status;
  } else {
    console.log('Такой задачи не существует');
  }
}

function showList() {
  for (let nameStatus in STATUS) {
    console.log(`${STATUS[nameStatus]}: `);
    for (let key in list) {
      if (list[key] == STATUS[nameStatus]) {
        console.log(' ' + key);
      }
    }
  }
}


addTask('Пойти бегать');
addTask('Пойти кушать');
addTask('Пойти прыгать');
deleteTask('Пойти кушать');
changeStatus('Пойти бегать', STATUS.inProgress);

showList();

