const list = {
  'read book': 'to begin',
  'learn JS': 'in progress',
  'buy bread': 'complete',
};
function changeStatus(task, status) {
  list[task] = status;
}
function addTask(task) {
  list[task] = 'to begin';
}
function deleteTask(task) {
  delete list[task];
}
function showList() {
  let result = '';
  for (let task in list) {
    result = result + task + ': ' + list[task] + '\n';
  }
  return result;
}
changeStatus('read book', 'in progress');
addTask('run');
deleteTask('buy bread');
console.log(showList());
// ToDo on .This
const list = {
  'read book': 'to begin',
  'learn JS': 'in progress',
  'buy bread': 'complete',
};
function changeStatus(task, status) {
  this[task] = status;
}
function addTask(task) {
  this[task] = 'to begin';
}
function deleteTask(task) {
  delete this[task];
}
function showList() {
  let result = '';
  for (let task in this) {
    if (typeof this[task] === 'string') {
      result = result + task + ': ' + this[task] + '\n';
    }
  }
  return result;
}
list.changeStatus = changeStatus;
list.addTask = addTask;
list.deleteTask = deleteTask;
list.showList = showList;
list.changeStatus('read book', 'in progress');
list.addTask('run');
list.deleteTask('buy bread');
console.log(list.showList());
