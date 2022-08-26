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

const list =  [] ;


const isString = (value) => typeof value === 'string';

// Проверка, есть ли уже такая задача в списке
const findTask = (name) => list.find((task) => task.name === name);

// Поиск индекса задачи в списке
const findTaskIndex = (name) => list.findIndex((task) => task.name === name);

// Проверка, есть ли в списке приоритетов приоритет с таким значением
const findPriorityValue = (name) => Object.values(ListPriority).includes(name);

// Проверка, есть ли в списке статусов статус с таким значением
const findStatusValue = (name) => Object.values(ListStatuses).includes(name);

const addTask = (name, priority = ListPriority.MEDIUM) => {
  if (isString(name) && isString(priority) && !findTask(name)) {
    priority = findPriorityValue(priority) ? priority : ListPriority.MEDIUM;
    list.push({
      name,
      status: ListStatuses.TODO,
      priority
    });
  } else {
    console.log('Ошибка добавления.');
  }
};

const changeStatus = (taskName, status) => {
  const task = findTask(taskName);
  if (task && findStatusValue(status)) {
    task.status = status;
  }
};

const changePriority = (taskName, priority) => {
  const task = findTask(taskName);
  if (task && findPriorityValue(priority)) {
    task.priority = priority;
  }
};

const deleteTask = (name) => {
  if (findTaskIndex(name) > -1) {
    list.splice(findTaskIndex(name), 1);
  }
};

const showListByStatus = (status) => {
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

changeStatus('Погулять', ListStatuses.DONE);
changePriority('Написать программу', ListPriority.HIGH);
changeStatus('Написать программу', ListStatuses.IN_PROGRESS);

showList();

deleteTask('Побриться');
changePriority(undefined, ListPriority.LOW)
deleteTask(undefined);

showList();
