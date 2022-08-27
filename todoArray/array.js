const STATUS = {
  IN_PROGRESS: "In Progress",
  TO_DO: "To Do",
  DONE: "Done",
};

const PRIORITY = {
  LOW: "Low",
  HIGH: "High",
};

const list = [
  { name: "create a post", status: STATUS.TO_DO, priority: PRIORITY.LOW },
  { name: "test", status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
];

function addTask(task) {
  if (typeof task == "string") {
    list.push({ name: task, status: STATUS.TO_DO, priority: PRIORITY.LOW });
    console.log("New task has been successfully added!");
  } else {
    console.log("Error!" + "\n" + "You have not added a task");
  }
}

function deleteTask(task) {
  let result = list.findIndex(function (index) {
    return index === task;
  });
  list.splice(result);
  console.log("You have successfully deleted the task");
}

function changeStatus(task, status) {
  let result1 = list.find(function (item) {
    return item.name === task;
  });
  result1.status = status;
}

function changePriority(task, priority) {
  let result2 = list.find(function (item) {
    return item.name === task;
  });
  result2.priority = priority;
}

function showList(task) {
    const ToDo = list.filter(function (item){
       if (item.status === STATUS.TO_DO) {
        return true
       }
    } )
}
  


showList();
