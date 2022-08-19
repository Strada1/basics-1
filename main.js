const todoList = {};

// добавлене новой задачи
const addTask = (task) => {
  todoList[task] = false;
}

// удаление задачи
const deleteTask = (task) => {
  delete todoList[task];
}

// меняет статус задачи
const changeStatus = (task) => {
  todoList[task] === false ? todoList[task] = true : todoList[task] = false;
}

// вывод всех задач в консоль
const showList  = () => {
 for (let key in todoList) {
   console.log(key,':',todoList[key]);
 }
}

addTask('купить хлеб');
addTask('купить молоко');
addTask('сходить к врачу');
addTask('забрать вещи с пункта выдачи');
showList();
console.log('-----------------------------------------------');
deleteTask('купить хлеб');
changeStatus('сходить к врачу');
showList();
console.log('-----------------------------------------------');
addTask('дать лекарство коту');
changeStatus('купить молоко');
changeStatus('сходить к врачу');
showList();
console.log('-----------------------------------------------');
addTask('помыть кота');
changeStatus('дать лекарство коту');
deleteTask('сходить к врачу');
showList();