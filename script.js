const STATUS = {
  todo: 'To Do',
  inProgress: 'In progress',
  done: 'Done',
};

const PRIORITY = {
  low: 'low',
  middle: 'middle',
  high: 'high',
};

const list = [
  { name: 'Eat breakfast', status: STATUS.done, priority: PRIORITY.middle },
  { name: 'Do homework', status: STATUS.todo, priority: PRIORITY.high },
  { name: 'Read book', status: STATUS.todo, priority: PRIORITY.low },
  { name: 'Learn JS', status: STATUS.inProgress, priority: PRIORITY.high },
];

// const addTask = (task, priority) => {
//   if (!task && !priority) {
//     return console.error('Передайте не пустые строки для задачи и статуса');
//   }
//   if (typeof task !== 'string' || typeof priority !== 'string') {
//     return console.error('Передана задача или статус не как строка');
//   }
//   if (task && priority) {
//     list.push({ name: task, status: STATUS.todo, priority });
//     return console.log(`Добавлена задача "${task}" с приоритетом "${priority}"`);
//   }
// };

function addTask(task, priority) {
  this.name = task;
  this.status = STATUS.todo;
  this.priority = priority;
}

const changeStatus = (task, status) => {
  if (!task && !status) {
    return console.error('Передайте не пустые строки для задачи и статуса');
  }
  if (typeof task !== 'string' || typeof status !== 'string') {
    return console.error('Передана задача или статус не как строка');
  } else if (task && status) {
    let findTask = list.find((item) => item.name === task);
    if (findTask === undefined) {
      return console.error('Ошибка! Задачи с таким названием нет!');
    }
    if (findTask) {
      findTask['status'] = status;
      return console.log(`Изменен статус задачи "${task}" на "${status}"`);
    }
  }
};

const deleteTask = (task) => {
  if (task && typeof task === 'string') {
    task.trim();
    let findTask = list.find((item, index) => {
      if (item.name === task) {
        list.splice(index, 1);
        console.log(`Удалена задача: "${item.name}"`);
        return item;
      }
    });
    if (findTask === undefined) {
      return console.error('Ошибка! Задачи с таким названием нет!');
    }
  }
  if (!task) {
    return console.error('Передайте не пустую строку!');
  } else if (typeof task !== 'string') {
    return console.error('Передана не строка!');
  }
};

const showList = () => {
  list.forEach((item) => {
    if (item.status === STATUS.todo) {
      console.log('To Do: ');
      console.log(`Задача: ${item.name}, приоритет: ${item.priority}`);
    }
    if (item.status === STATUS.inProgress) {
      console.log('In progress: ');
      console.log(`Задача: ${item.name}, приоритет: ${item.priority}`);
    }
    if (item.status === STATUS.done) {
      console.log('Done: ');
      console.log(`Задача: ${item.name}, приоритет: ${item.priority}`);
    }
  });
};

const newTask = new addTask("test", PRIORITY.middle);
list.push(newTask);
console.log("new List: ", list);

// addTask('123', PRIORITY.middle);
deleteTask();
changeStatus('Learn JS', STATUS.todo);
deleteTask('Learn JS');
