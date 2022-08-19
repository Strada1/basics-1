const STATUS__TODO = {
  'to do': 'to do',
  'in progress': 'in progress',
  done: 'done',
};
const list = {
  'read book': STATUS__TODO['to do'],
  'learn JS': STATUS__TODO['in progress'],
  'buy bread': STATUS__TODO['done'],
};

function changeStatus(task, status) {
  if (task in list && status in STATUS__TODO) {
    this[task] = STATUS__TODO[status];
  }
}
function addTask(task) {
  if (typeof task === 'string') {
    this[task] = STATUS__TODO['to do'];
  }
}
function deleteTask(task) {
  if (task in list) {
    delete this[task];
  }
}
function showList() {
  let toDo = '';
  let inProgress = '';
  let done = '';
  for (let task in this) {
    switch (this[task]) {
      case 'to do':
        toDo += task + ',' + '\n';
        break;
      case 'in progress':
        inProgress += task + ',' + '\n';
        break;
      case 'done':
        done += task + ',' + '\n';
        break;
    }
  }
  console.log(
    'To do:' +
      '\n' +
      (toDo || '-') +
      'In Progress:' +
      '\n' +
      (inProgress || '-') +
      'Done:' +
      '\n' +
      (done || '-'),
  );
}
list.changeStatus = changeStatus;
list.addTask = addTask;
list.deleteTask = deleteTask;
list.showList = showList;
list.changeStatus('read book', 'in progress');
list.addTask('run');
list.deleteTask('read book');
list.showList();
