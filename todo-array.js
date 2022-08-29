const STATUS_NEW = 'new';
const STATUS_IN_PROGRESS = 'in progress';
const STATUS_DONE = 'done';
const PRIORITY_HIGH = 'high';
const PRIORITY_MIDDLE = 'middle';
const PRIORITY_LOW = 'low';

const STATUSES = [
  STATUS_NEW,
  STATUS_IN_PROGRESS,
  STATUS_DONE,
];

const PRIORITIES = [
  PRIORITY_HIGH,
  PRIORITY_MIDDLE,
  PRIORITY_LOW,
]

let todo = {
  storage: [],

  addTask(taskName, taskPriority) {
    if (!this.isPriorityValid(taskPriority)){
      console.log('Unknown priority')
      return;
    }
    let task = {
      name: taskName,
      priority: taskPriority,
      status: STATUS_NEW
    };
    this.storage.push(task)  
  },

  deleteTask(taskName) {
    for (let i = 0; i < this.storage.length; i++) {
      let task = this.storage[i];
      if (task.name === taskName) {
        this.storage.splice(i, 1)
      }
    }
  },

  isStatusValid(newStatus) {
    for (let status of STATUSES) {
      if (newStatus === status) {
        return true;
      }
    }
    return false;
  },

  isPriorityValid(newPriority) {
    for (let priority of PRIORITIES) {
      if (newPriority === priority) {
        return true;
      }
    }
    return false;
  },

  changeStatus(taskName, newStatus) {
    if (!this.isStatusValid(newStatus)) {
      console.log("Unknown status");
      return;
    }

    let task = this.storage.find(function (item) {
      if (item.name === taskName) {
        return true;
      }
    })
    if (task !== undefined) {
      task.status = newStatus;
    }

  },

  showList() {
    for (let status of STATUSES) {
      console.log(status) + ":";
      let isEmpty = true;
      for (let task of this.storage) {
        if (status === task.status) {
          console.log("    " + task.name);
          isEmpty = false;
        }
      }
      if (isEmpty === true) {
        console.log("    -")
      }
    }
  }
}

todo.addTask('wake up', PRIORITY_LOW)
todo.addTask('do Strada', PRIORITY_HIGH)
todo.addTask('have dinner', PRIORITY_HIGH)
todo.changeStatus('have dinner', STATUS_IN_PROGRESS)
todo.deleteTask('wake up')
todo.showList()