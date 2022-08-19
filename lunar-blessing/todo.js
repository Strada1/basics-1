let todo = {

  statuses: {
    new: "new",
    inProgress: "in progress",
    done: "done",
  },

  storage: {},

  showList() {
    for (let key in this.storage) {
      console.log(key, this.storage[key]);
    }
  },

  addTask(newTask) {
    this.storage[newTask] = this.statuses.new;
  },

  deleteTask(delTask) {
    delete this.storage[delTask];
  },

  isStatusValid(newStatus) {
    for (let key in this.statuses) {
      if (newStatus == this.statuses[key]) {
        return true;
      }
    }
    return false;
  },

  changeStatus(chTask, newStatus) {
    if (chTask in this.storage && this.isStatusValid(newStatus)) {
      this.storage[chTask] = newStatus
    }
  }
}

todo.addTask('doStrada');
todo.changeStatus('doStrada', 'in progress');
todo.addTask('drink coffee');
todo.addTask('wake up')
todo.changeStatus('wake up', 'done')
todo.showList()

// todo.addTask('reread object article')
// todo.deleteTask('doStrada')
// todo.changeStatus('abc', 'in progress')
// todo.showList()
// todo.addTask('addTask')
// todo.addTask('oneMoreTask')
// todo.showList()