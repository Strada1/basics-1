const AddTaskFormHigh = document.querySelector(".add-task-form-high");
const InputAddTaskHigh = document.querySelector(".add-task-input-high");
const EmptyDivHigh = document.querySelector(".EmptyDivHigh");
const AddTaskFormLow = document.querySelector(".add-task-form-low");
const InputAddTasklow = document.querySelector(".add-task-input-low");
const EmptyDivLow = document.querySelector(".EmptyDivLow");

AddTaskFormHigh.addEventListener("submit", checkHigh);
AddTaskFormLow.addEventListener("submit", checkLow);

function checkHigh(event) {
  event.preventDefault();
  if (InputAddTaskHigh.value.trim() == "") {
    alert("Введите задачу");
  }
  if (!isNaN(InputAddTaskHigh.value.trim())) {
    alert("Вы ввели число!");
  } else {
    AddHighTask(event);
  }
}
function AddHighTask(event) {
  event.preventDefault();
  EmptyDivHigh.insertAdjacentHTML(
    "afterbegin",
    `<form class="high-task-form">
    <input type="radio" class="TasksBox" id="HighTasks">
    <span class="tasks-span">${InputAddTaskHigh.value}</span>
    <button class="delete">х</button>
</form>`
  );
}

function checkLow(event) {
  event.preventDefault();
  if (InputAddTasklow.value.trim() == "") {
    alert("Введите задачу");
  }
  if (!isNaN(InputAddTaskHigh.value.trim())) {
    alert("Вы ввели число!");
  } else {
    AddLowTask(event);
  }
}

function AddLowTask(event) {
  event.preventDefault();
  EmptyDivLow.insertAdjacentHTML(
    "afterbegin",
    `  <form class="low-task-form">
    <input type="radio" class="TasksBox" id="LowTasks">
    <span class="tasks-span">${InputAddTasklow.value}</span>
    <button class="delete">х</button>
</form>`
  );
}
