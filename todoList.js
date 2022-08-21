const todoList = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function addTask(name) {
  todoList[name] = "To Do";
}

function changeStatus(name, status) {
  if (todoList[name]) {
    todoList[name] = status;
  } else {
    console.log("NO NO NO NO");
  }
}

function deleteTask(name) {
  if (todoList[name]) {
    delete todoList[name];
  } else {
    console.log("NO NO NO NO");
  }
}

function showList() {
  console.log(todoList);
}

addTask("have a walk");
changeStatus("write a post", "Done");
deleteTask("have a walk");

showList();