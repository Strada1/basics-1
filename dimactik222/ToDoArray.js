let toDoList = [];

function addTask(taskName, priorityName = "normal") {
  let task = {name: taskName, status: "To Do", priority: priorityName};
  toDoList.push(task);
}

function deleteTask(taskName) {
  let index = toDoList.findIndex(item => item.name === taskName);
  toDoList.splice(index, 1);
}

function changeStatus(taskName, statusName) {
  let index = toDoList.findIndex(item => item.name === taskName);
  toDoList[index].status = statusName;
}

function showList() {
  let todo = "ToDo: \n";
  let inProgress = "In Progress: \n";
  let done = "Done: \n"

  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].status === "To Do") {
      todo += "\t" + toDoList[i].name + " | priority: " + toDoList[i].priority + "\n";
    } else if (toDoList[i].status === "In Progress") {
      inProgress += "\t" + toDoList[i].name + " | priority: " + toDoList[i].priority + "\n";
    } else {
      done += "\t" + toDoList[i].name +" | priority: " + toDoList[i].priority + "\n";
    }
  }
  console.log(todo);
  console.log(inProgress);
  console.log(done)
  
}

addTask("Cleaning");
addTask("Washing", "High");
addTask("Ironing");

deleteTask("Washing")

changeStatus("Cleaning", "Done!")

showList();

