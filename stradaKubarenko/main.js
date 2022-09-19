const tasks = {
   HIGH_PRIORITY: document.getElementById('add_task_high'),
   LOW_PRIORITY: document.getElementById('add_task_low'),
}
const elements = {
   UL : document.querySelectorAll('ul.flex'),
}
const addTaskHighPriority = tasks.HIGH_PRIORITY;
const addTaskLowPriority = tasks.LOW_PRIORITY;

addTaskHighPriority.addEventListener('submit', addTask );
addTaskLowPriority.addEventListener('submit', addTask );
function addTask() {
  let textHighPriority = tasks.HIGH_PRIORITY.textContent;
//   let textLowPriority = tasks.LOW_PRIORITY.textContent;
  let li = document.createElement('li');
  li.classList.add("box","delete");
  elements.UL.append(li);
  li.innerHTML = `
  <label>
  <input type="checkbox">
  <button type="submit" class="delButton">del</button>
  </label>`;
   li = textHighPriority;
}

