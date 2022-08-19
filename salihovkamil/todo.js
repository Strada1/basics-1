const status = {
  todo: 'To Do',
  inProgress: 'In progress',
  done: 'Done',
}
const list = {};
list.changeStatus = function(task, stat) {
  this[task] = stat;
};
list.addTask = function (task) {
  this[task] = 'To Do';
};
list.deleteTask = function (task) {
  delete this[task];
};
list.showList = function (obj) {
  
  for (let key in obj) {
    console.log(`${obj[key]}:`);
    for (let key1 in list) {
      if (list[key1] == obj[key] && typeof (list[key1]) != 'function') {
        console.log(`    ${key1}`);
      }
    }
  }
}
list.addTask('strada');
list.addTask('1');
list.addTask('2');
list.addTask('3');
list.changeStatus('strada', status.inProgress);
list.changeStatus('1', status.done);
list.deleteTask('2');
list.showList(status);