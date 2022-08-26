const STATUS_TODO = {
  TO_DO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
};
const PRIORITY_TODO = {
  LOW: 'low',
  HIGH: 'high',
};
const list = [
  { name: 'create a post', status: 'In progress', priority: 'low' },
  { name: 'test', status: 'Done', priority: 'high' },
];
function changeStatusPriority(task, status, priority) {
  let pos = list.findIndex((item) => item.name == task);
  if (status in STATUS_TODO && priority in PRIORITY_TODO && pos !== -1) {
    list[pos].status = STATUS_TODO[status];
    list[pos].priority = PRIORITY_TODO[priority];
  } else {
    console.log('Error change status priority');
  }
}
function addTask(task, priority = 'LOW') {
  let pos = list.findIndex((item) => item.name == task);
  if (pos === -1 && priority in PRIORITY_TODO) {
    list.push({ name: task, status: STATUS_TODO.TO_DO, priority: priority });
  } else {
    console.log('Error add task');
  }
}
function deleteTask(task) {
  let pos = list.findIndex((item) => item.name == task);
  if (pos !== -1) {
    list.splice([pos], 1);
  } else {
    console.log('Error delete task');
  }
}
function showList() {
  console.log(STATUS_TODO.TO_DO + ':');
  list.forEach((item) => {
    switch (item.status) {
      case STATUS_TODO.TO_DO:
        console.log(' ' + item.name + ',');
        break;
    }
  });
  console.log(STATUS_TODO.IN_PROGRESS + ':');
  list.forEach((item) => {
    switch (item.status) {
      case STATUS_TODO.IN_PROGRESS:
        console.log(' ' + item.name + ',');
        break;
    }
  });
  console.log(STATUS_TODO.DONE + ':');
  list.forEach((item) => {
    switch (item.status) {
      case STATUS_TODO.DONE:
        console.log(' ' + item.name + ',');
        break;
    }
  });
  console.log(PRIORITY_TODO.HIGH + ':');
  list.forEach((item) => {
    switch (item.priority) {
      case PRIORITY_TODO.HIGH:
        console.log(' ' + item.name + ',');
        break;
    }
  });
  console.log(PRIORITY_TODO.LOW + ':');
  list.forEach((item) => {
    switch (item.priority) {
      case PRIORITY_TODO.LOW:
        console.log(' ' + item.name + ',');
        break;
    }
  });
}

changeStatusPriority('create a post', 'TO_DO', 'HIGH');
addTask('read book', 'HIGH');
deleteTask();
showList();
