const list = {
  'create a new practice task': 'In Progress',
  'make a bed': 'Done',
  'write a post': 'To Do',
};

// Меняем статус задачи (меняем значение ключа)
function changeStatus(task, status) {
  list[task] = status;
}
changeStatus('write a post', 'Done');
// console.log(list);

// Добавляем новую задачу (добавляем новый ключ)
function addTask(task) {
  list[task] = 'To Do';
}
addTask('have a walk');
// console.log(list);

// Удаляем задачу (удаляем ключ)
function deleteTask(task) {
  delete list[task];
}

deleteTask('have a walk');
// console.log(list);
