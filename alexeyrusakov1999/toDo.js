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

// // переменные - константы

// const highForm = document.forms.highForm; // - форма для важных задач
// const lowForm = document.forms.lowForm; // - форма для обычных задач
// const highInput = highForm.nameInput; // - инпут для важных
// const lowInput = lowForm.nameInput; // - инпут для обычных
// const btnAddHigh = document.querySelector("#iconPlus1"); // - кнопка добавления(+) для важных
// const btnAddLow = document.querySelector("#iconPlus2"); // - кнопка добавления(+) для обычных
// const highTaskContainer = document.querySelector(".taskContainerHigh"); // - контейнер для добавления важных задач
// const lowTaskContainer = document.querySelector(".taskContainerLow"); // - контейнер для добавления обычных задач

// // Эту часть взял из кода туду на массивах

// let addTask = (taskName, taskPriority) => {
//   if (taskName == "") {
//     return alert("Вы ввели пустую задачу");
//   } else if (
//     taskPriority !== PRIORITY["high"] &&
//     taskPriority !== PRIORITY["low"]
//   ) {
//     return alert("Вы задали неправильный приоритет");
//   }

//   let task = {
//     name: taskName,
//     status: STATUS["toDo"],
//     priority: taskPriority,
//   };

//   list.push(task);
// };

// // Функция добавления задачи без перезагрузки страницы

// function renderTask(text, container) {
//   if (text === "") {
//     return alert("Вы ввели пустую задачу");
//   }

//   let divContainer = document.createElement("div");
//   divContainer.setAttribute("class", "task-container");
//   divContainer.setAttribute("id", "task-container_high");

//   let label = document.createElement("label");

//   let input = document.createElement("input");
//   input.setAttribute("type", "checkbox");
//   input.setAttribute("class", "input_task");
//   input.setAttribute("id", "qwe");

//   let span = document.createElement("span");
//   span.setAttribute("class", "input_text");
//   span.textContent = text;

//   let icon = document.createElement("i");
//   icon.setAttribute("class", "fa-solid fa-xmark");

//   label.prepend(input);
//   label.append(span);

//   divContainer.prepend(label);
//   divContainer.append(icon);

//   container.append(divContainer);

//   icon.addEventListener("click", (event) => {
//     console.log(event.target.parentElement.innerText);
//   });
// }

// // Слушатели на формы для добавления задач без обновления страницы и с функцией добавления задач внутри

// highForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   addTask(highInput.value, PRIORITY["high"]);
//   renderTask(highInput.value, highTaskContainer);
// });

// lowForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(list);

//   addTask(lowInput.value, PRIORITY["low"]);

//   renderTask(lowInput.value, lowTaskContainer);

//   let icon = document.querySelector(".fa-solid.fa-xmark");

//   deleteTask(
//     icon.addEventListener("click", (event) => {
//       event.target.parentElement.innerText;
//     })
//   );
//   console.log(list);
// });

// // "Список дел" на массивах

// // const STATUS = {
// //   toDo: "to do",
// //   inProgress: "in progress...",
// //   done: "done",
// // };

// // const PRIORITY = {
// //   high: "High",
// //   low: "Low",
// // };

// // let list = [];

// // let addTask = (taskName, taskPriority) => {
// //   if (taskPriority !== PRIORITY["high"] && taskPriority !== PRIORITY["low"]) {
// //     return alert("Вы задали неправильный приоритет");
// //   }

// //   let task = {
// //     name: taskName,
// //     status: STATUS["toDo"],
// //     priority: taskPriority,
// //   };

// //   list.push(task);
// // };

// // let changeStatus = (taskName, taskStatus) => {
// //   if (
// //     taskStatus !== STATUS["toDo"] &&
// //     taskStatus !== STATUS["inProgress"] &&
// //     taskStatus !== STATUS["done"]
// //   ) {
// //     return console.log("Введите корректный статус задачи");
// //   }

// //   let task = list.find((item) => item.name === taskName);
// //   task.status = taskStatus;
// // };

// let deleteTask = (taskName) => {
//   console.log(taskName);
//   let taskIndex = list.findIndex((item) => item.name === taskName);

//   if (taskIndex === -1) {
//     return console.log("Вы ввели некорректное название задачи");
//   }

//   list.splice(taskIndex, 1);
// };

// // let showList = () => {
// //   for (let status in STATUS) {
// //     console.log("\n" + STATUS[status] + ":");
// //     list.filter((item) =>
// //       item.status === STATUS[status]
// //         ? console.log(`   ${item.name}(${item.priority})`)
// //         : ""
// //     );
// //   }
// // };

// // 1. Изменение массива(добавление, удаление) 2. Очистка контейнера задач 3. Рендер задач из массива
