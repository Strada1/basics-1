const STATUS = {
  'TO_DO': 'todo',
  'IN_PROGRESS': 'in progress',
  'DONE': 'done',
}

const todoList = {};

// добавлене новой задачи
const addTask = (task) => {
  todoList[task] = STATUS.TO_DO;
}

// удаление задачи
const deleteTask = (task) => {
  for (let key in todoList) {
    if (task === key) {
      delete todoList[task]
    }
  }
}

// меняет статус задачи
const changeStatus = (task, status) => {
  todoList[task] = status;
}

// вывод всех задач в консоль
const showList  = () => {
  console.log('TODO');
  console.log('**********************************');
  for (let key in todoList) {
    if (todoList[key] === 'todo') {
      console.log(`${key} \n`);
    }
  }

  console.log('IN PROGRESS');
  console.log('**********************************');
  for (let key in todoList) {
    if (todoList[key] === 'in progress') {
      console.log(`${key} \n`);
    }
  }

  console.log('DONE');
  console.log('**********************************');
  for (let key in todoList) {
    if (todoList[key] === 'done') {
      console.log(`${key} \n`);
    }
  }
}

addTask('купить хлеб');
addTask('купить молоко');
addTask('сходить к врачу');
addTask('забрать вещи с пункта выдачи');
deleteTask('купить хлеб');
changeStatus('сходить к врачу', 'done');
addTask('дать лекарство коту');
changeStatus('купить молоко', 'todo');
addTask('помыть кота');
changeStatus('дать лекарство коту', 'in progress');
deleteTask('сходить к врачу');
deleteTask('помыть кота');
addTask('сходить в магазин');
changeStatus('сходить в магазин', 'in progress');
addTask('вернуть платье');
changeStatus('вернуть платье', 'done');

showList();