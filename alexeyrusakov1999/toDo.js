const highForm = document.forms.highForm;
const lowForm = document.forms.lowForm;
const highInput = highForm.nameInput;
const lowInput = lowForm.nameInput;
const btnAddHigh = document.querySelector("#iconPlus1");
const btnAddLow = document.querySelector("#iconPlus2");
const highTaskContainer = document.querySelector(".taskContainerHigh");
const lowTaskContainer = document.querySelector(".taskContainerLow");

// Функция добавления задачи без перезагрузки страницы

function addTask(text, container) {
  let divContainer = document.createElement("div");
  divContainer.setAttribute("class", "task-container");
  divContainer.setAttribute("id", "task-container_high");

  let label = document.createElement("label");

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "input_task");
  input.setAttribute("id", "qwe");

  let span = document.createElement("span");
  span.setAttribute("class", "input_text");
  span.textContent = text;

  let icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-xmark");

  label.prepend(input);
  label.append(span);

  divContainer.prepend(label);
  divContainer.append(icon);

  container.append(divContainer);
}

// Слушатели на кнопки + для добавления задач с функцией добавления задачи внутри

btnAddHigh.addEventListener("click", () => {
  addTask(highInput.value, highTaskContainer);
});

btnAddLow.addEventListener("click", () => {
  addTask(lowInput.value, lowTaskContainer);
});

// Слушатели на формы для добавления задач без обновления страницы и с функцией добавления задач внутри

highForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask(highInput.value, highTaskContainer);
});

lowForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask(lowInput.value, lowTaskContainer);
});
