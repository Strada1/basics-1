const tasks = {
   TASK_TO_DO : 'To do',
   TASK_IN_PROGRESS : 'In progress',
   TASK_DONE : 'Done'
}

const errors = {
   NO_TASK : 'Нет такой задачи!',
   HAVE_TASK : 'Такая задача уже есть!'
}

const list = {
   ToEat : tasks['TASK_TO_DO'],
   ToDance : tasks['TASK_TO_DO'],
   ToFly : tasks['TASK_TO_DO'],
   ToLearnJs : tasks['TASK_IN_PROGRESS'],
   ToWork : tasks['TASK_DONE'],
}

function changeStatus (task,taskStatus) {
  if (task in list) {
   list[task] = taskStatus;
  } else {
   console.log (errors.NO_TASK)
  }
}

function addTask (task) {
   if (task in list){
      return console.log(errors.HAVE_TASK)
   } else {
      list[task] = tasks['TASK_TO_DO'];
   }
}

function deleteTask (task) {
   if (task in list){
     delete list[task]
   } else {
     return console.log(errors.NO_TASK)
   }
}

function showList () {
   let to_do = '';
   let in_progress = '';
   let done = '';
   let no_result = '\n\t -'

   for(let task in list) {
      if (list[task] === tasks['TASK_TO_DO']){
        to_do = to_do + '\n\t' + task
      }
   }
   if (to_do === ''){
      console.log(`To Do:${no_result}`)
   } else {
      console.log(`To Do:${to_do}`)
   }

   for(let task in list) {
      if (list[task] === tasks['TASK_IN_PROGRESS']){
         in_progress= in_progress + '\n\t' + task
      }
   }
   if (in_progress === ''){
      console.log(`In_Progress:${no_result}`)
   } else {
      console.log(`In_Progress:${in_progress}`)
   }
   
   for(let task in list) {
      if (list[task] === tasks['TASK_DONE']){
         done = done + '\n\t' + task
      }
   }
   if (done === ''){
      console.log(`Done:${no_result}`)
   } else {
      console.log(`Done:${done}`)
   }

}


changeStatus('ToWork', tasks['TASK_IN_PROGRESS']);
addTask('ToRelax');
deleteTask('ToFly');
showList()
