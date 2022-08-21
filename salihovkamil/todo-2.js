const STATUS = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
}
const list = {};
function changeStatus(task, newStatus) {
  if (task in list) {
    list[task] = newStatus;
    console.log('Вы успешно поменяли статус задачи!');
  }
  else{
    console.log('В списке нет такой задачи!');
  }
};
function addTask (task) {
  if (task != undefined) {
    list[task] = STATUS.TO_DO;
    console.log('Вы успешно добавили новую задачу!');
  }
  else{
    console.log('Вы не ввели задачу!');
  }
}
function deleteTask (task) {
  if (task in list) {
    delete list[task];
    console.log('Вы успешно удалили задачу!');
  }
  else{
    console.log('В списке нет такой задачи!');
  }
}
function showList () {
  for (let key in STATUS) {
    console.log(`${STATUS[key]}:`);
    for (let key1 in list) {
      if (list[key1] == STATUS[key]) {
        console.log(`    ${key1}`);
      }
    }
  }
}

addTask('strada');
addTask('1');
addTask('2');
addTask('3');
changeStatus('strada', STATUS.IN_PROGRESS);
changeStatus('1', STATUS.DONE);
deleteTask('2');
showList();