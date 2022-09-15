const taskHigh = document.getElementById('todo_task_high');
const taskLow = document.getElementById('todo_task_low');
const addTaskHigh = document.querySelector('#todo_task_add_high');
const addTaskLow = document.querySelector('#todo_task_add_low');

function handlerFirst(event) {
  event.preventDefault();

  const newTask = addTaskHigh.value;

  taskHigh.insertAdjacentHTML(
    'afterend',
    ` <div class="todo_list">
            <label class="todo_list_task">
                <input type="checkbox" class="todo_task_input">
                <span class="check-style"></span>
                <span class="task_name">${newTask}</span>
            </label>
            <button class="btn_task task_del">
                <img src="img/icon_delete.svg" alt="del_icon">
            </button>
        </div>`
  );
}

function handlerSecond(event) {
  event.preventDefault();

  const newTask = addTaskLow.value;

  taskLow.insertAdjacentHTML(
    'afterend',
    ` <div class="todo_list">
            <label class="todo_list_task">
                <input type="checkbox" class="todo_task_input">
                <span class="check-style"></span>
                <span class="task_name">${newTask}</span>
            </label>
            <button class="btn_task task_del">
                <img src="img/icon_delete.svg" alt="del_icon">
            </button>
        </div>`
  );
}

taskHigh.addEventListener('submit', handlerFirst);
taskLow.addEventListener('submit', handlerSecond);
