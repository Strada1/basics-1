const STATUS__TODO = {
  'to begin': 'to begin',
  'in progress': 'in progress',
  complete: 'complete',
};
const list = {
  'read book': STATUS__TODO['to begin'],
  'learn JS': STATUS__TODO['in progress'],
  'buy bread': STATUS__TODO['complete'],
};

function changeStatus(task, status) {
  if (task in list && status in STATUS__TODO) {
    this[task] = STATUS__TODO[status];
  }
}
function addTask(task) {
  if (typeof task === 'string') {
    this[task] = STATUS__TODO['to begin'];
  }
}
function deleteTask(task) {
  if (task in list) {
    delete this[task];
  }
}
function showList() {
  let result = '';
  for (let task in this) {
    if (typeof this[task] === 'string') {
      result = result + task + ': ' + this[task] + '\n';
    }
  }
  console.log('ToDo list' + '\n' + result);
}
list.changeStatus = changeStatus;
list.addTask = addTask;
list.deleteTask = deleteTask;
list.showList = showList;
list.changeStatus('read book', 'in progress');
list.addTask('run');
list.deleteTask('buy bread');
list.showList();
