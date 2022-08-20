const TASK_STATUS = {
  DONE: 'Done',
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress'
}

const list = {
  "create a new practice task": "Done",
  "make a bed": "Done",
  "write a post": "To Do",
  "go to school": "In Progress",
}

function changeStatus(task, status) {
  if(task in list){
    list[task] = status;
  }
  console.log('The task was not found, try again');
}

function addTask(task){
  list[task] = TASK_STATUS.TO_DO
}

function deleteTask(task) {
  if(task in list){
    delete list[task]
  }
  console.log('The task was not found, try again');
}

function showList() {
  let result = '';
  result += getTask(TASK_STATUS.TO_DO)
  result += getTask(TASK_STATUS.IN_PROGRESS)
  result += getTask(TASK_STATUS.DONE)
  return result
}

function getTask(status) {
  let string = `${status}:\n`;
  for (let key in list) {
    if (list[key] === status) {
      string += `\t \"${key}\", \n`
    }
  }
  return string
}

changeStatus('write 64a post', 'Done');
changeStatus('write a post', 'Done');
addTask('go to school');
deleteTask("make a bed");
deleteTask("make a 234bed");

console.log(showList());


console.log(list)
