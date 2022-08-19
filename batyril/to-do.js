const TASK_STATUS = {
  DONE: 'Done',
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress'
}

const taskList = {
  'change Status': 'Done',
  'add task': 'Done',
  'delete task': 'Done',
  'show list': 'To Do',
}

function changeStatus(task, status) {
    const checkTask = taskList[task] === undefined
    if(checkTask) {
      return 'The task was not found, try again'
    }

    if(checkingStatus(status)){
      taskList[task] = status;
      return
    }

    return 'Status not found, try again'
}

function addTask(task, status =  TASK_STATUS.TO_DO ) {

  if(checkingStatus(status)){
    taskList[task] = status;
    return
  }
  return 'Status not found, try again'
}

function deleteTask(task) {
  const checkTask = taskList[task] === undefined
  if(checkTask) {
    return 'The task was not found, try again'
  }
  delete taskList[task]
}


function showList(Obj) {
  let string = '';
  for(let task in Obj) {
    string += `task: ${task},  status: ${Obj[task]} \n`
 }
  return string
}

function checkingStatus(status){
  const checkStatus = status === TASK_STATUS.DONE || status === TASK_STATUS.IN_PROGRESS || status === TASK_STATUS.TO_DO;
  if(!checkStatus) {
    return checkStatus
  }
  return checkStatus
}


console.log(changeStatus('chan534ge Status','To Do'));
console.log(changeStatus('change Status','To D53o'));
console.log(changeStatus('change Status','To Do'));

console.log(addTask('Submit for review'))
console.log(addTask('Submit for review','dfg'))
console.log(addTask('Submit for review','Done'))

console.log(deleteTask('4234gfdsfg'));
console.log(deleteTask('delete task'));

console.log(showList(taskList));




