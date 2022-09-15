const hightParent = document.querySelector('.parentHigh');
const highBlock = document.querySelector('.high-block');
const lowBlock = document.querySelector('.low-block');
const addBlock = document.querySelector('task-add-block');
const inputHighTask = document.querySelector('.high-input');
const inputLowTask = document.querySelector('.low-input');
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
    console.log('gg');
    return false;
  } else if (toDoList[index].name === nameTask) {
    toDoList[index].status = statusName;
  }
}

function deleteTask(nameTask) {
  const index = examination(nameTask);
  toDoList.splice(index, 1);
}

function createTask(task, parent) {
  let newTask = document.createElement('div');
  let checkboxes = document.createElement('input');
  let labelCon = document.createElement('label');
  let checkStyle = document.createElement('span');
  let taskText = document.createElement('div');
  let taskClose = document.createElement('button');
  let closeImg = document.createElement('img');

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
    console.log(toDoList);
    newTask.remove();
  });

  labelCon.appendChild(checkboxes);
  labelCon.appendChild(checkStyle);
  labelCon.appendChild(taskText);
  newTask.appendChild(labelCon);
  newTask.appendChild(taskClose);
  parent.appendChild(newTask);
  console.log(toDoList);
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
      });
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
  console.log(toDoListReverse, toDoList);

  toDoListReverse.forEach(item => {
    if (item.PRIORITY === 'high') {
      createTask(item, highBlock);
    } else {
      createTask(item, lowBlock);
    }
  });
}

highBtnAdd.addEventListener('click', () => {
  try {
    if (inputHighTask.value !== '') {
      addTask(inputHighTask.value, 'high');
      inputHighTask.value = '';
    } else {
      throw new Error('Вы пытаетесь добавить пустую строку!');
    }
  } catch (e) {
    alert(e.message);
  }
});

lowBtnAdd.addEventListener('click', () => {
  try {
    if (inputLowTask.value !== '') {
      addTask(inputLowTask.value, 'low');
      inputLowTask.value = '';
    } else {
      throw new Error('Вы пытаетесь добавить пустую строку!');
    }
  } catch (e) {
    alert(e.message);
  }
});

form.forEach(item => {
  item.addEventListener('submit', e => e.preventDefault());
});
