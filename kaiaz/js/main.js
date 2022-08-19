const toDo = {
  "Помыть посуду": true,
  "Купить продукты": false,
  "Покормить кота": true,
  addTask() {
    let task;
    task = prompt("Введите задачу!", "Написать приложение");
    this[task] = false;
    console.log("========  Добавлена задача " + task + " ========");
  },
  deleteTask(task) {
    let textTask = task;
    delete this[task];
    console.log('======== Задача "' + textTask + '" удалена ========');
  },
  changeStatus(task) {
    this[task] = !this[task];
    console.log(
      '========  Статус этой задачи  "' + task + '" изменен ========'
    );
  },
  showList() {
    console.log("======== Список Задач ========");
    for (let task in this) {
      if (typeof this[task] === "function") {
        continue;
      } else {
        console.log(task, ":", this[task]);
      }
    }
  },
};

toDo.showList();
toDo.addTask();
toDo.showList();
toDo.changeStatus("Купить продукты");
toDo.showList();
toDo.deleteTask("Помыть посуду");
toDo.showList();
