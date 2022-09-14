const taskHigh = document.getElementById('todo_task_high');
const taskLow = document.getElementById('todo_task_low');
let addTask = document.querySelector('#todo_task_add').value;
let newTask = document.getElementsByClassName('task_name');
const form = document.querySelector('form');

function handler(event) {
  event.preventDefault();

  newTask.textContent = addTask;

  form.insertAdjacentHTML(
    'afterend',
    ` <div class="todo_list">
            <label class="todo_list_task">
                <input type="checkbox" class="todo_task_input">
                <span class="check-style"></span>
                <span class="task_name">${newTask.textContent}</span>
            </label>
            <button class="btn_task task_del">
                <img src="img/icon_delete.svg" alt="del_icon">
            </button>
        </div>`
  );
}

taskHigh.addEventListener('submit', handler);
taskLow.addEventListener('submit', handler);
