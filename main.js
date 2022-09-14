const ELEMENTS = {
  HIGH_FORM: document.querySelector('#high__form'),
  HIGH_ADD_INPUT: document.querySelector('#high__add-input'),
  LOW_FORM: document.querySelector('#low__form'),
  LOW_ADD_INPUT: document.querySelector('#low__add-input'),
  DELETE_BTN: document.querySelectorAll('.todo__icon-delete'),
  TODO_TASK: document.querySelectorAll('.todo__task'),
  TODO_SPAN: document.querySelectorAll('.todo__name'),
};
const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
};
const STATUS = {
  TO_DO: 'To do',
  DONE: 'Done',
};
const list = [
  {
    name: document.querySelector('#high__name1').innerText,
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH,
  },
  {
    name: document.querySelector('#high__name2').innerText,
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH,
  },
  {
    name: document.querySelector('#high__name3').innerText,
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH,
  },
  {
    name: document.querySelector('#low__name1').innerText,
    status: STATUS.TO_DO,
    priority: PRIORITY.LOW,
  },
];

// add
function addNewTask(task, priority) {
  let pos = list.findIndex((item) => item.name == task);
  if (pos === -1) {
    list.push({ name: task, status: STATUS.TO_DO, priority: priority });
  }

  render();
}

function checkTask(input, priority) {
  let newTask = input.value;
  let defaultTaskArray = document.querySelectorAll('.todo__name');
  for (let defaultTask of defaultTaskArray) {
    if (defaultTask.innerText === newTask) {
      return false;
    }
  }
  if (newTask === '' || !isNaN(newTask)) return false;
  addNewTask(newTask, priority);
  return false;
}

ELEMENTS.HIGH_FORM.onsubmit = function (event) {
  event.preventDefault();
  checkTask(ELEMENTS.HIGH_ADD_INPUT, PRIORITY.HIGH);
};

ELEMENTS.LOW_FORM.onsubmit = function (event) {
  event.preventDefault();
  checkTask(ELEMENTS.LOW_ADD_INPUT, PRIORITY.LOW);
};

// delete

function deleteTask(task) {
  console.log(task);
  let pos = list.findIndex((item) => item.name == task);
  if (pos !== -1) {
    list.splice([pos], 1);
  }
  render();
}

// render

function render() {
  for (let defaultTask of ELEMENTS.TODO_TASK) {
    defaultTask.remove();
  }
  list.map(function (itemTask) {
    switch (itemTask.priority) {
      case PRIORITY.HIGH:
        ELEMENTS.HIGH_FORM.insertAdjacentHTML(
          'afterend',
          `<div class="todo__task">
            <div class="todo__task-content">
              <label  class="todo__task-text">
                <input type="checkbox" id="high__task1" class="todo__task-checkbox" />
                <span class="todo__name">
                  ${itemTask.name}
                </span>
              </label>
            </div>
            <button class="todo__icon-delete">
              <img src="../img/delete-icon.svg" alt="icon" />
            </button>
          </div>`,
        );
        break;
      case PRIORITY.LOW:
        ELEMENTS.LOW_FORM.insertAdjacentHTML(
          'afterend',
          `<div class="todo__task">
            <div class="todo__task-content">
              <label  class="todo__task-text">
                <input type="checkbox" id="high__task1" class="todo__task-checkbox" />
                <span class="todo__name">
                  ${itemTask.name}
                </span>
              </label>
            </div>
            <button class="todo__icon-delete">
              <img src="../img/delete-icon.svg" alt="icon" />
            </button>
          </div>`,
        );
        break;
      default:
        alert('Error list');
    }
  });
  ELEMENTS.HIGH_FORM.querySelector('.todo__icon-delete').addEventListener('click', function () {
    deleteTask(ELEMENTS.HIGH_FORM.querySelector('.todo__icon-delete').parentNode.innerText);
  });
  list.splice(0);
}
