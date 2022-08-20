const todo = {
    status: {
      inProgress: "In Progress",
      done: "Done",
      toDo: "To Do",
    },
    taskitems: {
  
    },
    addTask(nameTask) {
      this.taskitems[nameTask] = this.status.toDo;
    },
    deleteTask(nameTask) {
      delete this.taskitems[nameTask];
    },
    changeStatus(nameTask, status) {
      for (let key in this.taskitems) {
        if (nameTask != key) {
          continue;
        } else {
          this.taskitems[nameTask] = status;
          break;
        }
      }
  
    },
    showList() {
      let toDoResult = '',
        inProgresResult = '',
        doneResult = '';
      for (let key in this.taskitems) {
        switch (this.taskitems[key]) {
          case this.status.toDo:
            toDoResult += key + '\n';
            break;
          case this.status.inProgress:
            inProgresResult += key + '\n';
            break;
          default:
            doneResult += key + '\n';
        }
      }
      console.log(`${this.status.toDo}:\n${toDoResult}`);
      console.log(`${this.status.inProgress}:\n${inProgresResult}`);
      console.log(`${this.status.done}:\n${doneResult}`);
    },
  };
  
  todo.addTask("Сделать домашнее задание");
  todo.addTask("Покушать");
  todo.addTask("Попрыгать");
  todo.addTask("Побегать");
  todo.addTask("Позаниматься");
  todo.addTask("Полить цветок");
  todo.addTask("Поиграть в компьютер");
  todo.addTask("Поучить js");
  todo.deleteTask("Поучить js");
  todo.changeStatus("Поиграть в компьютер", todo.status.done);
  todo.changeStatus("Позаниматься", todo.status.inProgress);
  todo.changeStatus("Полить цветок", todo.status.done);
  todo.changeStatus("Этой задачи не существует", todo.status.done);
  
  todo.showList();
  