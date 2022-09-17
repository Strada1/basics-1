const highBlock = document.querySelector('.high-block');
const lowBlock = document.querySelector('.low-block');
const addBlock = document.querySelector('task-add-block');
const highTaskInput = document.querySelector('.high-input');
const lowTaskInput = document.querySelector('.low-input');
const addTaskInTodoList = document.querySelectorAll('.unique_btn-add');
const inputs = document.querySelectorAll('input[type = "text"]');
const form = document.querySelectorAll('form');
const highBtnAdd = document.querySelector('.task-plus.high');
const lowBtnAdd = document.querySelector('.task-plus.low');
let unique_id = 0;
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
    for (let i = 0; i < localStorage.length; i++) {
      let NameOfTheTask = localStorage.key(i);
      let itemStorage = JSON.parse(localStorage.getItem(NameOfTheTask));

      if (itemStorage.name === nameTask) {
        localStorage.setItem(
          `Task${toDoList[index].id}`,
          JSON.stringify(toDoList[index])
        );
      }
    }
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

    localStorage.removeItem(`Task${task.id}`);
    newTask.remove();
  });
}

function addTask(nameTask, prior) {
  unique_id++;
  nameTask = nameTask.trim();
  try {
    if (examination(nameTask) !== -1) {
      throw new Error('Такая задача уже существует!');
    } else {
      toDoList.push({
        name: nameTask,
        status: STATUS.TO_DO,
        PRIORITY: prior,
        id: unique_id,
      });
      localStorage.setItem(
        `Task${unique_id}`,
        JSON.stringify(toDoList[toDoList.length - 1])
      );
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

function maxIdInLocalStorage() {
  let arrStorage = [];
  for (let i = 0; i < localStorage.length; i++) {
    let NameOfTheTask = localStorage.key(i);
    arrStorage.push(JSON.parse(localStorage.getItem(NameOfTheTask)));
  }
  const maxId = [];
  arrStorage.forEach(item => {
    maxId.push(item.id);
  });
  return Math.max(...maxId);
}

function checkLocaleStorage() {
  if (localStorage.length !== 0) {
    let keys = Object.keys(localStorage);
    keys = keys.sort();

    for (let i = 0; keys.length > i; i++) {
      toDoList.push(JSON.parse(localStorage.getItem(keys[i])));

      unique_id = maxIdInLocalStorage();
    }
    render();
  }
}

checkLocaleStorage();
