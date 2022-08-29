const STATUS = {
  TO_DO: "To Do",
  PROGRESS: "In progress",
  DONE: "Done",
};

const todoList = {};

function changeStatus(name, status) {
  if (name in todoList) {
    todoList[name] = status;
  } else {
    console.log("error");
  }
}

function addTask(name, status) {
  todoList[name] = status;
}

function deleteTask(name) {
  if (name in todoList) {
    delete todoList[name];
  } else {
    console.log("error");
  }
}

function showList() {
  let progress = "";
  let done = "";
  let todo = "";

  for (let key in todoList) {
    if (todoList[key] === STATUS.PROGRESS) {
      progress += key + "\n";
    } else if (todo === "") {
      progress = "-" + "\n";
    }
  }

  for (let key in todoList) {
    if (todoList[key] === STATUS.DONE) {
      done += key + "\n";
    } else if (done === "") {
      done = "-" + "\n";
    }
  }

  for (let key in todoList) {
    if (todoList[key] === STATUS.TO_DO) {
      todo += key;
    } else if (todo === "") {
      todo = "-" + "\n";
    }
  }

  console.log(
    ` To Do: \n  ${todo} \n In Progress: \n ${progress} \n Done: \n  ${done} `
  );
}
