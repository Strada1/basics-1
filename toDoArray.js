const statusArr = {
    toDo: "To Do",
    inProgress: "In Progress",
    done: "Done"
}
  
const priorityArr = {
    low: "low",
    medium: "medium",
    high: "high",
}

const list = [ { name: "create a pos", status: statusArr.toDo, priority: priorityArr.high  }, 
               { name: "test", status: statusArr.inProgress, priority: priorityArr.medium  },
               { name: "go to the gym", status: statusArr.inProgress, priority: priorityArr.low  },
               { name: "закончить шоу лист", status: statusArr.toDo, priority: priorityArr.high  }
] 

function findIndex (nameTask){
  let result = list.findIndex(item => nameTask === item.name);
  return result;
}

function addTask(taskName, status, priority){
  let result = findIndex(taskName);
  if (result ==-1){
    list.push({name: taskName, status: status, priority: priority}) 
  } 
  else{
    console.log(`Задача: ${taskName} уже существует`)
  }
}

function changeStatus(taskName, status){
  let result = findIndex(taskName)
  if (result ==-1){
    console.log(`статус ${status} в задаче ${taskName} остался прежний`)
  }
  else{
    list[result].status=status;
  }
}

function changePriority(taskName, priority){
  let result = findIndex(taskName)
  if (result ==-1){
    console.log(`приоритет ${taskName} остался прежним - ${priority}`)
  }
  else{
    list[result].priority=priority;
  }
}

function deletTask(taskName){
  let result = findIndex(taskName)
  if (result ==-1){
    console.log(`Задачу:${taskName} отсутствует, выберете другую`)
  }
  else{
    return list.splice(result,1)
  }
}


function showList(){
  for (let status in statusArr){
    console.log(statusArr[status]);
    let filterResult = list.filter(item => item.status == statusArr[status])
    filterResult.map(item => console.log(`\t    ${item.name} `))
  }
}


// deletTask("test");
addTask("test1", statusArr.toDo, priorityArr.high);
changeStatus("go to the gym", statusArr.done);
changePriority("create a pos", priorityArr.low)
showList();
// console.log(list);

