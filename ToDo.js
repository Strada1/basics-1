// const ELEMENTS = {
//   HIGH_FORM: document.querySelector('#high__form'),
//   HIGH_ADD_INPUT: document.querySelector('#high__add-input'),
//   LOW_FORM: document.querySelector('#low__form'),
//   LOW_ADD_INPUT: document.querySelector('#low__add-input'),
//   TASK: document.querySelectorAll('.todo__name'),
//   BODY: document.body,
// };

// let taskArrayHigh = [];
// let taskArrayLow = [];
// function addTask(task, form, priority) {
//   if (priority === 'high') {
//     let defaultTaskArrayHigh = document.querySelectorAll('.todo__name');
//     for (let defaultTask of defaultTaskArrayHigh) {
//       if (defaultTask.innerText === task) {
//         return false;
//       }
//     }
//     taskArrayHigh.push(task);
//     localStorage.setItem('taskArrayHigh', JSON.stringify(taskArrayHigh));
//   }
//   if (priority === 'low') {
//     let defaultTaskArrayLow = document.querySelectorAll('.todo__name');
//     for (let defaultTask of defaultTaskArrayLow) {
//       if (defaultTask.innerText === task) {
//         return false;
//       }
//     }
//     taskArrayLow.push(task);
//     localStorage.setItem('taskArrayLow', JSON.stringify(taskArrayLow));
//   }
//   form.insertAdjacentHTML(
//     'afterend',
//     `<div class="todo__task">
//     <div class="todo__task-content">
//       <label  class="todo__task-text">
//         <input type="checkbox" id="high__task1" class="todo__task-checkbox" />
//         <span class="todo__name">
//           ${task}
//         </span>
//       </label>
//     </div>
//     <button class="todo__icon-delete">
//       <img src="../img/delete-icon.svg" alt="icon" />
//     </button>
//   </div>`,
//   );
// }
// ELEMENTS.BODY.onload = function () {
//   taskArrayHigh = localStorage.getItem('taskArrayHigh')
//     ? JSON.parse(localStorage.getItem('taskArrayHigh'))
//     : [];
//   if (taskArrayHigh.length > 0) {
//     taskArrayHigh.forEach((task) => addTask(task, ELEMENTS.HIGH_FORM));
//   }
//   taskArrayLow = localStorage.getItem('taskArrayLow')
//     ? JSON.parse(localStorage.getItem('taskArrayLow'))
//     : [];
//   if (taskArrayLow.length > 0) {
//     taskArrayLow.forEach((task) => addTask(task, ELEMENTS.LOW_FORM));
//   }
// };

// ELEMENTS.HIGH_FORM.onsubmit = function (event) {
//   event.preventDefault();
//   let newTask = ELEMENTS.HIGH_ADD_INPUT.value;
//   if (newTask === '') return false;
//   addTask(newTask, ELEMENTS.HIGH_FORM, 'high');
//   return false;
// };
// ELEMENTS.LOW_FORM.onsubmit = function (event) {
//   event.preventDefault();
//   let newTask = ELEMENTS.LOW_ADD_INPUT.value;
//   if (newTask === '') return false;
//   addTask(newTask, ELEMENTS.LOW_FORM, 'low');
//   return false;
// };
