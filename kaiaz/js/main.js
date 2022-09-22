const toDo = {
  statuses: {
    inProgress: "In Progress",
    done: "Done",
    todo: "To Do",
  },
  tasks: {
    "Помыть посуду": "In Progress",
    "Купить продукты": "Done",
    "Покормить кота": "To Do",
    "Покормить рыбок": "Done",
  },
  addTask() {
    let task;
    task = prompt("Введите задачу!", "Написать приложение");
    this.tasks[task] = this.statuses.todo;
    console.log(`========  Добавлена задача "${task}" ========`);
  },
  deleteTask(task) {
    let textTask = task;
    delete this.tasks[task];
    console.log('======== Задача "' + textTask + '" удалена ========');
  },
  changeStatus(task, status) {
    for (let key in this.tasks) {
      if (key === task) {
        for (let key in this.statuses) {
          if (key !== status) {
            this.tasks[task] = status;
          }
        }
      }
    }
    console.log(
      `========  Статус этой задачи "${task}" изменен на "${status}" ========`
    );
  },

  showList() {
    console.log("======== Список Задач ========");
    for (let status in this.statuses) {
      console.log(status.toUpperCase() + ":");
      for (let task in this.tasks) {
        // console.log(this.tasks[task]);
        if (this.statuses[status] === this.tasks[task]) {
          console.log(task + " : ", status);
        }
      }
    }
  },
};

toDo.showList();
toDo.showList();

toDo.addTask();
toDo.showList();
toDo.changeStatus("Купить продукты", "In Progress");
toDo.showList();
toDo.deleteTask('"Помыть посуду');

toDo.showList();
