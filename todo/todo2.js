const STATUS = {
  DONE: "Done",
  TO_DO: "To Do",
};

const PRIORITY = {
  LOW: "Low",
  HIGH: "High",
};

const list = [];

const HighForm = document.querySelector(".add-task-form-high");
const LowForm = document.querySelector(".add-task-form-low");
const inputHigh = document.querySelector(".add-task-input-high");
const inputLow = document.querySelector(".add-task-input-low");

//функция добавление задачи

function addTask(newTask, taskPriority) {
  list.push({
    name: newTask,
    status: STATUS.TO_DO,
    priority: taskPriority,
  });
}

HighForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let newTask = inputHigh.value;

  if (newTask === "") {
    alert("задача не может быть без имени");
  }
   else if (!isNaN(newTask)) {
    alert("имя задачи не может быть числом");
  } else {
    addTask(newTask, PRIORITY.HIGH);
    render();
  }
});

LowForm.addEventListener("submit", function (event) {
  let newTask = inputLow.value;
  if (newTask === "") {
    alert("задача не может быть без имени");
  }
   else if (!isNaN(newTask)) {
    alert("имя задачи не может быть числом");
  } else {
    addTask(newTask, PRIORITY.LO);
    render();
  }
});

//функция удаления задачи

function deleteTask(nameTask) {
  indexTask = list.findIndex(function (item) {
    return item.name === nameTask
  });
  list.splice(indexTask, 1);
  render();
}

//функция изменения статуса задачи

function chengeStatus(nameTask) {
    const statusTask = list.find(function (item) {
      item.name === nameTask;
    });
    if (statusTask.status === STATUS.TO_DO) {
      statusTask.status === STATUS.DONE
    } else {
        statusTask.status === STATUS.TO_DO
    }
    render();
  };
  