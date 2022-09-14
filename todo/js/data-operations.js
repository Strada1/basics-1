import { list, ListPriority, ListStatuses } from './data.js';
import { ErrorList, outputError } from './error.js';
import { isString } from './util.js';

// Проверка, есть ли уже такая задача в списке
const findTask = (name) => list.find((task) => task.name === name);

// Поиск индекса задачи в списке
const findTaskIndex = (name) => list.findIndex((task) => task.name === name);

// Проверка, есть ли в списке приоритетов приоритет с таким значением
const findPriorityValue = (name) => Object.values(ListPriority).includes(name);

// Проверка, есть ли в списке статусов статус с таким значением
const findStatusValue = (name) => Object.values(ListStatuses).includes(name);


// Изменение статуса задачи
const changeStatus = (taskName, status) => {
  const task = findTask(taskName);

  if (!task) {
    outputError(ErrorList.TASK_NOT_FIND_ERROR);
    return;
  }

  if (!findStatusValue(status)) {
    outputError(ErrorList.STATUS_ERROR);
    return;
  }

  task.status = status;
  return true;
};


// Удаление задачи
const deleteTask = (name) => {
  if (findTaskIndex(name) === -1) {
    outputError(ErrorList.TASK_NOT_FIND_ERROR);
    return;
  }

  list.splice(findTaskIndex(name), 1);
  return true;
};


// Добавление задачи
const addTask = (name, priority = ListPriority.LOW) => {
  if (!isString(name)) {
    outputError(ErrorList.TASK_NAME_ERROR);
    return;
  }

  if (!isString(priority) || !findPriorityValue(priority)) {
    outputError(ErrorList.PRIORITY_ERROR);
    return;
  }

  if(findTask(name)) {
    outputError(ErrorList.TASK_EXISTS_ERROR);
    return;
  }

  list.push({
    name,
    status: ListStatuses.TODO,
    priority
  });

  return true;
};


export { findPriorityValue, addTask, deleteTask, changeStatus };
