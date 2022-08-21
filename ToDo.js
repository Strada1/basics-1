const STATUS_TODO = {
  TO_DO: 'to do',
  IN_PROGRESS: 'in progress',
  DONE: 'done',
};
const list = {
  'read book': STATUS_TODO.TO_DO,
  'learn JS': STATUS_TODO.IN_PROGRESS,
  'buy bread': STATUS_TODO.DONE,
};

function changeStatus(task, status) {
  if (task in list && status in STATUS_TODO) {
    list[task] = STATUS_TODO[status];
  } else console.log('Error change  task, status');
}
function addTask(task) {
  if (typeof task === 'string') {
    list[task] = STATUS_TODO.TO_DO;
  } else console.log('Error add  task');
}
function deleteTask(task) {
  if (task in list) {
    delete list[task];
  } else console.log('Error delete');
}
function showList() {
  let toDo = '';
  let inProgress = '';
  let done = '';
  for (let task in list) {
    switch (list[task]) {
      case STATUS_TODO.TO_DO:
        toDo += ` ${task},\n`;
        break;
      case STATUS_TODO.IN_PROGRESS:
        inProgress += ` ${task},\n`;
        break;
      case STATUS_TODO.DONE:
        done += ` ${task},\n`;
        break;
    }
  }
  console.log(
    `To do:\n${toDo || '-\n'}In progress:\n${inProgress || '-\n'}Done:\n${done || '-\n'}`,
  );
}

changeStatus('read book', 'IN_PROGRESS');
addTask('run');
deleteTask('');
showList();

// Need more comments and feedback - TY <3
