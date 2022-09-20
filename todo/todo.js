const STATUS = {
  TO_DO: "To do",
  DONE: "Done",
};

const PRIORITY = {
  HIGH: "High",
  LOW: "Low",
};

const list = [];

const formHigh = document.querySelector(".add-task-form-high");
const formLow = document.querySelector(".add-task-form-low");
const inputHigh = document.querySelector(".add-task-input-high");
const inputLow = document.querySelector(".add-task-input-low");

//добавление верстки в массив (LOW, HIGH)
formHigh.addEventListener("submit", function (event) {
  event.preventDefault();
  nameTask = inputHigh.value;
  addTask(nameTask, PRIORITY.HIGH);
});

formLow.addEventListener("submit", function (event) {
  event.preventDefault();
  nameTask = inputLow.value;
  addTask(nameTask, PRIORITY.LOW);
});

//добавление

function addTask(nameTask, taskPriority) {
  list.push({
    name: nameTask,
    status: STATUS.TO_DO,
    priority: taskPriority,
  });
  render();
}

//удаление

function deleteTask(nameTask) {
  const indexTask = list.findIndex(function (element) {
    return element.name === nameTask;
  });
  list.splice(indexTask, 1);
  render();
}

//поменять статус

function chengeStatus(nameTask) {
  list.find(function (item) {
    item.name === nameTask;
    if (item.status === STATUS.TO_DO) {
      item.status === STATUS.DONE;
    } else {
      item.status === STATUS.TO_DO;
    }
  });
  render();
}

//добавление в верстку

function render() {
  const highForm = document.querySelector(".high-task");
  const lowForm = document.querySelector(".low-task");
  inputHigh.value = "";
  inputLow.value = "";
  highForm.innerHTML = "";
  lowForm.innerHTML = "";
  list.forEach(function (item) {
    if (item.priority === PRIORITY.HIGH) {
      highForm.insertAdjacentHTML(
        "afterbegin",
        `<div class="high-task-form"> 
    <input type="checkbox" class="TasksBoxHigh" id="HighTasks">
    <span class="tasks-span">${item.name}</span>
    <button class="delete-high">х</button>
</div>`
      );
      const deleteHigh = document.querySelector(".delete-high");
      deleteHigh.addEventListener("click", function () {
        deleteTask(item.name);
      });

      const checkbox = document.querySelector(".TasksBoxHigh");
      const taskformHigh = document.querySelectorAll(".high-task-form");
      
      taskformHigh.forEach((item) => {
        checkbox.addEventListener("change", function () {
          if (this.checked) {
            item.style.backgroundColor = "green";
          } else {
            item.style.backgroundColor = "white";
          }
        });
      });
    } else {
      lowForm.insertAdjacentHTML(
        "afterbegin",
        `<div class="low-task-form"> 
    <input type="checkbox" class="TasksBoxLow" id="HighTasks">
    <span class="tasks-span">${item.name}</span>
    <button class="delete-low">х</button>
</div>`
      );
      const deleteLow = document.querySelector(".delete-low");
      deleteLow.addEventListener("click", function () {
        deleteTask(item.name);
      });
    }
  });
}
