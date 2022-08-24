const STATUS = {
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  TO_DO: "To Do",
};

const list = {
  "create a new practice task" : STATUS.DONE,
  "make a bed" : STATUS.TO_DO,
  "write a post" : STATUS.TO_DO,
};

function changeStatus(task, status) {
  if (typeof task === "string") {
    list[task] = status;
    console.log("You have successfully changed your status");
  } else {
    console.log("Error!" + "\n" + "You have not change a status")
  }
}

function addTask(task) {
  if (typeof task === "string") {
    list[task] = STATUS.TO_DO;
    console.log("New task has been successfully added!");
  } else {
    console.log("Error!" + "\n" + "You have not added a task");
  }
}

function deleteTask(task) {
  if (typeof task === "string") {
    delete list[task];
    console.log("You have successfully deleted the task");
  } else {
    console.log("Error!" + "\n" + "You have not deleted a task");
  }
}

function showList(task) {
  let ToDolist = ""
  let ProgressList = ""
  let DoneList = ""
  
  for (let task in list) {
    if (list[task] == STATUS.TO_DO) {
      ToDolist += task + "\n" 
      }
    if (list[task] == STATUS.IN_PROGRESS) {
      ProgressList += task + "\n"
    }
  if (list[task] == STATUS.DONE) {
    DoneList += task + "\n"
  }
  }
  console.log(STATUS.TO_DO + "\n" + ToDolist);
  console.log(STATUS.IN_PROGRESS + "\n" + ProgressList);
  console.log(STATUS.DONE + "\n" + DoneList);
}


    
addTask("do strada");
addTask("walk pet");
showList();
deleteTask("walk pet");
showList();
changeStatus("do strada", STATUS.IN_PROGRESS);
showList();
changeStatus("do strada", STATUS.DONE);