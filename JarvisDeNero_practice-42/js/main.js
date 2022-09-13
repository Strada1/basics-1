function getDomElement(selector, all = false) {
   if (all) {
      return document.querySelectorAll(selector);
   }
   return document.querySelector(selector);
}

const allAddForm = getDomElement('.app-todo__add-to-list form', true)
let conterIdForTask = 0;

for (form of allAddForm) {
   form.addEventListener('submit', (event) => {
      event.preventDefault();
      createNewTask(event.target);
      event.target[0].value = '';
   })
}

function createNewTask(form) {
   const inputIndex = 0;
   const value = form[inputIndex].value;
   const taskList = getDomElement(`.app-todo__all-task.${form[inputIndex].dataset.priority}`);
   const task = document.createElement('div');
   task.classList.add('task__item');
   task.innerHTML = `
      <input type="checkbox" id="${conterIdForTask}">
      <label for="${conterIdForTask++}">
         ${value ? value : null}
      </label>
      <button class="task__delete-btn"></button>
   `;
   taskList.append(task);
}

