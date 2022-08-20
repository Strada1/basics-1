const TODO = {
  addTask(taskName, taskStatus) {
    this[taskName] = taskStatus;
  },

  changeStatus(taskName, newTaskStatus) {
    if (taskName in this) {
      this[taskName] = newTaskStatus;
    } else {
      console.log("Нет задания с таким названием");
    }
  },

  deleteTask(taskName) {
    delete this[taskName];
  },

  showList() {
    for (let propName in this) {
      propStatus = this[propName];
      if (typeof propStatus !== "function") {
        console.log(`${propName}: ${propStatus}`);
      }
    }
  },
};

TODO.addTask("first task", "not started");
TODO.addTask("second task", "in progress");
TODO.addTask("third task", "in future");

TODO.changeStatus("third task", "done");

TODO.showList();
