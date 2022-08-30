const PRIORITY = {
   LOW: 'low',
   MEDIUM: 'medium',
   HIGH: 'high',
}

const STATUSES = {
   TO_DO: 'To Do',
   IN_PROGRESS: 'In progress',
   DONE: 'Done',
}

const PRIORITY_LIST = Object.values(PRIORITY);
const STATUSES_LIST = [STATUSES.TO_DO, STATUSES.IN_PROGRESS, STATUSES.DONE];

const PRIORITY_ORDER = {
   [PRIORITY.LOW]: 0,
   [PRIORITY.MEDIUM]: 1,
   [PRIORITY.HIGH]: 2,
}

const TASK_LIST = [
   { name: 'create a post №1', status: STATUSES.DONE, priority: PRIORITY.HIGH, },
   { name: 'create a post №2', status: STATUSES.TO_DO, priority: PRIORITY.HIGH, },
   { name: 'create a post №3', status: STATUSES.DONE, priority: PRIORITY.LOW, },
   { name: 'create a post №4', status: STATUSES.TO_DO, priority: PRIORITY.LOW, },
   { name: 'create a post №5', status: STATUSES.TO_DO, priority: PRIORITY.MEDIUM, },
];

const findTask = name => TASK_LIST.find(task => task.name === name);
const { log } = console;

function changeStatus(title, taskStatus) {
   const task = findTask(title);
   const status = STATUSES_LIST.includes(taskStatus) ? taskStatus : null;

   if (task && status) {
      const oldStatus = task.status;
      task.status = status;
      log(`Статус задачи '${title}' изменён: ${oldStatus} > ${status}, и имеет приоритет "${task.priority}".`);
   } else if (!task) {
      log(`Такой задачи '${title}' не существует, убедитесь в правильности ввода либо ознакомтесь со списком задач showLost().`);
   } else if (!status) {
      log(`Введённый статус '${status}' недоступен, доступные статусы: '${STATUSES_LIST.join("' | '")}'.`);
   }
}

function changePriority(title, taskPriority) {
   const task = findTask(title);
   const priority = PRIORITY_LIST.includes(taskPriority) ? taskPriority : null;

   if (task && priority) {
      const oldPriority = task.priority;
      task.priority = priority;
      log(`Приоритет задачи '${title}' изменён: ${oldPriority} > ${task.priority}, и имеет статус "${task.status}".`);
   } else if (!task) {
      log(`Такой задачи '${title}' не существует, убедитесь в правильности ввода либо ознакомтесь со списком задач showLost().`);
   } else if (!priority) {
      log(`Введённый приоритет '${priority}' недоступен, доступные статусы: '${PRIORITY_LIST.join("' | '")}'.`);
   }
}

function addTask(title, priority = PRIORITY.LOW) {
   const task = findTask(title);

   if (task) {
      log(`Данная задача "${title}" уже существует!`);
      return;
   }

   TASK_LIST.push({ name: title, status: STATUSES.TO_DO, priority: priority });
   log(`Задача "${title}" успешно добавлена и имеет статсу "${STATUSES.TO_DO}" и приоритет "${priority}".`);
}

function deleteTask(title = 'Err: Укажите задачу!') {
   const task = findTask(title);
   const taskIndex = TASK_LIST.indexOf(task);

   if (task) {
      TASK_LIST.splice(taskIndex, 1)
      log(`Задача "${title}" успешно удалена`);
      return;
   }

   log(`Задачи "${title}" не существует, убедитесь в правильности ввода или ознакомтесь со списком задач: showLost()`);
}

function showList() {
   const sortedByStatus = {};

   STATUSES_LIST.forEach(status => {

      sortedByStatus[status] = TASK_LIST.filter(task => task.status === status);
      sortedByStatus[status].sort((a, b) => {
         const aObjWeight = PRIORITY_ORDER[a.priority];
         const bObjWeight = PRIORITY_ORDER[b.priority];
         return bObjWeight - aObjWeight;
      })
   })

   for (let key in sortedByStatus) {
      log(`${key}:`);

      if (sortedByStatus[key].length) {
         log(sortedByStatus[key].map(task => `\t${task.name} (${task.priority})`).join('\n'));
      } else {
         log('--none--');
      }
   }
}

showList()
log(`\n`);
changeStatus('create a post №5', STATUSES.IN_PROGRESS);
changeStatus('create a post №55', STATUSES.TO_DO);
changeStatus('create a post №5', 'To Dos');
log(`\n`);
changePriority('create a post №5', PRIORITY.HIGH);
changePriority('create a post №55', PRIORITY.HIGH);
changePriority('create a post №5', 'high5');
log(`\n`);
addTask('create a post №5');
addTask('create a post №55');
addTask('create a post №55 high', PRIORITY.HIGH);
addTask('create a post №55 med', PRIORITY.MEDIUM);
log(`\n`);
deleteTask('create a post №11');
deleteTask('create a post №55');
log(`\n`);
showList();