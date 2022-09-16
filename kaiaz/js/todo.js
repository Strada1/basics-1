const HIGH = "high";
const LOW = "low";
const INPROGRESS = "inprogress";
const DONE = "done";

let tasks = [
  {
    taskName: "Покормить кота",
    taskStatus: INPROGRESS,
    taskPriority: HIGH,
    id: idGenerate(),
  },
  {
    taskName: "Написать приложение",
    taskStatus: INPROGRESS,
    taskPriority: HIGH,
    id: idGenerate(),
  },
  {
    taskName: "Сыграть в картишки",
    taskStatus: DONE,
    taskPriority: LOW,
    id: idGenerate(),
  },
];

document.addEventListener("DOMContentLoaded", renderTodoList(tasks));

let addTaskform = document.querySelector("#todoForm");

addTaskform.addEventListener("submit", function (e) {
  e.preventDefault();
  let filedELem = document.querySelector("#taskValue");
  let fieldValue = filedELem.value;
  if (fieldValue.trim() != "" && fieldValue.trim() != null) {
    addTask(fieldValue);
    renderTodoList(tasks);
    filedELem.value = "";
  }
});

function idGenerate() {
  return Math.random().toString(16).slice(2);
}

function addTask(task) {
  tasks.push({
    taskName: task,
    taskStatus: INPROGRESS,
    taskPriority: HIGH,
    id: idGenerate(),
  });
}

function deleteTask(e, t) {
  let parrentEl = e.target.parentNode.dataset.id;
  t.forEach(function (item, index) {
    if (item.id == parrentEl) {
      tasks.splice(index, 1);
    }
  });
  renderTodoList(tasks);
}

function changeTask() {}

function changeStatus() {}

function createNewElement(element, elClassName) {
  let el = document.createElement(element);
  el.className = elClassName;
  return el;
}

function htmlTemplateGenerate(item, index) {
  return `
       <div
         class="task ${
           item.taskStatus == DONE ? "task taskDone" : "taskInprogress"
         }"
         data-id="${item.id}">
            <div for="task1" class="task_checkbtn_box">
              <input type="checkbox" ${item.taskStatus == DONE ? "checked" : ""}
              id="id${item.id}"
              class="task_checkBtn"
              />
              <label for="id${item.id}"></label>
            </div>
            <div class="task_text">
              ${item.taskName}
            </div>
            <button class="task_closebtn" ></button>
        </div>
    `;
}

function renderTodoList(tasks) {
  let high = document.querySelector("#high");
  let low = document.querySelector("#low");
  high.innerHTML = "";
  low.innerHTML = "";

  tasks.forEach((item, index) => {
    switch (item.taskPriority) {
      case HIGH:
        high.innerHTML += htmlTemplateGenerate(item, index);
        break;
      case LOW:
        low.innerHTML += htmlTemplateGenerate(item, index);
        break;
    }
  });
  let deleteBtns = document.querySelectorAll(".task_closebtn");
  let checkBtns = document.querySelectorAll(".task_checkBtn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      deleteTask(e, tasks);
    });
  });

  checkBtns.forEach((btn) => {
    btn.addEventListener("change", function () {
      let el = this.closest(".task");
      if (this.checked) {
        el.classList.add("taskDone");
        el.classList.remove("taskInprogress");
      } else {
        el.classList.add("taskInprogress");
        el.classList.remove("taskDone");
      }
    });
  });
}
