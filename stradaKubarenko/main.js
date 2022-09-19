const tasks = {
   HIGH_PRIORITY: document.getElementById('add_task_high'),
   LOW_PRIORITY: document.getElementById('add_task_low'),
}
const elements = {
   // UL : document.querySelectorAll('ul.flex'),
   UL_HIGH : document.getElementById('listHigh'),
   UL_LOW : document.getElementById('listLow'),
   TEXT_INPUT_HIGH : document.getElementById('textInputHigh'),
   TEXT_INPUT_LOW : document.getElementById('textInputLow'),
}
const addTaskHighPriority = tasks.HIGH_PRIORITY;
const addTaskLowPriority = tasks.LOW_PRIORITY;

addTaskHighPriority.addEventListener('submit', addTask );
addTaskLowPriority.addEventListener('submit', addTask );

function addTask(event) {
   event.preventDefault()
   let textHighPriority = elements.TEXT_INPUT_HIGH.textContent;
 
   alert(textHighPriority)
   // let textLowPriority = elements.TEXT_INPUT_LOW.textContent;
   elements.UL_HIGH.insertAdjacentHTML("afterbegin", `
   <li class="box delete"> 
      <label>
      <input type="checkbox">
      <button type="submit" class="delButton">del</button>
      </label>
   </li>`);
   
}

