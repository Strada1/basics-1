const AddTaskFormHigh = document.querySelector(".add-task-form-high");
const InputAddTaskHigh = document.querySelector(".add-task-input-high");
const EmptyDivHigh = document.querySelector(".EmptyDivHigh");
const AddTaskFormLow = document.querySelector(".add-task-form-low");
const InputAddTasklow = document.querySelector(".add-task-input-low");
const EmptyDivLow = document.querySelector(".EmptyDivLow");
//const deleteTask = document.querySelectorAll('.delete')

const STATUS = {
  TO_DO: "To Do",
  DONE: "Done",
};

const PRIORITY = {
  LOW: "Low",
  HIGH: "High",
};

const list = [
  { name: "Поесть", status: STATUS.TO_DO, priority: PRIORITY.HIGH },
  {
    name: "Сверстать этот TODO list",
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH,
  },
  {
    name: "Начать делать задачу",
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH,
  },
  {
    name: "Начать делать задачу",
    status: STATUS.TO_DO,
    priority: PRIORITY.LOW,
  },
];

AddTaskFormHigh.addEventListener("submit", addTaskHigh);
AddTaskFormLow.addEventListener("submit", addTaskLow);

function addTaskHigh(event) {
  event.preventDefault();
  task = document.querySelector(".add-task-input-high");
  if (task.value.trim() == "") {
    alert("Введите имя задачи");
  
} else if (!(isNaN(task.value))) {
    alert("Имя задачи не может быть числом");
  
} else {
    list.push({
      name: task.value,
      status: STATUS.TO_DO,
      priority: PRIORITY.HIGH,
    });
    renderHigh();
  }
}

function addTaskLow(event) {
  event.preventDefault();
  task = document.querySelector(".add-task-input-low");
  if (task.value.trim() == "") {
    alert("Введите имя задачи");
  } else if (!(isNaN(task.value))) {
    alert("Имя задачи не может быть числом");
  } else {
    list.push({
      name: task.value,
      status: STATUS.TO_DO,
      priority: PRIORITY.LOW,
    });
    renderLow();
  }
}

function renderHigh() {
  if (InputAddTaskHigh.value == "") {
    console.log("пустая");
  } else {
    EmptyDivHigh.insertAdjacentHTML(
      "afterbegin",
      `<form class="high-task-form">
      <input type="radio" class="TasksBox" id="HighTasks">
      <span class="tasks-span">${InputAddTaskHigh.value}</span>
      <button class="delete">х</button>
  </form>`
    );
  }
}

function renderLow() {
    if (InputAddTasklow.value == "") {
        console.log("пустая");
      } else {
EmptyDivLow.insertAdjacentHTML(
      "afterbegin",
      `<form class="low-task-form">
    <input type="radio" class="TasksBox" id="LowTasks">
    <span class="tasks-span">${InputAddTasklow.value}</span>
    <button class="delete">х</button>
</form>`
    );
  }
}

const deleteTask = document.querySelectorAll('.delete')
deleteTask.forEach( (task) => {
  task.addEventListener('click', deleteTasklist)
});

function deleteTasklist() {
  let newlist = list.filter((task) => {
  (!(task.name === deleteTask))
  })
}

console.log(list)