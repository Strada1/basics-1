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
  try {
    const task = findTask(taskName);

    if (!task) {
      throw new Error(ErrorList.TASK_NOT_FIND_ERROR);
    }

    if (!findStatusValue(status)) {
      throw new Error(ErrorList.STATUS_ERROR);
    }

    task.status = status;
    return true;
  } catch (err) {
    console.log(err.message);
    return;
  }
};


// Удаление задачи
const deleteTask = (name) => {
  try {
    if (findTaskIndex(name) === -1) {
      throw new Error(ErrorList.TASK_NOT_FIND_ERROR);
    }

    list.splice(findTaskIndex(name), 1);
    return true;
  } catch (err) {
    console.log(err.message);
    return;
  }
};


// Добавление задачи
const addTask = (name, priority = ListPriority.LOW) => {
  try {
    if (!isString(name)) {
      throw new Error(ErrorList.TASK_NAME_ERROR);
    }

    if (!isString(priority) || !findPriorityValue(priority)) {
      throw new Error(ErrorList.PRIORITY_ERROR);
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
  } catch (err) {
    console.log(err.message);
    return;
  }
};


export { findPriorityValue, addTask, deleteTask, changeStatus };
