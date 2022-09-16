const addTaskBtn = document.querySelector('.add-task-btn');
const descTaskInputHigh = document.querySelector('.input-high');
const descTaskInputLow = document.querySelector('.input-low');

const todosWrapperHigh = document.querySelector('.todos-wrapper-high');
const todosWrapperLow = document.querySelector('.todos-wrapper-low');

const formH = document.querySelector('.form-high');
const formL = document.querySelector('.form-low');

let todoItemElemsHigh = [];
let todoItemElemsLow = [];

// ! MUST FIX THIS REPETITION
// check tasks in localStorage
let tasksHigh;
let tasksLow;
!localStorage.tasksHigh
  ? (tasksHigh = [])
  : (tasksHigh = JSON.parse(localStorage.getItem('tasksHigh')));

// check tasksLow in localStorage
!localStorage.tasksLow
  ? (tasksLow = [])
  : (tasksLow = JSON.parse(localStorage.getItem('tasksLow')));

// ? USE CLASSES
function Task(description) {
  this.description = description;
  this.completed = false;
}

// task's template
const createTemplate = (task, index, todosWrapper) => {
  return `
    <div 
      class="todo-item 
      ${task.completed ? 'checked' : ''}
      ${todosWrapper === todosWrapperHigh ? 'todo-item-high' : 'todo-item-low'}"
      >
      <div class="description">
        <input 
          class="btn-complete" 
          type="checkbox" 
          onclick="completeTask${
            todosWrapper === todosWrapperHigh ? 'High' : 'Low'
          }(${index})"
          ${task.completed ? 'checked' : ''} 
        />
        <div class="description-text">${task.description}</div>
      </div>
      <button 
        class="btn-delete"
        onclick="deleteTask${
          todosWrapper === todosWrapperHigh ? 'High' : 'Low'
        }(${index})"
        >
      </button>
    </div>
  `;
};

// render tasks
const fillHtmlList = (tasksList, todosWrapper) => {
  todosWrapper.innerHTML = '';
  if (tasksList.length > 0) {
    tasksList.forEach((item, index) => {
      todosWrapper.innerHTML += createTemplate(item, index, todosWrapper);
    });
    todoItemElemsHigh = document.querySelectorAll('.todo-item-high');
    todoItemElemsLow = document.querySelectorAll('.todo-item-low');
  }
};

// fill lists on page start
fillHtmlList(tasksHigh, todosWrapperHigh);
fillHtmlList(tasksLow, todosWrapperLow);

// Local Storage
const updateLocalStorage = (tasksType, tasksList) => {
  localStorage.setItem(tasksType, JSON.stringify(tasksList));
};

// ! MUST FIX THIS REPETITION
// const completeTask = (index, todosWrapper) => {

// }
const completeTaskHigh = (index) => {
  tasksHigh[index].completed = !tasksHigh[index].completed;
  if (tasksHigh[index].completed) {
    todoItemElemsHigh[index].classList.add('checked');
  } else {
    todoItemElemsHigh[index].classList.remove('checked');
  }
  updateLocalStorage('tasksHigh', tasksHigh);
  fillHtmlList(tasksHigh, todosWrapperHigh);
};

const completeTaskLow = (index) => {
  tasksLow[index].completed = !tasksLow[index].completed;
  if (tasksLow[index].completed) {
    todoItemElemsLow[index].classList.add('checked');
  } else {
    todoItemElemsLow[index].classList.remove('checked');
  }
  updateLocalStorage('tasksLow', tasksLow);
  fillHtmlList(tasksLow, todosWrapperLow);
};

// ! MUST FIX THIS REPETITION
// const deleteTask = (index, todosWrapper) => {

// }
const deleteTaskHigh = (index) => {
  todoItemElemsHigh[index].classList.add('deletion');
  setTimeout(() => {
    tasksHigh.splice(index, 1);
    updateLocalStorage('tasksHigh', tasksHigh);
    fillHtmlList(tasksHigh, todosWrapperHigh);
  }, 250);
};

const deleteTaskLow = (index) => {
  todoItemElemsLow[index].classList.add('deletion');
  setTimeout(() => {
    tasksLow.splice(index, 1);
    updateLocalStorage('tasksLow', tasksLow);
    fillHtmlList(tasksLow, todosWrapperLow);
  }, 250);
};

// ! MUST FIX THIS REPETITION
// const addTask = () => {

// }
formH.addEventListener('submit', (e) => {
  e.preventDefault();
  tasksHigh.push(new Task(descTaskInputHigh.value));
  updateLocalStorage('tasksHigh', tasksHigh);
  fillHtmlList(tasksHigh, todosWrapperHigh);
  descTaskInputHigh.value = '';
});

formL.addEventListener('submit', (e) => {
  e.preventDefault();
  tasksLow.push(new Task(descTaskInputLow.value));
  updateLocalStorage('tasksLow', tasksLow);
  fillHtmlList(tasksLow, todosWrapperLow);
  descTaskInputLow.value = '';
});
