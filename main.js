const STATUS = {
  'TO_DO': 'todo',
  'IN_PROGRESS': 'in progress',
  'DONE': 'done',
}

const PRIORITY = {
  'LOW': 'low',
  'MEDIUM' : 'medium',
  'HIGH' : 'high',
}

const todoList = [];

// добавлене новой задачи
const addTask = (task) => {
  let item = todoList.find((item) => item.name === task.name);
  if (item === undefined) {
    todoList.push({id: todoList.length, name: task.name, status: task.status, priority: task.priority});
  } else console.log(`Задача ${item.name} уже существует`);
}

// удаление задачи
const deleteTask = (task) => {
  todoList.map((item, index) => {
    if (item.name === task.name || item.id === task.id) {
      todoList.splice(index, 1);
    }
  })
}


// меняет статус задачи
const changeStatus = (nameTask, newStatus) => {
  let item = todoList.find((item) => item.name === nameTask );
  let index = todoList.indexOf(item, 0);
  todoList[index].status = newStatus;
  console.log(item, index, todoList[index].status);
}

// вывод всех задач в консоль
const showList  = () => {
  console.log('TO_DO');
  todoList.map((item) => {
    if (item.status === STATUS.TO_DO) {
      console.log(item);
    }
  });

  console.log('IN_PROGRESS');
  todoList.map((item) => {
    if (item.status === STATUS.IN_PROGRESS) {
      console.log(item);
    }
  });

  console.log('DONE');
  todoList.map((item) => {
    if (item.status === STATUS.DONE) {
      console.log(item);
    }
  });
}

addTask({ name: '1', status: STATUS.TO_DO, priority: PRIORITY.HIGH});
addTask({ name: '2', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH});
addTask({ name: '2', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH});
addTask({ name: '3', status: STATUS.TO_DO, priority: PRIORITY.HIGH});
addTask({ name: '4', status: STATUS.DONE, priority: PRIORITY.HIGH});
addTask({ name: '5', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH});
addTask({ name: '6', status: STATUS.DONE, priority: PRIORITY.HIGH});
console.log(todoList);

console.log('меняет статус');
changeStatus('2', STATUS.IN_PROGRESS );

console.log('удаление');
deleteTask({name: '3'});
deleteTask({id: 1});
console.log(todoList);

console.log('вывод в консоль');
showList();
