const Todo = {
  tasks: {
    "Task 1": false,
    "Task 2": false,
    "Task 3": false,
  },
  
  changeStatus(task) {
    if ((task in this.tasks)){
      this.tasks[task] = !this.tasks[task]
    }
  },
  addTask(task) {
    if (!(task in this.tasks)) {
      this.tasks[task] = false
    }
  },
  deleteTask(task) {
    if ((task in this.tasks)){
      delete this.tasks[task]
    }
  },
  showList() {
    for (let key in this.tasks) {
      if (this.tasks[key] === false) {
        console.log(`${key}: выполняется`)
      } else {
        console.log(`${key}: сделано`)
      }
    }
  },
}

Todo.changeStatus('Task 1')
Todo.changeStatus('Task 1')
Todo.changeStatus('Task 2')
Todo.deleteTask('Task 3') 
Todo.addTask('Task 4')
Todo.showList()
