import { DB_TASKS } from './database.js';

export const FORMS = {
  HIGH: document.querySelector('[name="high_form"]'),
  LOW: document.querySelector('[name="low_form"]'),
};

export const ELEMENTS_UI = {
  TODO: document.querySelector('.to-do'),
  INPUT_HIGH: FORMS.HIGH.querySelector('.to-do__text-input'),
  INPUT_LOW: FORMS.LOW.querySelector('.to-do__text-input'),
  TASK_LIST_HIGH: document.querySelector('#list_high'),
  TASK_LIST_LOW: document.querySelector('#list_low'),
};

export function addTaskUI(text, list, status = 'In Progress') {
  const statusCheckbox = status === 'In Progress' ? "" : 'checked="checked"';
  const statusClass = status === 'In Progress' ? "" : 'task-block_done';
  const statusPlace = status === 'In Progress' ? 'afterbegin' : 'beforeend';
  //TODO: переделать из за безопасности
  list.insertAdjacentHTML(statusPlace, `
       <div class="to-do__task-block  task-block ${statusClass} ">
          <label class="task-block__label">
              <input class="task-block__checked" ${statusCheckbox} type="checkbox">
              <div class="task-block__text">${text}</div>
          </label>
          <div class="task-block__close">❌</div>
      </div>`);
}

export function renderingDbTask(db, lowList = ELEMENTS_UI.TASK_LIST_LOW, highList = ELEMENTS_UI.TASK_LIST_HIGH) {
  //TODO: переделать из за безопасности
  lowList.innerHTML = '';
  highList.innerHTML = '';
  db.forEach((task) => {
    task.priority === 'high' ? addTaskUI(task.task, highList, task.status) : addTaskUI(task.task, lowList, task.status);
  });
}

renderingDbTask(DB_TASKS);
