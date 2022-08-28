const LIST_PRIORITY = [
   'low',
   'medium',
   'high',
];

const LIST_STATUS = [
   'To Do',
   'In progress',
   'Done',
]

const LIST = [
   { name: 'create a post №1', status: LIST_STATUS[2], priority: LIST_PRIORITY[2], },
   { name: 'create a post №2', status: LIST_STATUS[0], priority: LIST_PRIORITY[2], },
   { name: 'create a post №3', status: LIST_STATUS[2], priority: LIST_PRIORITY[0], },
   { name: 'create a post №4', status: LIST_STATUS[0], priority: LIST_PRIORITY[0], },
   { name: 'create a post №5', status: LIST_STATUS[0], priority: LIST_PRIORITY[1], },
];

function changeStatus(taskKey, taskNewStatus) {

   let task = LIST.find(item => item.name === taskKey);
   let status = LIST_STATUS.includes(taskNewStatus);

   if (task && status) {

      console.log(`Статус задачи '${taskKey}' изменён: ${task.status} > ${taskNewStatus}, и имеет приоритет "${task.priority}".`);
      return task.status = taskNewStatus;

   } else if (!task) {

      return console.log(`Такой задачи '${taskKey}' не существует, убедитесь в правильности ввода либо ознакомтесь со списком задач showLost().`);

   } else if (!status) {

      return console.log(`Введённый статус '${taskNewStatus}' недоступен, доступные статусы: '${LIST_STATUS.join("' | '")}'.`);

   }

}

function changePriority(taskKey, taskNewPriority) {

   let task = LIST.find(item => item.name === taskKey);
   let priority = LIST_PRIORITY.includes(taskNewPriority);

   if (task && priority) {

      console.log(`Приоритет задачи '${taskKey}' изменён: ${task.priority} > ${taskNewPriority}, и имеет статус "${task.status}".`);
      return task.priority = taskNewPriority;

   } else if (!task) {

      return console.log(`Такой задачи '${taskKey}' не существует, убедитесь в правильности ввода либо ознакомтесь со списком задач showLost().`);

   } else if (!priority) {

      return console.log(`Введённый приоритет '${taskNewPriority}' недоступен, доступные статусы: '${LIST_PRIORITY.join("' | '")}'.`);

   }

}

function addTask(newTask) {

   const defaultStatus = LIST_STATUS[0];
   const defaultPriority = LIST_PRIORITY[0];

   let taskCheck = LIST.find(item => item.name === newTask);

   if (!taskCheck) {
      LIST.push({ name: newTask, status: defaultStatus, priority: defaultPriority });
      return console.log(`Задача "${newTask}" успешно добавлена и имеет статсу "${defaultStatus}" и приоритет "${defaultPriority}".`);
   }

   return console.log(`Данная задача "${newTask}" уже существует!`);

}

function deleteTask(delTaskKey = 'Err: Укажите задачу!') {

   let taskCheck = LIST.find(item => item.name === delTaskKey);

   if (!taskCheck) {
      return console.log(`Задачи "${delTaskKey}" не существует, убедитесь в правильности ввода или ознакомтесь со списком задач: showLost()`);
   }

   LIST.find((item, index) => {

      if (item.name === delTaskKey) {
         console.log(`Задача "${delTaskKey}" успешно удалена`);
         return LIST.splice(index, 1)
      }
   })

}

function showList() {

   LIST_STATUS.map(status => {

      let count = 0;

      console.log(`${status}:\n`);

      LIST.forEach(item => {

         if (item.status === status) {
            ++count;
            console.log(`\t'${item.name} > priority: ${item.priority}'\n`);
         }

      });

      if (count == 0) console.log(`\t-\n`);

   })

}

showList()
console.log(`\n`);
changeStatus('create a post №5', 'In progress');
changeStatus('create a post №55', 'To Do');
changeStatus('create a post №5', 'To Dos');
console.log(`\n`);
changePriority('create a post №5', 'high');
changePriority('create a post №55', 'high');
changePriority('create a post №5', 'high5');
console.log(`\n`);
addTask('create a post №5');
addTask('create a post №55');
console.log(`\n`);
deleteTask('create a post №11');
deleteTask('create a post №55');
console.log(`\n`);
showList()
