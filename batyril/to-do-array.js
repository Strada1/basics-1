const TASK_STATUS = {
  DONE: 'Done',
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
};

const listArr = [{ name: 'finish course', status: 'In Progress', priority: 'high' },
  { name: 'cook lunch', status: 'In progress', priority: 'low' },
  { name: 'go for a walk', status: 'To Do', priority: 'low' },
  { name: 'did to do', status: 'Done', priority: 'low' },
];

function changeStatus(task, status = TASK_STATUS.TO_DO) {
  if (typeof task !== 'string' || task.trim().length === 0) {
    return 'Ошибка, напишите задачу заново';
  }

  const checkStatus = status === TASK_STATUS.DONE
    || status === TASK_STATUS.IN_PROGRESS || status === TASK_STATUS.TO_DO;
  if (!checkStatus) {
    return 'Ошибка, напишите статус заново';
  }

  const indexTask = listArr.findIndex((item) => item.name === task);

  if (indexTask !== -1) {
    listArr[indexTask].status = status;
    return 'статус изменен';
  } else {
    return 'Ошибка, задача не найдена';
  }
}

function addTask(task, status = TASK_STATUS.TO_DO, priority = 'low') {
  if (typeof task !== 'string' || task.trim().length === 0) {
    return 'Ошибка, напишите задачу заново';
  }

  const indexTask = listArr.findIndex((item) => item.name === task);

  if (indexTask !== -1) {
    return 'Такая задача уже есть';
  } else {
    listArr.push({ name: task, status, priority });
    return 'Задача добавлена';
  }
}

function deleteTask(task) {
  if (typeof task !== 'string' || task.trim().length === 0) {
    return 'Ошибка, напишите задачу заново';
  }

  const indexTask = listArr.findIndex((item) => item.name === task);

  if (indexTask !== -1) {
    listArr.splice(indexTask, 1);
    return 'Задача удалена';
  } else {
    return 'Задача не найдена';
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
