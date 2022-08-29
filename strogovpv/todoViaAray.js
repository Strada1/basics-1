const STATUS = {
  TO_DO: 'To-Do',
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
}
const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}
const REPORT = {
  STATUS_FAILED: `Выберите корректный статус для задачи вместо `,
  STATUS_CHANGED: `Статус задачи изменен на: `,
  NO_TASK: `Данной задачи нет в списке ваших дел`,
  TASK_ADDED: ` данная задача успешно добавлена в ваш список дел`,
  TASK_WAS_DELETED: ` данная задача была успешно удалена`
}

const list = [{
  name: 'TEST IN_PROGRESS1',
  status: STATUS.IN_PROGRESS,
  priority: PRIORITY.LOW,
},
{
  name: 'TEST IN_PROGRESS2',
  status: STATUS.IN_PROGRESS,
  priority: PRIORITY.LOW,
},
{
  name: 'TEST DONE',
  status: STATUS.DONE,
  priority: PRIORITY.HIGH,
},
{
  name: 'TEST DONE2',
  status: STATUS.DONE,
  priority: PRIORITY.HIGH,
},
{
  name: 'TEST TO_DO1',
  status: STATUS.TO_DO,
  priority: PRIORITY.HIGH,
},
{
  name: 'TEST TO_DO2',
  status: STATUS.TO_DO,
  priority: PRIORITY.HIGH,
} 
]

function taskFormater(task) {
  let taskFormed = task.toUpperCase();
  return taskFormed;
}

function checkStatus(status) {
  for (let isStatus in STATUS) {
    if (STATUS[isStatus] === status) { 
      return true;
    } 
  }
  return false;
}

function checkTask(task) {
  let pattern = task.toUpperCase();
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === pattern ) {
      return true; 
    }
  }
  return false
}

function addTask(task, status = STATUS.TO_DO, priority = PRIORITY.HIGH) {
  
  list.push( {
    name: taskFormater(task),
    status: status,
    priority: priority,
  })
  return taskFormater(task) + REPORT.TASK_ADDED;
}

function changeStatus(task, status) {
  let isStatus = checkStatus(status);
  let isTask = checkTask(task);
  let pattern = taskFormater(task);
  
  if (!isStatus) {
    return REPORT.STATUS_FAILED + status;
  }
  
  if (!isTask) {
    return REPORT.NO_TASK
  }
  
  return  `${pattern} ${REPORT.STATUS_CHANGED}  ${status}`
} 

function deleteTask(task) {
  let pattern = taskFormater(task);
  let isTask = checkTask(task);
  
  if (!isTask) {
    return console.log(REPORT.NO_TASK)
  }
  
  if (isTask) {
    let indexTaskForDelete = list.findIndex(indexTaskForDelete => indexTaskForDelete.name === pattern);
    list.splice(indexTaskForDelete, 1);
    return console.log(pattern + REPORT.TASK_WAS_DELETED)
  }
}

function showList() {
  for (let statusItem in STATUS){
    let out = `Задачи со статусом ${STATUS[statusItem]} \n`;
    for (let taskItem of list) {
      if (taskItem.status == STATUS[statusItem]) {
        out += `   ${taskItem.name} \n`;
      }
    }
    console.log(out);
  }
}

console.log (changeStatus("куПить нос", 'Все ок'));
console.log(changeStatus("куПить нос", STATUS.TO_DO));
console.log(addTask("купить носки"));
console.log(changeStatus("КУПИТЬ НОСКИ", STATUS.DONE));
console.log(changeStatus("купить носки", STATUS.TO_DO));

showList();
deleteTask('TEST DONe2')
deleteTask('TEST DONe2')
