import { ELEMENTS_UI, renderingDbTask } from "./UI.js";
import {
  DB_TASKS, addTaskDB, deleteTaskDB, changeStatus,
} from "./database.js";
import { checkInputValue } from './checks.js';

function handlerForms(event) {
  event.preventDefault();
  const form = event.target;
  const text = checkInputValue(form.lastElementChild.value);
  const priority = form.name === 'high_form' ? 'high' : 'low';
  if (!text) {
    return;
  }
  addTaskDB(DB_TASKS, text, priority);
  renderingDbTask(DB_TASKS);
  form.reset();
}

ELEMENTS_UI.TODO.addEventListener('submit', (event) => handlerForms(event));

function handlerDelete(event) {
  const checkDeleteClass = event.target.classList.contains('task-block__close');
  if (checkDeleteClass) {
    const textTaskDelete = event.target.parentElement
      .firstElementChild.lastElementChild.textContent;
    deleteTaskDB(DB_TASKS, textTaskDelete);
    renderingDbTask(DB_TASKS);
  }
}
ELEMENTS_UI.TODO.addEventListener('click', (event) => handlerDelete(event));

function handlerChecks(event) {
  const checkChangeStatusCass = event.target.classList.contains('task-block__checked');
  if (checkChangeStatusCass) {
    const textTaskChangeStatus = event.target.nextElementSibling.textContent;
    changeStatus(DB_TASKS, textTaskChangeStatus);
    renderingDbTask(DB_TASKS);
  }
}

ELEMENTS_UI.TODO.addEventListener('click', (event) => handlerChecks(event));
