const tasks = {
   HIGH_PRIORITY: document.getElementById('add_task_high'),
   LOW_PRIORITY: document.getElementById('add_task_low'),
}
const elements = {
   UL_HIGH : document.getElementById('listHigh'),
   UL_LOW : document.getElementById('listLow'),
   TEXT_INPUT_HIGH : document.getElementById('textInputHigh'),
   TEXT_INPUT_LOW : document.getElementById('textInputLow'),
}
const addTaskHighPriority = tasks.HIGH_PRIORITY;
const addTaskLowPriority = tasks.LOW_PRIORITY;

addTaskHighPriority.addEventListener('submit', addTaskHigh );
addTaskLowPriority.addEventListener('submit', addTaskLow );

function addTaskHigh(event) {
   event.preventDefault()
   let textHighPriority = elements.TEXT_INPUT_HIGH.value;
   elements.UL_HIGH.insertAdjacentHTML("afterbegin", `
   <li class="box delete"> 
      <label>
      <input type="checkbox">
      <span>${textHighPriority}</span>
      <button type="submit" class="delButton">del</button>
      </label>
   </li>`);
   document.querySelector('.clear').value = '';
}

function addTaskLow(event) {
   event.preventDefault()
   let textLowPriority = elements.TEXT_INPUT_LOW.value;
   elements.UL_LOW.insertAdjacentHTML("afterbegin", `
   <li class="box delete"> 
      <label>
      <input type="checkbox">
      <span>${textLowPriority}</span>
      <button type="submit" class="delButton">del</button>
      </label>
   </li>`);
   document.querySelector('.clear').value = '';
}

