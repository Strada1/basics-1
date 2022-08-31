const STATUS = {
  IN_PROGRESS: "In Progress",
  TO_DO: "To Do",
  DONE: "Done",
};

const PRIORITY = {
  LOW: "Low",
  HIGH: "High",
};

const ERROR = {
  ERROR_TASK: "You entered the task name incorrectly.",
  ERROR_STATUS: "You entered the task status incorrectly.",
  //ERROR_PRIORITY : 'You entered the task priority incorrectly.',
  ERROR_DELETE: "You have not deleted the task.",
};

const SUCCESS = {
  SUCCESS_DELETE: "You have successfully deleted the task!",
  SUCCESS_ADD: "New task has been successfully added!",
  SUCCESS_CHANGE_STATUS: "You have successfully changed the status!",
  SUCCESS_CHANGE_PRIORITY: "You have successfully changed the priority!",
  //SUCCESS_CHANGE_STATUS_TASK : 'You have successfully specified the task whose status needs to be changed!'
};

const list = [
  { name: "create a post", status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW },
  { name: "test", status: STATUS.TO_DO, priority: PRIORITY.HIGH },
];

function addTask(task) {
  if (typeof task == "string") {
    list.push({ name: task, status: STATUS.TO_DO, priority: PRIORITY.LOW });
    console.log(SUCCESS.SUCCESS_ADD);
  } else {
    console.log(ERROR.ERROR_TASK);
  }
}

function deleteTask(task) {
  let result = list.findIndex(function (index) {
    return index === task;
  });
  list.splice(result);

  if (typeof task == "task") {
    console.log(SUCCESS.SUCCESS_DELETE);
  } else {
    console.log(ERROR.ERROR_DELETE);
  }
}

function changeStatus(task, status) {
  let result1 = list.find(function (item) {
    return item.name === task;
  });
  result1.status = status;
  console.log(SUCCESS.SUCCESS_CHANGE_STATUS);
}

function changePriority(task, priority) {
  let result2 = list.find(function (item) {
    return item.name === task;
  });
  result2.priority = priority;
  console.log(SUCCESS.SUCCESS_CHANGE_PRIORITY);
}

function showList() {
  function show(status) {
    const StatusShow = list.filter(function (item) {
      if (item.status === status) {
        return true;
      }
    });
    for (let task of StatusShow) {
      if (StatusShow[task] === status.name) {
        console.log(
          `${status}: \n ${task.name} \n priority: ${task.priority} \n`
        );
      }
    }
  }
  show(STATUS.DONE);
  show(STATUS.TO_DO);
  show(STATUS.IN_PROGRESS);
}
showList();
