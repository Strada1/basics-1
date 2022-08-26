const STATUS = {
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
};

const PRIORITY = {
  HIGH: 'high',
  LOW: 'low',
};

const list = [
  {
    name: 'create a post',
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
  {
    name: 'test',
    status: STATUS.DONE,
    priority: PRIORITY.HIGH,
  },
];

let todoList = list;

// Функция changeStatus - будет менять статус задачи
function changeStatus(task, status) {
  let todoList = list.filter((task) => task.status === status);
  return todoList;
}

console.log(list);
changeStatus('test', 'todo');

// // Функция addTask - добавляет новую задачу
// function addTask(task) {}

// // Функция deleteTask - удаляет задачу
// function deleteTask(task) {}

// // "на выходе получаем:"
// function showList() {}

// showList();

// console.log(list[0][`status`]); // In Progress, узнаем статус в объекте под 0 индексом.
