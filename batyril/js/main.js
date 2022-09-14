import {FORMS, ELEMENTS_UI, addTaskUI, renderingDbTask} from "./UI.js";
import {DB_TASKS, addTaskDB, TASK_PRIORITY, deleteTaskDB, changeStatus} from "./database.js";
import {checkInputValue} from "./checks.js";

FORMS.HIGH.addEventListener('submit',()=>{
  event.preventDefault()
  const text = checkInputValue(ELEMENTS_UI.INPUT_HIGH.value)
  if(!text) {
    return
  }
  addTaskDB(DB_TASKS,text, TASK_PRIORITY.HIGH);
  renderingDbTask(DB_TASKS, ELEMENTS_UI.TASK_LIST_LOW, ELEMENTS_UI.TASK_LIST_HIGH);
  FORMS.HIGH.reset()
})

FORMS.LOW.addEventListener('submit',()=>{
  event.preventDefault()
  addTaskDB(DB_TASKS, ELEMENTS_UI.INPUT_LOW.value, TASK_PRIORITY.LOW);
  renderingDbTask(DB_TASKS, ELEMENTS_UI.TASK_LIST_LOW, ELEMENTS_UI.TASK_LIST_HIGH);
})


ELEMENTS_UI.TODO.addEventListener('click',(event)=>{
  const checkDeleteClass = event.target.classList.contains('task-block__close')
  if(checkDeleteClass){
    const textTaskDelete = event.target.parentElement.firstElementChild.lastElementChild.textContent;
    deleteTaskDB(DB_TASKS,textTaskDelete );
    renderingDbTask(DB_TASKS, ELEMENTS_UI.TASK_LIST_LOW, ELEMENTS_UI.TASK_LIST_HIGH)
  }
})


ELEMENTS_UI.TODO.addEventListener('click',(event)=>{
  const checkChangeStatusCass = event.target.classList.contains('task-block__checked')
  if(checkChangeStatusCass){
    const textTaskChangeStatus = event.target.nextElementSibling.textContent;
    changeStatus(DB_TASKS,textTaskChangeStatus)
    console.log(DB_TASKS)
    renderingDbTask(DB_TASKS, ELEMENTS_UI.TASK_LIST_LOW, ELEMENTS_UI.TASK_LIST_HIGH)
  }
})

