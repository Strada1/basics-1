const formTaskHigh = document.querySelector('#formTaskHigh');
const formTaskLow = document.querySelector('#formTaskLow');
const inputTaskHigh = document.querySelector('#inputTaskHigh');
const inputTaskLow = document.querySelector('#inputTaskLow');
const itemsTasksHigh = document.querySelector('#itemsTasksHigh');
const itemsTasksLow = document.querySelector('#itemsTasksLow');
const todoListHigh = [];
const todoListLow = [];
let valueHigh;
let valueLow;


const STATUS = {
  'TODO': 'TODO',
  'DONE': 'DONE',
}

const PRIORITY = {
  'HIGH': 'HIGH',
  'LOW': 'LOW'
}

// функция рендера ToDo списка
function renderTaskHtml (tasksBlock, todoList) {
  tasksBlock.innerHTML = '';
  todoList.map((task) => {
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn__deleteTask';
    buttonDelete.innerHTML = '<svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <line y1="-0.5" x2="18.0096" y2="-0.5" transform="matrix(0.999988 -0.00481873 0.0748716 0.997193 1 10)" stroke="#998899"/>\n           <line y1="-0.5" x2="18.0401" y2="-0.5" transform="matrix(-0.0192905 -0.999814 0.998699 0.0509976 10.5404 18.8444)" stroke="#998899"/>\n </svg>';
    const html = `<input type="checkbox" class="checkbox__todoItem" id=${task.id}> 
      <label for=${task.id} class="text__todoItem">${task.task}</label> ${buttonDelete.outerHTML}`
    const todoItem = document.createElement('div');
    todoItem.className = 'todoItem';
    todoItem.innerHTML = html;
    const btnDeleteTask = todoItem.querySelector('button');
    tasksBlock.append(todoItem);
    btnDeleteTask.addEventListener('click', deleteTask(task.id, todoList, tasksBlock));
    console.log(todoList);
  })
}

// удаление задачи
function deleteTask (id, todoList, tasksBlock) {
  return () => {
    todoList.map((task, index) => {
      if (task.id === id) {
        todoList.splice(index, 1);
      }
    })
    renderTaskHtml(tasksBlock, todoList);
  }
}

// // меняет статус задачи
// const changeStatus = (task, todoList, newStatus) => {
//   console.log('a', task);
//   let item = todoList.find((item) => item.task === task.task );
//   let index = todoList.indexOf(item, 0);
//   todoList[index].status = newStatus;
//   console.log('b', task);
// }

formTaskHigh.addEventListener('submit', (event) => {
  event.preventDefault();

  if (inputTaskHigh.value === '') {
    valueHigh = 'Задача не задана';
  } else valueHigh = inputTaskHigh.value;
  todoListHigh.push({id: todoListHigh.length, task: valueHigh, status: STATUS.TODO, priority: PRIORITY.HIGH});
  inputTaskHigh.value = '';

  renderTaskHtml(itemsTasksHigh, todoListHigh);
});

formTaskLow.addEventListener('submit', (event) => {
  event.preventDefault();

  if (inputTaskLow.value === '') {
    valueLow = 'Задача не задана';
  } else valueLow = inputTaskLow.value;
  todoListLow.push({id: todoListLow.length, task: valueLow, status: STATUS.TODO, priority: PRIORITY.LOW});
  inputTaskLow.value = '';

  renderTaskHtml(itemsTasksLow, todoListLow);
});
