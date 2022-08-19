const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To do",
  "go to walk": "Done",
  "cook dinner": "To do",
};

function changeStatus(task, status) {
  for (key in list) {
    if (key == task) {
      list[key] = status;
    };
  };
};

function addTask(task) {
  list[task] = "To do";
};

function deleteTask(task) {
  delete list[task];
};

function showList() {
  console.log("Todo:");
  for (key in list) {
    if (list[key] == "To do") {
      console.log(key );
    };
  };

  console.log("In Progress:");
  for (key in list) {
    if (list[key] == "In Progress") {
      console.log(key );
    };
  };
  console.log("Done:");
  for (key in list) {
    if (list[key] == "Done") {
      console.log(key );
    };
  };
};

console.log(changeStatus("write a post", "In Progress"));
console.log(addTask("wash clothes"));
console.log(changeStatus("wash clothes", "In Progress"));
console.log(deleteTask("go to walk"));
console.log(showList());
