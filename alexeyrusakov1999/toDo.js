const ELEMENTS = {
  highInput: highForm.nameInput,
  lowInput: lowForm.nameInput,
  highForm: document.forms.highForm,
  lowForm: document.forms.lowForm,
  btnAddHigh: document.querySelector("#iconPlus1"),
  btnAddLow: document.querySelector("#iconPlus2"),
  highTaskContainer: document.querySelector(".taskContainerHigh"),
  lowTaskContainer: document.querySelector(".taskContainerLow"),
};

const PRIORITY = {
  high: "high",
  low: "low",
};

const STATUS = {
  toDo: "status_todo",
  done: "status_done",
};

const list = [
  { name: "Изучить новую тему", priority: PRIORITY.high, status: STATUS.toDo },
  {
    name: "Сверстать этот TODO list",
    priority: PRIORITY.high,
    status: STATUS.toDo,
  },
  {
    name: "Начать делать задачу",
    priority: PRIORITY.high,
    status: STATUS.toDo,
  },
  { name: "Посмотреть ютубчик", priority: PRIORITY.low, status: STATUS.toDo },
];

// Функция добавления задач

function addTask(event, newTask, priority) {
  if (
    newTask.value.trim() != "" &&
    list.findIndex((item) => {
      item.name == newTask.value;
    }) == -1
  ) {
    list.push({ name: newTask.value, priority: priority, status: STATUS.toDo });
  }
  event.preventDefault();
  newTask.value = "";
  render();
}

ELEMENTS.highForm.addEventListener("submit", (event) => {
  addTask(event, ELEMENTS.highInput, PRIORITY.high);
});

ELEMENTS.lowForm.addEventListener("submit", (event) => {
  addTask(event, ELEMENTS.lowInput, PRIORITY.low);
});

// Функция удаления задач

function deleteTask(task) {
  if (list.findIndex((item) => item.name === task) !== -1) {
    let deleteItem = list.findIndex((item) => item.name === task);
    list.splice(deleteItem, 1);
  }

  render();
}

// Функция смены статуса

function changeStatus(task) {
  if (list.findIndex((item) => item.name === task) !== -1) {
    let changeIndex = list.find((item) => item.name == task);

    if (changeIndex.status == STATUS.toDo) {
      changeIndex.status = STATUS.done;
    } else {
      changeIndex.status = STATUS.toDo;
    }
  }
  render();
}

// Функция ререндеринга

function render() {
  let delTasks = document.querySelectorAll(".task-container");
  delTasks.forEach((item) => {
    item.remove();
  });

  for (let item of list) {
    if (item.priority === PRIORITY.high) {
      ELEMENTS.highTaskContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="task-container" id="task-container_high">
  <label>
  <input type="checkbox" class="input_task" id="qwe" name="to_do" onclick = 'changeStatus("${
    item.name
  }")' ${item.status == STATUS.done ? "checked" : ""}>
       <span class="input_text">
       ${item.name}
       </span>
  </label>
  <button class="fa-solid fa-xmark" id='btn_exit' type="button" onclick = 'deleteTask("${
    item.name
  }")'></button>
</div>`
      );
    }

    if (item.priority === PRIORITY.low) {
      ELEMENTS.lowTaskContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="task-container" id="task-container_high">
      <label>
      <input type="checkbox" class="input_task" id="qwe" name="to_do" onclick = 'changeStatus("${
        item.name
      }")' ${item.status == STATUS.done ? "checked" : ""}>
           <span class="input_text">
           ${item.name}
           </span>
      </label>
      <button class="fa-solid fa-xmark" id='btn_exit' type="button" onclick = 'deleteTask("${
        item.name
      }")'></button>
    </div>`
      );
    }
  }

  for (let item of document.querySelectorAll("input[type=checkbox]")) {
    if (item.checked) {
      let li = item.parentNode.parentNode;
      li.classList.add("status_done");
    }
  }
}

render();
