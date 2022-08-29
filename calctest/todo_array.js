const STATUS = {
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
  TODO: 'ToDo',
};

const PRIORITY = {
  HIGH: 'high',
  LOW: 'low',
};

const todoList = [
  //   {
  //     name: 'create a post',
  //     status: STATUS.IN_PROGRESS,
  //     priority: PRIORITY.LOW,
  //   },
  //   {
  //     name: 'test',
  //     status: STATUS.DONE,
  //     priority: PRIORITY.HIGH,
  //   },
];

// Функция addTask - добавляет новую задачу
function addTask(task) {
  return todoList.push({
    name: task,
    status: STATUS.TODO,
    priority: PRIORITY.LOW,
  });
}

// Функция changeStatus - будет менять статус задачи
function changeStatus(task, newStatus) {
  let taskList = todoList.find((item) => item.name === task);
  return (taskList.status = newStatus);
}

// Функция changePriority - будет менять приоритет задачи
function changePriority(task, newPriority) {
  let taskList = todoList.find((item) => item.name === task);
  return (taskList.priority = newPriority);
}

// Функция deleteTask - удаляет задачу
function deleteTask(task) {
  todoList.find((item) => item.name === task);
  todoList.splice(todoList.findIndex((item) => item.name === task));
}

function filterStatus(status) {
  console.log(todoList.filter((item) => item.status === status));
}

// "на выходе получаем:"
function showList() {
  console.log(`${STATUS.DONE}: `);
  filterStatus(STATUS.DONE);

  console.log(`${STATUS.IN_PROGRESS}: `);
  filterStatus(STATUS.IN_PROGRESS);

  console.log(`${STATUS.TODO}: `);
  filterStatus(STATUS.TODO);
}

addTask('test');
addTask('create a post');
addTask('write a post');
addTask('make a bed');
addTask('work');

changeStatus('test', STATUS.IN_PROGRESS);
changeStatus('write a post', STATUS.DONE);
changeStatus('work', STATUS.DONE);

changePriority('test', PRIORITY.HIGH);

deleteTask('make a bed');

showList();

// console.log(list[0][`status`]); // In Progress, узнаем статус в объекте под 0 индексом.
