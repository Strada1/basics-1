import {FORMS, ELEMENTS_FORM, addTaskUI} from "./UI.js";
import {DB_TASKS,addTaskDB, TASK_PRIORITY} from "./database.js";

FORMS.HIGH.addEventListener('submit',()=>{
  event.preventDefault()
  //TODO: сделать проверки на для строки
  addTaskDB(DB_TASKS, ELEMENTS_FORM.INPUT_HIGH.value, TASK_PRIORITY.HIGH);
  addTaskUI(ELEMENTS_FORM.INPUT_HIGH.value, ELEMENTS_FORM.TASK_LIST_HIGH);
})

FORMS.LOW.addEventListener('submit',()=>{
  event.preventDefault()
  addTaskDB(DB_TASKS, ELEMENTS_FORM.INPUT_LOW.value, TASK_PRIORITY.LOW);
  addTaskUI(ELEMENTS_FORM.INPUT_LOW.value, ELEMENTS_FORM.TASK_LIST_LOW);
})



