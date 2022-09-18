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
  const newTask = document.createElement('div');
  const checkboxes = document.createElement('input');
  const labelCon = document.createElement('label');
  const checkStyle = document.createElement('span');
  const taskText = document.createElement('div');
  const taskClose = document.createElement('button');
  const closeImg = document.createElement('img');

  taskClose.appendChild(closeImg);
  newTask.className = 'new-task';
  labelCon.className = 'connect';
  taskText.className = 'task-text';
  checkStyle.className = 'check-style';
  checkboxes.setAttribute('type', 'checkbox');
  checkboxes.className = 'check-box';
  taskClose.className = 'task-close';
  closeImg.src = 'images/close.svg';
  taskText.textContent = task.name;

  if (task.status === 'done') {
    newTask.classList.add('add');
    checkboxes.checked = true;
  }

  function changeColorOnCheckbox() {
    newTask.classList.toggle('add');
    if (checkboxes.checked) {
      changeStatus(task.name, STATUS.DONE);
    } else {
      changeStatus(task.name, STATUS.TO_DO);
    }
  }

  function deleteTaskInHtml() {
    deleteTask(task.name);
    recordToStorage(toDoList);
    newTask.remove();
  }

  checkboxes.addEventListener('change', changeColorOnCheckbox);

  taskClose.addEventListener('click', deleteTaskInHtml);

  labelCon.appendChild(checkboxes);
  labelCon.appendChild(checkStyle);
  labelCon.appendChild(taskText);
  newTask.appendChild(labelCon);
  newTask.appendChild(taskClose);
  parent.appendChild(newTask);
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
  const toDoListReverse = [...toDoList].reverse();

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
    const Id = e.target.classList.contains('high') ? 'high' : 'low';
    const inputUser = document.querySelector(`.${Id}-input`);
    try {
      if (inputUser.value) {
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

if (localStorage.length) {
  toDoList.push(...getInfoStorage());
  render();
}

function getInfoStorage() {
  const task = JSON.parse(localStorage.getItem('Task'));
  return task;
}

function recordToStorage(tasks) {
  const tasksStorage = JSON.stringify(tasks);
  localStorage.setItem('Task', tasksStorage);
}
