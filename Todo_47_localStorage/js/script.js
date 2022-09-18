const highBlock = document.querySelector('.high-block');
const lowBlock = document.querySelector('.low-block');
const addBlock = document.querySelector('task-add-block');
const highTaskInput = document.querySelector('.high-input');
const laowTaskInput = document.querySelector('.low-input');
const addTaskInTodoList = document.querySelectorAll('.unique_btn-add');
const inputs = document.querySelectorAll('input[type = "text"]');
const form = document.querySelectorAll('form');
const highBtnAdd = document.querySelector('.task-plus.high');
const lowBtnAdd = document.querySelector('.task-plus.low');
const STATUS = {
  in_Progress: 'In Progress',
  DONE: 'done',
  TO_DO: 'TO DO',
};
const toDoList = [];
const PRIORITY = {
  low: 'low',
  high: 'high',
};

function examination(task) {
  const index = toDoList.findIndex(item => item.name == task);
  return index;
}

function changeStatus(nameTask, statusName) {
  const index = examination(nameTask);
  if (index === -1) {
    return false;
  } else if (toDoList[index].name === nameTask) {
    toDoList[index].status = statusName;
    recordToStorage(toDoList);
  }
}

function deleteTask(nameTask) {
  const index = examination(nameTask);
  toDoList.splice(index, 1);
}

function createTask(task, parent) {
  parent.insertAdjacentHTML(
    'beforeEnd',
    `<div class="new-task" id = 'newTask_${task.id}'>
  <label class="connect">
    <input type="checkbox" class="check-box" id = "check_${task.id}" >
    <span class="check-style"></span>
    <div class="task-text">${task.name}</div>

  </label>
  <div class="task-close" id = 'close_${task.id}'>
    <img src="images/close.svg" alt="">
  </div>
</div>`
  );
  let newTask = document.getElementById(`newTask_${task.id}`);
  let checkboxes = document.getElementById(`check_${task.id}`);
  let taskClose = document.getElementById(`close_${task.id}`);

  if (task.status === 'done') {
    newTask.classList.add('add');
    checkboxes.checked = true;
  }

  checkboxes.addEventListener('change', () => {
    newTask.classList.toggle('add');
    if (checkboxes.checked) {
      changeStatus(task.name, STATUS.DONE);
    } else {
      changeStatus(task.name, STATUS.TO_DO);
    }
  });

  taskClose.addEventListener('click', () => {
    deleteTask(task.name);
    recordToStorage(toDoList);
    newTask.remove();
  });
}

function addTask(nameTask, prior) {
  nameTask = nameTask.trim();
  try {
    if (examination(nameTask) !== -1) {
      throw new Error('Такая задача уже существует!');
    } else {
      toDoList.push({
        name: nameTask,
        status: STATUS.TO_DO,
        PRIORITY: prior,
        id: new Date().toLocaleString() + new Date().getMilliseconds(),
      });
      recordToStorage(toDoList);
      render();
      return true;
    }
  } catch (e) {
    alert(e.message);
  }
}
function render() {
  highBlock.innerHTML = '';
  lowBlock.innerHTML = '';
  let toDoListReverse = [...toDoList].reverse();

  toDoListReverse.forEach(item => {
    if (item.PRIORITY === 'high') {
      createTask(item, highBlock);
    } else {
      createTask(item, lowBlock);
    }
  });
}

addTaskInTodoList.forEach(item => {
  item.addEventListener('click', e => {
    let Id = e.target.classList.contains('high') ? 'high' : 'low';
    let inputUser = document.querySelector(`.${Id}-input`);
    try {
      if (inputUser.value !== '') {
        addTask(inputUser.value, Id);
        inputUser.value = '';
      } else {
        throw new Error('Вы пытаетесь добавить пустую строку!');
      }
    } catch (e) {
      alert(e.message);
    }
  });
});

form.forEach(item => {
  item.addEventListener('submit', e => e.preventDefault());
});

if (localStorage.length !== 0) {
  toDoList.push(...getInfoStorage());
  render();
}

function getInfoStorage() {
  let task = JSON.parse(localStorage.getItem('Task'));
  return task;
}

function recordToStorage(tasks) {
  const tasksStorage = JSON.stringify(tasks);
  localStorage.setItem('Task', tasksStorage);
}
