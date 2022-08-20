const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
  "write smt": "In Progress",
};


function changeStatus(task, status) {
  list[task] = status
}

function addTask(task) {
  list[task] = "To Do"
}

function deleteTask(task) {
  delete list[task]
}

function showList() {
  let inProgress = "";
  let done = "";
  let toDo = "";

  for (let key in list) {
    if (list[key] === "In Progress") {
      inProgress += key + "\n";
    }
      if (inProgress === "") {
      inProgress = "-" + "\n";
      }
  }
  
  for (let key in list) {
    if (list[key] === "Done") {
      done += key + "\n"
    } 
        if (done === "") {
        done = "-" + "\n"
        }
  }

  for (let key in list) {
    if (list[key] === "To Do") {
      toDo += key + "\n";
    }
      if (toDo === "") {
      toDo = "-" + "\n";
      }
  }

console.log("ToDo:" + "\n" + toDo + "\n" + "In Progress:" + "\n" + inProgress + "\n" + "Done:" + "\n" + done);
}

changeStatus("write a post", "Done");
addTask("learn english");
addTask("do the dishes");
deleteTask("do the dishes");
changeStatus("write a post", "In Progress");
changeStatus("learn english", "In Progress");
showList();
