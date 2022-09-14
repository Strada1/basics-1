const ELEMENTS = {
  HIGH_FORM: document.querySelector('#high__form'),
  HIGH_ADD_INPUT: document.querySelector('#high__add-input'),
  LOW_FORM: document.querySelector('#low__form'),
  LOW_ADD_INPUT: document.querySelector('#low__add-input'),
  DELETE_BTN: document.querySelectorAll('.todo__icon-delete'),
  TODO_TASK: document.querySelectorAll('.todo__task'),
  TODO_SPAN: document.querySelectorAll('.todo__name'),
  BODY: document.body,
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
    name: '1',
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH,
  },
  {
    name: '2',
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH,
  },
  {
    name: '3',
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH,
  },
  {
    name: '4',
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
ELEMENTS.BODY.onload = function () {
  render();
};
// delete

function deleteTask(task) {
  let pos = list.findIndex((item) => item.name == task);
  if (pos !== -1) {
    list.splice([pos], 1);
  }
  render();
}

// changeStatus
function changeStatus(task, status) {
  let pos = list.findIndex((item) => item.name == task);
  if (pos !== -1 && typeof status == 'string' && status !== '') {
    list[pos].status = status;
  }
  render();
}
// render

function render() {
  document.querySelectorAll('.todo__task').forEach(function (task) {
    task.remove();
  });

  list.map(function (itemTask) {
    switch (itemTask.priority) {
      case PRIORITY.HIGH:
        ELEMENTS.HIGH_FORM.insertAdjacentHTML(
          'afterend',
          `<div class="todo__task">
            <div class="todo__task-content">
              <label  class="todo__task-text">
                <input type="checkbox" id="high__task1" class="todo__task-checkbox" onclick = 'changeStatus("${itemTask.name}", "done")' />
                <span class="todo__name">
                  ${itemTask.name}
                </span>
              </label>
            </div>
            <button class="todo__icon-delete" onclick = 'deleteTask("${itemTask.name}")'>
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
                <input type="checkbox" id="high__task1" class="todo__task-checkbox" onclick = 'changeStatus("${itemTask.name}", "done")'/>
                <span class="todo__name">
                  ${itemTask.name}
                </span>
              </label>
            </div>
            <button class="todo__icon-delete" onclick = 'deleteTask("${itemTask.name}")'>
              <img src="../img/delete-icon.svg" alt="icon" />
            </button>
          </div>`,
        );
        break;
      default:
        alert('Error list');
    }
    if (itemTask.status === STATUS.DONE) {
      document.querySelectorAll('.todo__task-checkbox').forEach(function (task) {
        task.classList.add('check');
      });
    }
  });
}
