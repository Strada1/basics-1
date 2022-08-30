const STATUS = {
  TO_DO: "To Do",
  PROGRESS: "In progress",
  DONE: "Done",
};

const todoList = {};

function changeStatus(name, status) {
  if (todoList[name]) {
    todoList[name] = status;
  } else {
    console.log("error");
  }
}

function addTask(name) {
  todoList[name] = STATUS;
}

function deleteTask(name) {
  if (todoList[name]){
    delete todoList[name];
  } else {
    console.log('nothing to delete');
  }
}

function showList() {
  let progress = "";
  let todo = "";
  let done = "";

  for(let key in todoList) {
    if(todoList[key] === STATUS.PROGRESS) {
      progress += key + '\n';
    } else if (progress === " ") {
      progress += "-" + '\n';
    }
  }

  for(let key in todoList) {
    if(todoList[key] === STATUS.TO_DO) {
      todo += key + '\n';
    } else if (todo === " ") {
      todo += "-" + "\n";
    }
  }

  for(let key in todoList) {
    if(todoList[key] === STATUS.DONE) {
      done += key + '\n';
    } else if (done === " ") {
      done += "-" + "\n";
    }
  }
  
  console.log(`To Do: \n ${todo} \n In Progress: \n ${progress} \n Done: \n ${done} \n`);
}

addTask("workout");
addTask("go to home");
addTask("task for done");
changeStatus("workout", STATUS.PROGRESS);
changeStatus("go to home", STATUS.TO_DO);
changeStatus("task for done", STATUS.DONE);
deleteTask("make a bed");

showList();