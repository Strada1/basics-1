const LIST_STATUS = {
   TO_DO: 'To Do',
   IN_PROGRESS: 'In Progress',
   DONE: 'Done',
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
      list[taskKey] = taskNewStatus;
   } else {
      console.log(`Задачи ${taskKey} не существует, проверьте правильность ввдённой задачи!`);
   }

   console.log(`Статус задачи ${taskKey} успешно изменён на: ${taskNewStatus}.`);
}

function addTask(newTask) {

   const defaultTaskStatus = LIST_STATUS.TO_DO;

   if (list[newTask]) {
      console.log(`Задача ${newTask} уже существует и имеет статус: ${list[newTask]}`);
   } else {
      list[newTask] = defaultTaskStatus;
      console.log(`Задача ${newTask} успешно создана и имеет статус: ${defaultTaskStatus}`);
   }

}

function deleteTask(delTaskKey) {

   if (!list[delTaskKey]) {
      console.log(`Данной задачи ${delTaskKey} не сузествует, убедитесь в правильно введённой задачи!`);
   } else {
      delete list[delTaskKey];
      console.log(`Задачи ${delTaskKey} успешно удалена!`);
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

showList()