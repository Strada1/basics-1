const STATUS = {
  TO_DO: 'To Do',
  DONE: 'Done',
  IN_PROGRESS: 'In Progress'
}
const list = {
  "create a new practice task": STATUS.IN_PROGRESS,
  "make a bed": STATUS.DONE,
  "write a post": STATUS.TO_DO,
  "call Bob": STATUS.TO_DO,
}

function changeStatus(task, status) {
  if (list[task] === undefined) return `Задачи "${task}" нет в списке ваших дел`;
  for (let key in STATUS) {
    if (STATUS[key] === status) {
      list[task] = status;
      return `Статус задачи "${task}" изменен на ${status}`;
    }
  }
  return `Неверно задан статус задачи`;
}

function addTask(task) {
  if (list[task] === undefined) {
    list[task] = STATUS.TO_DO;
    return `Задача "${task}" успешно добавлена в список ваших дел`;
  }
  return `Задача "${task}" уже существует в списке ваших дел`;
}

function deleteTask(task) {
  if (list[task] === undefined) {
    return `Задачи "${task}" не было в списке ваших дел`;
  }
  delete list[task];
  return `Задача "${task}" была успешно удалена из списка ваших дел`;
}

function showList() {
  let outToDo = 'Todo:\n';
  let inProgress = 'In Progress:\n';
  let outDone = 'Done:\n';

  for (let key in list) {
    switch (list[key]) {
      case STATUS.TO_DO:
        outToDo += `  "${key}", \n`;
        continue
      case STATUS.IN_PROGRESS:
        inProgress += `  "${key}", \n`;
        continue
      case STATUS.DONE:
        outDone += `  "${key}", \n`;
        continue
    }
  }

  if (outToDo === `Todo:\n`) outToDo = `Todo:  \n  -\n`;
  if (inProgress === `In Progress:\n`) inProgress = `In Progress: \n  -\n`;
  if (outDone === `Done:\n`) outDone = `Done:  \n  -\n`;
  return `${outToDo}${inProgress}${outDone}`
}

console.log(addTask('make a bed'));
console.log(deleteTask('make a bed'));
console.log(addTask('make a bed'));
console.log(changeStatus('write a post', STATUS.DONE))
console.log(showList());
console.log(changeStatus('write a post', 'In Progress'))
console.log(showList());
console.log(changeStatus("create a new practice task", "To Do"));
console.log(deleteTask('call Bob'));
console.log(showList());
console.log(deleteTask("create a new practice task"));
console.log(deleteTask("make a bed"));
console.log(deleteTask("make a bed"));
console.log(deleteTask('write a post'));
console.log(showList());

