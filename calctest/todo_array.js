const list = [
  {
    name: 'create a post',
    status: 'In progress',
    priority: 'low',
  },
  {
    name: 'test',
    status: 'Done',
    priority: 'high',
  },
];

// Функция changeStatus - будет менять статус задачи
function changeStatus(task, status) {
  return (task = list.filter((task) => task.name === status));
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
