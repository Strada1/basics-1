// Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль 

// Пусть статус true у выполненных задач, статус false - у невыполненных
// По умолчанию задача добавляется со статусом false

let todoList = {};

function changeStatus(task) {
  (this[task] === false) ? (this[task] = true) : (this[task] = false);
};

function addTask(task) {
  this[task] = false;
};

function deleteTask(task) {
  delete this[task];
};

function showList() {
  for (let key in this) {
    if (typeof(this[key]) === 'boolean') {
      console.log(key + ': ' + this[key]);
    }
  }
};

todoList.changeStatus = changeStatus;
todoList.addTask = addTask;
todoList.deleteTask = deleteTask;
todoList.showList = showList;


todoList.addTask('First Task');         // First Task: false
todoList.addTask('Second Task');        // First Task: false; Second Task: false
todoList.changeStatus('Second Task');   // First Task: false; Second Task: true
todoList.changeStatus('First Task');    // First Task: true; Second Task: true
todoList.changeStatus('Second Task');   // First Task: true; Second Task: false
todoList.addTask('Third Task');         // First Task: true; Second Task: false; Third Task: false
todoList.deleteTask('Third Task');      // First Task: true; Second Task: false
todoList.showList();                    // First Task: true; Second Task: false


