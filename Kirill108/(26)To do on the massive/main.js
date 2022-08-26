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
    Name: 'create a post', 
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
   let Index_task = list.findIndex(task);
   list[Index_task].status = NewStatus;
}


addTask("Make to do", "In_Progress", "high")
changeStatus("test", "In_Progress")

console.log(list)