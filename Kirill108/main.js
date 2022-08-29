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
    Name: 'Сделать ту ду', 
    status: STATUS.In_Progress,
    priority: PRIORITY.High, 
  },
  
  {
    Name: 'сделать проверки в ту ду', 
    status: STATUS.In_Progress,
    priority: PRIORITY.Medium,
  },  
]

function addTask(task, status, priority) {
  let IndexObj = list.findIndex(function(item){
    return item.Name == task
  })
  if (IndexObj == -1) {
    list.push({Name: task,
      status: status,
      priority: priority,}) 
  } else {
    console.log(`уже есть такая задача "${task}"`)
  }
}

function changeStatus(task, NewStatus) {
  let IndexObj = list.findIndex(function(item){
    return item.Name == task
  })
  if(IndexObj == -1) {
    console.log(`Нет такой задачи "${task}"`)
  } else {
    let MyObj = list.find(function(item) {
      return item.Name == task;
      })
  
      MyObj.status = NewStatus;
  } 
}

function changePriority(task, NewPriopity) {
  let IndexObj = list.findIndex(function(item){
    return item.Name == task
  })
  if(IndexObj == -1) {
    console.log(`Нет такой задачи "${task}"`)
  } else {
    let MyObj = list.find(function(item) {
      return item.Name == task;
    })
    MyObj.priority = NewPriopity;
  }
}


function deleteTask(task) {
  let IndexObj = list.findIndex(function(item){
    return item.Name == task
  })
  if(IndexObj == -1) {
    console.log(`Нет такой задачи "${task}"`)
  } else {
    let IndexObj = list.findIndex(function(item) {
      return item.Name == task;
    })
  
    list.splice(IndexObj, 1)
  }
}

function showList() {

  let GroupTO_Do = ``;
  let GroupIn_Progress= ``;
  let Group_Done = ``;

  let objTodo = list.filter(function(item){
    return item.status == STATUS.TO_DO;
  })
  
  objTodo.forEach(function(item){
    GroupTO_Do += `\n \t ${item.Name}, (${item.priority})`
  })

  let objIn_Progress = list.filter(function(item){
    return item.status == STATUS.In_Progress;
  })

  objIn_Progress.forEach(function(item){
    GroupIn_Progress += `\n \t ${item.Name}, (${item.priority})`
  })

  let objDone = list.filter(function(item){
    return item.status == STATUS.Done;
  })

  objDone.forEach(function(item){
    Group_Done += `\n \t ${item.Name}, (${item.priority})`
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

addTask("Покушать", STATUS.TO_DO, PRIORITY.Medium)
addTask("Почитать книгу", STATUS.TO_DO, PRIORITY.Medium)
changeStatus("Покушать", STATUS.Done)
deleteTask("Покушать")

showList()
console.log(list)