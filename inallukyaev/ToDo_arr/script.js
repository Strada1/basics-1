const STATUS = {
  in_Progress: 'In Progress',
  DONE: 'done',
  TO_DO: 'TO DO',
};

const priority = {
  low: 'low',
  high: 'high',
};

const toDoList = [
  { name: 'create a post', status: STATUS.in_Progress, priority: priority.low },
  { name: 'test', status: STATUS.DONE, priority: priority.high },
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
      priority: prior,
    });
  }
}

function changeStatus(nameTask, statusName) {
  let index = examination(nameTask);
  if (statusName in STATUS) {
    if (toDoList[index].name === nameTask) {
      toDoList[index].status = STATUS[statusName];
    }
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
changeStatus('create a post', 'in_Progress');
addTask('Сделать уроки ', priority.high);
addTask('Покушать', priority.high);
showList();
deleteTask('Покушать');
showList();
