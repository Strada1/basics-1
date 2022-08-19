const list = {
   'create a new practice task': 'In Progress',
   'create a new practice task2': 'To Do',
   'create a new practice task3': 'In Progress',
   'create a new practice task4': 'To Do',
   'make a bed': 'To Do',
   'write a post': 'To Do',
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

   const defaultTaskStatus = 'To Do';

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
   }

}

function showList() {

   let resultTodo = `Todo:\n`;
   let resultProgress = 'in Progress:\n';
   let resultDone = 'Done: \n';

   for (key in list) {
      if (list[key] == 'To Do') {
         resultTodo += `   "${key}"\n`;
      } else if (list[key] == 'In Progress') {
         resultProgress += `   "${key}"\n`
      } else if (list[key] == 'Done') {
         resultDone += `   "${key}"\n`
      }
   }

   if (resultTodo == `Todo:\n`) {
      resultTodo += `   -\n`
   }
   if (resultProgress == 'in Progress:\n') {
      resultProgress += `   -\n`
   }
   if (resultDone == 'Done: \n') {
      resultDone += `   -\n`
   }


   console.log(resultTodo);
   console.log(resultProgress);
   console.log(resultDone);

}