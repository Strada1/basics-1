const TABULATION = "\t";

const ListStatuses = {
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done'
};

const ListPriority = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

const ErrorList = {
  STATUS_ERROR: 'Ошибка названия статуса',
  PRIORITY_ERROR: 'Ошибка названия приоритета',
  TASK_NAME_ERROR: 'Ошибка названия задачи',
  TASK_EXISTS_ERROR: 'Задача с таким именем уже существует',
  TASK_NOT_FIND_ERROR: 'Задача не найдена'
};

const list =  [] ;

// Проверка - является ли значение строкой
const isString = (value) => typeof value === 'string';

// Вывод ошибки
const outputError = (error) => Object.values(ErrorList).includes(error)
  ? console.log(error) : console.log('Неизвестная ошибка');

// Проверка, есть ли уже такая задача в списке
const findTask = (name) => list.find((task) => task.name === name);

// Поиск индекса задачи в списке
const findTaskIndex = (name) => list.findIndex((task) => task.name === name);

// Проверка, есть ли в списке приоритетов приоритет с таким значением
const findPriorityValue = (name) => Object.values(ListPriority).includes(name);

// Проверка, есть ли в списке статусов статус с таким значением
const findStatusValue = (name) => Object.values(ListStatuses).includes(name);

// Добавление задачи
const addTask = (name, priority = ListPriority.MEDIUM) => {
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
};

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
};

// Изменение приоритета задачи
const changePriority = (taskName, priority) => {
  const task = findTask(taskName);

  if (!task) {
    outputError(ErrorList.TASK_NOT_FIND_ERROR);
    return;
  }

  if (!findPriorityValue(priority)) {
    outputError(ErrorList.PRIORITY_ERROR);
    return;
  }

  task.priority = priority;
};

// Удаление задачи
const deleteTask = (name) => {
  if (findTaskIndex(name) === -1) {
    outputError(ErrorList.TASK_NOT_FIND_ERROR);
    return;
  }

  list.splice(findTaskIndex(name), 1);
};

// Выведение списка задач с заданным статусом
const showListByStatus = (status) => {
  if (!findStatusValue(status)) {
    outputError(ErrorList.STATUS_ERROR);
    return;
  }

  let count = 0;

  list.forEach((task) => {
    if (task.status === status) {
      console.log(`${TABULATION}${task.name} - ${task.priority}`);
      count++;
    }
  });

  if (!count) {
    console.log(`${TABULATION}-`);
  }
};

// Выведение списка задач
const showList = () => {
  for (let status of Object.values(ListStatuses)) {
    console.log(`${status}: `);
    showListByStatus(status);
  }
};


addTask('Погулять', ListPriority.HIGH);
addTask('Побриться', );
addTask('Почитать', ListPriority.LOW);
addTask('Почистить зубы');
addTask('Написать программу');

showList();
console.log('-------------------');

changeStatus('Погулять', ListStatuses.DONE);
changePriority('Написать программу', ListPriority.HIGH);
changeStatus('Написать программу', ListStatuses.IN_PROGRESS);

showList();
console.log('-------------------');

deleteTask('Побриться');
changePriority(undefined, ListPriority.LOW)
deleteTask('Побриться');

showList();
