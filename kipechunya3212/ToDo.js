const STATUS = {
    TO_DO: 'TO_DO',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
  };

const PRIORITY = {
    HIGH : 'HIGH',
    MEDIUM : 'MEDIUM',
    LOW : 'LOW',
}

const DEFAULT_PRIORITY = PRIORITY.LOW;
const DEFAULT_STATUS = STATUS.TO_DO;

let taskList = [ 
{ name: 'create a post',
  status: 'IN_PROGRESS',
  priority: 'LOW'  },

{ name: 'test',
  status: 'DONE',
  priority: 'HIGH',  }, 

{ name : 'clear',
  status : 'TO_DO',
  priority : 'MEDIUM',},

] 

function addTask (newTask) {
  if (matchCheck(newTask) == -1) {
    taskList.push({
      name : newTask,
      status : DEFAULT_STATUS,
      priority : DEFAULT_PRIORITY});
  } else {
    return console.log('Task already added')
  }
}

function changeStatus (taskName, newStatus) {
    if (matchCheck(taskName) != -1) {
      taskList[matchCheck(taskName)].status = newStatus;
}   else {
      return console.log('Invalid task name, please repeat');
  }
}

function changePriority (taskName, newPriority) {
  if (matchCheck(taskName) != -1) {
    taskList[matchCheck(taskName)].priority = newPriority;
}   else {
      return console.log('Invalid priority name, please repeat');
  }
}

function deleteTask (deleteTask) {
  if (matchCheck(deleteTask) != -1) {
      return taskList.splice(matchCheck(deleteTask), 1);
  } else {
      return console.log('no such task was found');
  }
}
  
function showList() {
  console.log("TO_DO:");
  taskList.forEach(item => {
      if (item.status == "TO_DO") {
      console.log(`   - ${item.name} (priority ${item.priority})`); }
  });
  console.log("IN_PROGRESS:");
  taskList.forEach(item => {
      if (item.status == "IN_PROGRESS") {
      console.log(`   - ${item.name} (priority ${item.priority})`); }
  });
  console.log("DONE:");
  taskList.forEach(item => {
      if (item.status == "DONE") {
      console.log(`   - ${item.name} (priority ${item.priority})`); }
  });
}


function matchCheck (task) {
  return taskList.findIndex(item => item.name == task);
}


changeStatus('create a post', 'DONE');
showList()
