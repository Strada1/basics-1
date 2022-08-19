let toDoList = {};
toDoList.changeStatus = function (task, status) {
  this[task] = status;
};

toDoList.deleteTask = function (task) {
  delete this[task];
};
toDoList.showList = function () {
  for (let key in this) {
    if (typeof(this[key]) != 'function') {
      console.log(`Задача: ${key} \n`, `Статус задачи: ${this[key]} \n`);
    }
  }
};

toDoList.addTask = function (task, status = 'in work') {
  this[task] = status;
};

toDoList.addTask('Strada',);
toDoList.addTask('Анжуманя', 'done');
toDoList.addTask('Прэсс качат', 'in work');
toDoList.changeStatus('Прэсс качат', 'done');
toDoList.deleteTask('Анжуманя');
toDoList.showList();