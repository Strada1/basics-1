const toDoList = {
  list: {
    "create a new practice task": "To Do",
    "make a bed": "To Do",
    "write a post": "In Progress",
  },
  addTask: function(task) {
    this.list[task] = 'To Do';
  },
  changeStatus: function(task, status) {
    this.list[task] = status;
  },
  deleteTask: function(task) {
    delete this.list[task];
  },
  showList: function() {
    console.log('To Do:');
    for(key in this.list) {
      if(this.list[key] === 'To Do') {
        console.log('\t' + key);
      }
    }
    console.log('In Progress:');
    for(key in this.list) {
      if(this.list[key] === 'In Progress') {
        console.log('\t' + key);
      }
    }
    console.log('Done:');
    for(key in this.list) {
      if(this.list[key] === 'Done') {
        console.log('\t' + key);
      }
  }
}
}

toDoList.showList();