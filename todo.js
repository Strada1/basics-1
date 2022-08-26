const STATUS = {
  TO_DO: "To Do",
  PROGRESS: "In progress",
  DONE: "Done",
};

const todoList = {
  "create a new practice task": STATUS.PROGRESS,
  "make a bed": STATUS.DONE,
  "write a new post": STATUS.TO_DO,
};

function changeStatus(name, status) {
  if (todoList[name]) {
    todoList[name] = status;
  } else {
    console.log("error");
  }
}

function addTask(name) {
  todoList[name] = STATUS.TO_DO;
}

function deleteTask(name) {
  delete todoList[name];
}

function showList() {
  console.log(todoList);
}

addTask("workout");
changeStatus("write a new post", STATUS.TO_DO);
deleteTask("make a bed");

showList();
