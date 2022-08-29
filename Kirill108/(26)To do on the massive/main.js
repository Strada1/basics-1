const STATUS  = {
  TO_DO: "To Do",
  In_Progress: "In Progress",
  Done: "Done",
}

const PRIORITY = {
  High: "high",
  Medium: "medium",
  Low: "low",
}

const list = [  
  {
    Name: 'chat with mom', 
    status: STATUS.In_Progress,
    priority: PRIORITY.Low,
  },

  {
    Name: 'test', 
    status: STATUS.Done,
    priority: PRIORITY.High, 
  },
];

function addTask(task, status, priority) {
  let MyObj = list.find(function(item) {
    return item.Name == task;
  })
  
  if(list[MyObj] === list[MyObj]) {
    console.log("Уже есть такая задача")
  } else {
      list.push({Name: task,
      status: status,
      priority: priority,})  
  } 
}

function changeStatus(task, NewStatus) {
   let MyObj = list.find(function(item) {
   return item.Name == task;
   })

   MyObj.status = NewStatus;
}

function changePriority(task, NewPriopity) {
  let MyObj = list.find(function(item) {
    return item.Name == task;
  })

  MyObj.priority = NewPriopity;
}

function deleteTask(task) {
  let IndexObj = list.findIndex(function(item) {
    return item.Name == task;
  })

  list.splice(IndexObj, 1)
}

function showList() {

  let GroupTO_Do = ``;
  let GroupIn_Progress= ``;
  let Group_Done = ``;

  let objTodo = list.filter(function(item){
    return item.status == STATUS.TO_DO;
  })
  
  objTodo.forEach(function(item){
    GroupTO_Do += `\n \t ${item.Name} \n \t \t Приоритет: ${item.priority}`
  })

  let objIn_Progress = list.filter(function(item){
    return item.status == STATUS.In_Progress;
  })

  objIn_Progress.forEach(function(item){
    GroupIn_Progress += `\n \t ${item.Name}\n \t \t Приоритет:  ${item.priority}`
  })

  let objDone = list.filter(function(item){
    return item.status == STATUS.Done;
  })

  objDone.forEach(function(item){
    Group_Done += `\n \t ${item.Name}\n \t \t Приоритет: ${item.priority}`
  })
  
  if (GroupTO_Do == false) {
    console.log('Todo: \n \t -')
  } else {
    console.log(`\n Todo:  ${GroupTO_Do}`)
  }

  if (GroupIn_Progress == false) {
    console.log('In progress: \n \t -')
  } else {
    console.log(`\n In progress:  ${GroupIn_Progress}`)
  }
 
  if (Group_Done == false) {
    console.log('Done: \n \t -')
  } else {
    console.log(`\n Done:  ${Group_Done}`)
  }
}

addTask("Make to do", STATUS.In_Progress, "high")
addTask("Make to do", STATUS.In_Progress, "high")
addTask("Проверка", STATUS.TO_DO, 'medium')
addTask("Работает!", STATUS.TO_DO, 'medium')
changeStatus("test", STATUS.In_Progress)
changeStatus("chat with mom", STATUS.TO_DO)
changePriority("chat with mom", "High")
deleteTask("test")

showList()
console.log(list)