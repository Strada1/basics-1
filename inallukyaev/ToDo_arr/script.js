const STATUS = {
  in_Progress: 'In Progress',
  DONE: 'done',
  TO_DO: 'TO DO',
};

const PRIORITY = {
  low: 'low',
  high: 'high',
};

const toDoList = [
  { name: 'create a post', status: STATUS.in_Progress, PRIORITY: PRIORITY.low },
  { name: 'test', status: STATUS.DONE, PRIORITY: PRIORITY.high },
];

function examination(task) {
  let index = toDoList.findIndex(item => item.name == task);
  return index;
}

function addTask(nameTask, prior) {
  if (examination(nameTask) !== -1) {
    console.log('Такая задача уже существует');
  } else {
    toDoList.push({
      name: nameTask,
      status: STATUS.TO_DO,
      PRIORITY: prior,
    });
  }
}

function changeStatus(nameTask, statusName) {
  let index = examination(nameTask);
  if (toDoList[index].name === nameTask) {
    toDoList[index].status = statusName;
  } else {
    console.log(`Введите корректное значение  `);
  }
}

function deleteTask(nameTask) {
  let index = examination(nameTask);
  if (index !== -1) {
    toDoList.splice(index, 1);
  } else {
    console.log('Такой задачи нет');
  }
}

function showList() {
  for (let nameStatus in STATUS) {
    let countTask = 0;
    console.log(STATUS[nameStatus]);
    toDoList.forEach(item => {
      if (item.status === STATUS[nameStatus]) {
        console.log(`--${item.name}--`);
        countTask += 1;
      }
    });
    if (countTask === 0) {
      console.log('-');
    }
  }
}
changeStatus('create a post', STATUS.DONE);
addTask('Сделать уроки ', PRIORITY.high);
addTask('Покушать', PRIORITY.high);
changeStatus('Покушать', STATUS.DONE);
deleteTask('Покушать');

showList();
showList();
