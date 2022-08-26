const STATUS = {
  TO_DO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
};
const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
};
const list = [
  { name: 'create a post', status: 'In progress', priority: 'low' },
  { name: 'test', status: 'Done', priority: 'high' },
];
function changeStatus(task, status) {
  let pos = list.findIndex((item) => item.name == task);
  if (pos !== -1) {
    list[pos].status = status;
  } else {
    console.log('Error change status priority');
  }
}
function changePriority(task, priority) {
  let pos = list.findIndex((item) => item.name == task);
  if (pos !== -1) {
    list[pos].priority = priority;
  } else {
    console.log('Error change status priority');
  }
}
function addTask(task, priority = PRIORITY.LOW) {
  let pos = list.findIndex((item) => item.name == task);
  if (pos === -1) {
    list.push({ name: task, status: STATUS.TO_DO, priority: priority });
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
  let toDo = '';
  let inProgress = '';
  let done = '';
  let high = '';
  let low = '';
  list.map(function (item) {
    switch (item.status) {
      case STATUS.TO_DO:
        return (toDo += ' ' + item.name + '\n');
      case STATUS.IN_PROGRESS:
        return (inProgress += ' ' + item.name + '\n');
      case STATUS.DONE:
        return (done += ' ' + item.name + '\n');
    }
    switch (item.priority) {
      case PRIORITY.HIGH:
        return (high += ' ' + item.name + '\n');
      case PRIORITY.LOW:
        return (low += ' ' + item.name + '\n');
    }
  });
  console.log(
    STATUS.TO_DO +
      ':\n' +
      (toDo || '-\n') +
      STATUS.IN_PROGRESS +
      ':\n' +
      (inProgress || ' -\n') +
      STATUS.DONE +
      ':\n' +
      (done || '-\n') +
      PRIORITY.HIGH +
      ':\n' +
      (high || '-\n') +
      PRIORITY.LOW +
      ':\n' +
      (low || '-\n'),
  );
}

changeStatus('create a post', STATUS.TO_DO);
changePriority('test', PRIORITY.HIGH);
addTask('read book', PRIORITY.HIGH);
deleteTask();
showList();
