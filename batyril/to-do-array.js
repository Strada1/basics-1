const TASK_STATUS = {
  DONE: 'Done',
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
};

const TASK_ERROR = {
  TASK_INCORRECT: 'Ошибка, напишите задачу заново',
  TASK_NOT_FOUND: 'Ошибка, задача не найдена',
  STATUS_NOT_FOUND: 'Ошибка, напишите статус заново',
  TASK_ADDED: 'Задача добавлена',
  TASK_USED: 'Такая задача уже есть',
  STATUS_CHANGED: 'статус изменен',
  TASK_DELETED: 'Задача удалена',

}
const TASK_PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}

const listArr = [{ name: 'finish course', status: 'In Progress', priority: 'high' },
  { name: 'cook lunch', status: 'In progress', priority: 'low' },
  { name: 'go for a walk', status: 'To Do', priority: 'low' },
  { name: 'did to do', status: 'Done', priority: 'low' },
];

function changeStatus(task, status = TASK_STATUS.TO_DO) {
  if (typeof task !== 'string' || task.trim().length === 0) {
    return TASK_ERROR.TASK_INCORRECT;
  }

  let checkStatus;
  for (let key in TASK_STATUS) {
    if (TASK_STATUS[key] === status) {
      checkStatus = true;
      break
    }
  }

  if (!checkStatus) {
    return TASK_ERROR.STATUS_NOT_FOUND;
  }

  const indexTask = listArr.findIndex((item) => item.name === task);

  if (indexTask !== -1) {
    listArr[indexTask].status = status;
    return TASK_ERROR.STATUS_CHANGED;
  } else {
    return TASK_ERROR.TASK_NOT_FOUND;
  }
}

function addTask(task, status = TASK_STATUS.TO_DO, priority = TASK_PRIORITY.LOW) {
  if (typeof task !== 'string' || task.trim().length === 0) {
    return TASK_ERROR.TASK_NOT_FOUND;
  }

  const indexTask = listArr.findIndex((item) => item.name === task);

  if (indexTask !== -1) {
    return TASK_ERROR.TASK_USED;
  } else {
    listArr.push({ name: task, status, priority });
    return TASK_ERROR.TASK_ADDED;
  }
}

function deleteTask(task) {
  if (typeof task !== 'string' || task.trim().length === 0) {
    return TASK_ERROR.TASK_INCORRECT;
  }

  const indexTask = listArr.findIndex((item) => item.name === task);

  if (indexTask !== -1) {
    listArr.splice(indexTask, 1);
    return TASK_ERROR.TASK_DELETED;
  } else {
    return TASK_ERROR.TASK_NOT_FOUND;
  }
}

function showList() {
  let result = '';
  for (const key in TASK_STATUS) {
    result += `${TASK_STATUS[key]}:\n`;
    const statusArr = listArr
      .filter((item) => TASK_STATUS[key] === item.status)
      .map((item) => item.name);
    result += `\t-${statusArr}\n`;
  }
  return result;
}
