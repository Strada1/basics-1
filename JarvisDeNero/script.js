const LIST_STATUS = {
   TO_DO: 'To Do',
   IN_PROGRESS: 'In Progress',
   DONE: 'Done',
   toString() {
      let resStr = '';
      for (let key in LIST_STATUS) {
         if (typeof (LIST_STATUS[key]) != 'function') {
            resStr += `\t'${LIST_STATUS[key]}';\n`;
         }
      }
      return resStr;
   },
}

const list = {
   'create a new practice task': LIST_STATUS.IN_PROGRESS,
   'create a new practice task2': LIST_STATUS.TO_DO,
   'create a new practice task3': LIST_STATUS.IN_PROGRESS,
   'create a new practice task4': LIST_STATUS.TO_DO,
   'make a bed': LIST_STATUS.TO_DO,
   'write a post': LIST_STATUS.TO_DO,
}

function changeStatus(taskKey, taskNewStatus) {

   if (list[taskKey]) {

      switch (taskNewStatus) {
         case LIST_STATUS.IN_PROGRESS:
         case LIST_STATUS.TO_DO:
         case LIST_STATUS.DONE:
            list[taskKey] = taskNewStatus;
            return console.log(`Статус задачи "${taskKey}" успешно изменён на: "${taskNewStatus}".`);
         default:
            console.log(`Указанный Вами статус "${taskNewStatus} недоступен, укажите пожалуста один из предложенных вариантов:\n${LIST_STATUS}`);
      }

   } else {
      console.log(`Задача "${taskKey}" не существует, проверьте правильность ввдённой задачи!`);
   }

}

function addTask(newTask) {

   const defaultTaskStatus = LIST_STATUS.TO_DO;

   if (list[newTask]) {
      console.log(`Задача "${newTask}" уже существует и имеет статус: "${list[newTask]}"`);
   } else {
      list[newTask] = defaultTaskStatus;
      console.log(`Задача "${newTask}" успешно создана и имеет статус: "${defaultTaskStatus}"`);
   }

}

function deleteTask(delTaskKey) {

   if (!list[delTaskKey]) {
      console.log(`Данной задачи "${delTaskKey}" не существует, убедитесь в правильности введённой задачи!`);
   } else {
      delete list[delTaskKey];
      console.log(`Задача "${delTaskKey}" успешно удалена!`);
   }

}

function showList() {

   let resultTodo = `${LIST_STATUS.TO_DO}:\n`;
   let resultProgress = `${LIST_STATUS.IN_PROGRESS}:\n`;
   let resultDone = `${LIST_STATUS.DONE}:\n`;

   for (key in list) {
      if (list[key] == LIST_STATUS.TO_DO) {
         resultTodo += `   "${key}"\n`;
      } else if (list[key] == LIST_STATUS.IN_PROGRESS) {
         resultProgress += `   "${key}"\n`
      } else if (list[key] == LIST_STATUS.DONE) {
         resultDone += `   "${key}"\n`
      }
   }

   if (resultTodo == `${LIST_STATUS.TO_DO}:\n`) {
      resultTodo += `   -\n`
   }
   if (resultProgress == `${LIST_STATUS.IN_PROGRESS}:\n`) {
      resultProgress += `   -\n`
   }
   if (resultDone == `${LIST_STATUS.DONE}:\n`) {
      resultDone += `   -\n`
   }

   console.log(resultTodo);
   console.log(resultProgress);
   console.log(resultDone);

}