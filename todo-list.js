const TABULATION = "   ";

const todoList = {
  tasks: {
  },

  statuses: {
    toDo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done'
  },

  changeStatus(task, status) {
    if (this.tasks[task] && this.tasks[task] !== status && Object.values(this.statuses).includes(status)) {
      this.tasks[task] = status;
    }
  },

  addTask(task) {
    if (task && !this.tasks[task]) {
      this.tasks[task] = this.statuses.toDo;
    }
  },

  deleteTask(task) {
    if (this.tasks[task]) {
      delete this.tasks[task];
    }
  },

  showList() {
    for (key in this.statuses) {
      console.log(`${this.statuses[key]}: `);
      this.showListByStatus(this.statuses[key]);
    }
  },

  showListByStatus(status) {
    if (status && Object.values(this.statuses).includes(status)) {
      let count = 0;

      for (task in this.tasks) {
        if (this.tasks[task] === status) {
          console.log(`${TABULATION}"${task}"`);
          count++;
        }
      }

      if (!count) {
        console.log(`${TABULATION}-`);
      }
    }
  }

}

todoList.addTask('Погулять');
todoList.addTask('Побриться');
todoList.addTask('Почистить зубы');
todoList.addTask('Дочитать книгу');


todoList.showList();

todoList.changeStatus('Погулять', 'Done');
todoList.changeStatus('Почистить зубы', 'In Progress');

todoList.showList();

todoList.deleteTask('Побриться');
todoList.deleteTask('Погулять');

todoList.showList();
