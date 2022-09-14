import { list, ListPriority, ListStatuses } from './data.js';
import { findPriorityValue, addTask, deleteTask, changeStatus } from './data-operations.js';
import { outputError, ErrorList } from './error.js';

const todoListElement = document.querySelector('.todo__priority-list');
const ptiorityItemTemplate = document.querySelector('#todo-priority-item')
  .content
  .querySelector('.todo__priority-item');
const taskItemTemplate = document.querySelector('#todo-task-item')
  .content
  .querySelector('.todo__task-item');


// Получение DOM-элемента с задачей
const getTaskElement = (name, status) => {
  const taskItemElement = taskItemTemplate.cloneNode(true);
  const taskLabelElement = taskItemElement.querySelector('.todo__task-label');
  const statusControlElement = taskItemElement.querySelector('.todo__task-check[name="status"]');
  const deleteButtonElement = taskItemElement.querySelector('.todo__delete-task');

  taskItemElement
    .querySelector('.todo__task-text')
    .textContent = name;

  if (status === ListStatuses.DONE) {
    taskLabelElement.classList.add('todo__task-label--done');
    statusControlElement.setAttribute('checked', 'true');
  }

  statusControlElement.addEventListener('change', (evt) => {
    const status = evt.target.checked ? ListStatuses.DONE : ListStatuses.TODO;
    changeStatus(name, status);
    render();
  });

  deleteButtonElement.addEventListener('click', (evt) => {
    deleteTask(name) && render();
  });

  return taskItemElement;
}


// Выведение списка задач с заданным приоритетом
const getListOfOnePriority = (priority) => {
  if (!findPriorityValue(priority)) {
    outputError(ErrorList.PRIORITY_ERROR);
    return;
  }

  const taskItemsFragment = document.createDocumentFragment();

  list.forEach((task) => {
    if (task.priority === priority) {
      taskItemsFragment.append(getTaskElement(task.name, task.status));
    }
  });

  return taskItemsFragment;
};


// Получение DOM-элемента со списком задач одного приоритета
const getPriorityItemElement = (priority) => {
  const priorityItemElement = ptiorityItemTemplate.cloneNode(true);

  const priorityTitleElement = priorityItemElement.querySelector('.todo__priority-title');
  const taskListElement = priorityItemElement.querySelector('.todo__tasks-list');
  const addTaskFormElement = priorityItemElement.querySelector('.todo__add-task-form');
  const taskInputElement = priorityItemElement.querySelector('.todo__task-input');

  priorityTitleElement.textContent = priority;
  taskListElement.dataset.priority = priority;
  taskListElement.append(getListOfOnePriority(priority));

  addTaskFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const taskName = taskInputElement.value;
    taskInputElement.value = '';
    if (taskName.trim()) {
      addTask(taskName, priority) && render();
    }
  });

  return priorityItemElement;
};


// Функция рендеринга всего списка
const render = () => {
  const priorityList = Object.values(ListPriority);
  if (!priorityList) {
    return;
  }

  const priorityItemsFragment = document.createDocumentFragment();

  for (const priority of priorityList) {
    priorityItemsFragment.append(getPriorityItemElement(priority));
  }

  todoListElement.innerHTML = '';
  todoListElement.append(priorityItemsFragment);
};

export { render };
