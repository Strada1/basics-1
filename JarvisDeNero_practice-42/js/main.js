function getDomElement(selector, all = false) {
   if (all) {
      return document.querySelectorAll(selector);
   }
   return document.querySelector(selector);
}
const { log } = console;

// All const ------------------------------------------------------------
const appBody = getDomElement('.app-todo__body');
const allAddForm = getDomElement('.app-todo__add-to-list form', true)
const highTaskList = getDomElement('.app-todo__all-task.high');
const lowTaskList = getDomElement('.app-todo__all-task.low');
const highInput = getDomElement('input[data-priority="high"]');
const lowInput = getDomElement('input[data-priority="low"]');
const popup = getDomElement('.popup');
const popupCloseBtn = getDomElement('.popup__close');
const popupTitle = getDomElement('.popup__title');
const popupText = getDomElement('.popup__text');

let conterIdForTask = 0;

const PRIORITY = {
   LOW: 'low',
   HIGH: 'high',
}

const STATUSES = {
   TO_DO: 'To Do',
   DONE: 'Done',
}

const TASK_LIST = [

];

// EVENTS ------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
   render(TASK_LIST);
});

for (form of allAddForm) {
   form.addEventListener('submit', (event) => {
      event.preventDefault();
      pushToArrTask(event.target);
   })
}

appBody.addEventListener('click', (event) => {
   if (event.target.classList.contains('task__delete-btn')) {
      (confirm('Точно хотитет удалить задачу?')) ? deleteTaskFromArr(event.target.dataset.id) : '';
   }

})

appBody.addEventListener('change', (event) => {
   if (event.target.classList.contains('task__checkbox')) {
      setTaskStatus(event.target)
   }
})

popupCloseBtn.addEventListener('click', () => {
   popup.classList.remove('open');
})

// RENDER ------------------------------------------------------------

function render(arr) {
   highTaskList.innerHTML = '';
   lowTaskList.innerHTML = '';

   arr.forEach(task => {
      addTaskToList(task.name, task.status, task.priority, task.id);
   });
}

function addTaskToList(value, status, priority, id) {
   const task = document.createElement('div');
   task.classList.add('task__item');
   task.innerHTML = `
      <input class="task__checkbox" type="checkbox" id="${id}" ${(status === STATUSES.DONE) ? 'checked' : ''}>
      <label for="${id}">
         ${value}
      </label>
      <button class="task__delete-btn" data-id="${id}"></button>
   `;

   if (priority === 'high') {
      return highTaskList.append(task);
   }
   return lowTaskList.append(task);
}

// ADD TASK TO ARR ------------------------------------------------------------

function pushToArrTask(currentForm) {
   try {
      const currentInput = (currentForm.contains(highInput)) ? highInput : lowInput;
      if (!currentInput.value.trim()) {
         throw new Error("Значение value (текст задачи) отсутствует!");
      }
      const currentId = conterIdForTask++;
      const currentStatus = (currentInput.checked) ? STATUSES.DONE : STATUSES.TO_DO;
      const currentPriority = (currentInput.dataset.priority === PRIORITY.HIGH) ? PRIORITY.HIGH : PRIORITY.LOW;

      TASK_LIST.push({
         name: currentInput.value,
         status: currentStatus,
         priority: currentPriority,
         id: currentId,
      })

      render(TASK_LIST);

      return currentInput.value = '';
   } catch (error) {
      popupMessage(error.name, error.message);
   }
}

// DELETE TASK ------------------------------------------------------------

function deleteTaskFromArr(currentId) {
   let deleteIndex = TASK_LIST.findIndex(task => Number(task.id) === Number(currentId));
   TASK_LIST.splice(deleteIndex, 1);

   render(TASK_LIST);
}

// LISTEN TASK STATUS ------------------------------------------------------------

function setTaskStatus(input) {
   const taskIndex = TASK_LIST.findIndex(task => Number(task.id) === Number(input.id));
   TASK_LIST[taskIndex].status = input.checked ? STATUSES.DONE : STATUSES.TO_DO;

   render(TASK_LIST);
}

// POPUPS ------------------------------------------------------------
function popupMessage(nameErr, msgErr) {
   popupTitle.textContent = nameErr;
   popupText.textContent = msgErr;
   popup.classList.add('open');
}