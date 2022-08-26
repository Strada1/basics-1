const STATUS = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
}

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high'
}

const list = [{ name: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW }]

function getId(task) {
  return list.findIndex(function (item) { return item.name == task })
}

function sortList() {
  list.sort(function (a, b) {
    if (a.priority > b.priority) return 1;
    if (a.priority == b.priority) return 0;
    if (a.priority < b.priority) return -1;

  })
}

function changeStatus(task, status) {
  let id

  if (task != undefined && status != undefined) {
    id = getId(task);
  }
  else {
    return 'Не введены задача или статус!'
  }

  if (id != -1) {
    list[id].status = status;
    console.log('Сменён статус задачи');
  }
  else {
    return 'Такой задачи нет в списке!'
  }
}

function addTask(task, priority) {
  if (task != undefined && priority != undefined) {
    list.push({ name: task, status: STATUS.TO_DO, priority: priority });
    sortList();
    console.log('Добавлена новая задача!');
  }
  else {
    return 'Не введены задача или ее приоритет!'
  }

}

function deleteTask(task) {
  let id
  if (task != undefined) {
    id = getId(task);
  }
  else ('Не введена задача!')

  if (id != -1) {
    list.splice(id, 1);
    console.log('Успешно удалена задача!');
  }
  else {
    console.log('Такой задачи нет в списке!');
  }
}

function showList() {
  if (list.length > 0) {
    for (let key in STATUS) {
      console.log(`${STATUS[key]}:`);
      list.forEach(function (item) {
        if (item.status == STATUS[key]) {
          console.log(`    ${item.name}. Priority: ${item.priority}`);
        }
      })
    }
  }
  else {
    console.log('В списке нет задач!');
  }
}

addTask('strada', PRIORITY.HIGH);
addTask('sport', PRIORITY.LOW);
addTask('shopping', PRIORITY.LOW);
addTask('work', PRIORITY.HIGH);
changeStatus('strada', STATUS.IN_PROGRESS);
changeStatus('sport', STATUS.DONE);
deleteTask('shopping');
showList();