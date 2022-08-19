let todo = {
  doStrada: "in progress",
  drinkCoffee: "new",
  wakeUp: "done",

  showList() {
    for (let key in todo) {
      if (typeof todo[key] == 'function') {
        continue;
      }
      console.log(key, todo[key]);
    }
  },

  addTask(newTask) {
    todo[newTask] = 'new';
  },

  deleteTask(delTask) {
    delete todo[delTask];
  },

  changeStatus(chTask, newStatus) {
    if (chTask in todo) {
      todo[chTask] = newStatus
    }
  }
}
todo.showList()
todo.addTask('reread object article')
todo.deleteTask('doStrada')
todo.changeStatus('abc', 'in progress')
todo.showList()