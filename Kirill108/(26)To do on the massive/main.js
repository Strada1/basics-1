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
  list.push({Name: task,
            status: status,
            priority: priority,})   
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

  let GroupTO_Do = '';
  let GroupIn_Progress= '';
  let Group_Done = '';

  let obj = list.filter(function(item){
    return item.status == STATUS.TO_DO;
  })
  
  GroupTO_Do += obj.Name
  console.log(GroupTO_Do)
}


addTask("Make to do", "In_Progress", "high")
addTask("test", STATUS.TO_DO, 'medium')
addTask("tess", STATUS.TO_DO, 'medium')
changeStatus("test", "In_Progress")
changeStatus("chat with mom", "To Do")
changePriority("chat with mom", "High")
deleteTask("test")

showList(STATUS.TO_DO)
console.log(list)
