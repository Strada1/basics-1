import {DB_TASKS} from "./database.js";

export const FORMS = {
  HIGH: document.querySelector('[name="high_form"]'),
  LOW: document.querySelector('[name="low_form"]'),
}

export const ELEMENTS_FORM = {
  INPUT_HIGH: FORMS.HIGH.querySelector('.to-do__text-input'),
  INPUT_LOW: FORMS.LOW.querySelector('.to-do__text-input'),
  TASK_LIST_HIGH: document.querySelector('#list_high'),
  TASK_LIST_LOW: document.querySelector('#list_low')
}

export function addTaskUI(text,list){
  list.insertAdjacentHTML('afterbegin', `
       <div class="to-do__task-block  task-block ">
          <label class="task-block__label">
              <input class="task-block__checked"  type="checkbox">
              <div class="task-block__text">${text}</div>
          </label>
          <div class="task-block__close">❌</div>
      </div>`)
}

function renderingDbTask(db, lowList, highList){
  db.forEach(task => {
    task.priority === 'high'? addTaskUI(task.task,highList):addTaskUI(task.task,lowList)
  })
}

renderingDbTask(DB_TASKS, ELEMENTS_FORM.TASK_LIST_LOW, ELEMENTS_FORM.TASK_LIST_HIGH);
