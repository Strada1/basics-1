const form = document.querySelectorAll('.form');
let checkboxIdCount = 0;

//Основной массив 
const arrayTodo = [];

const STATUS = {
  TODO: 'todo',
  DONE: 'done'
}

const PRIORITY = {
  HIGH: 'high',
  LOW: 'low'
}

//Шаблон таска в HTML
const template = document.getElementById('template').content.querySelector('.new-task-wrapper');


//Навешиваю событие на форму
form.forEach((form) => {
  form.addEventListener('submit', hundlerSubmit);
})

//Определяю приоритет таска
function hundlerSubmit(event) {
  event.preventDefault();
  const setPriority = event.target.closest('.form-high')
  ? PRIORITY.HIGH
  : PRIORITY.LOW;
  addTask(event, setPriority);
}

//Добавляю таск в массив
function addTask(event, priority) {
  const dataFromInput = event.target.querySelector('.input-data').value;
  arrayTodo.push({
    data: dataFromInput,
    status: STATUS.TODO,
    priority: priority
  });
  event.target.reset();
  render();
}

//Прохожусь по массиву, стираю и добавляю -> отрисовываю таски в UI
function render() {
  const allTask = document.querySelectorAll('.new-task-wrapper');
  allTask.forEach((task) => {task.remove()});

  const tasksAreHighPriority = arrayTodo.filter((task) => task.priority === PRIORITY.HIGH).reverse();
  const tasksAreLowPriority = arrayTodo.filter((task) => task.priority == PRIORITY.LOW).reverse();

  for(let i = 0; i < tasksAreHighPriority.length; i++){
    const copyElement = template.cloneNode(true);
    
    copyElement.querySelector('.new-text').textContent = tasksAreHighPriority[i].data;
    copyElement.querySelector('.new-task').id = 'new'+checkboxIdCount;
    copyElement.querySelector('.new-task-label').htmlFor = 'new'+checkboxIdCount;
    checkboxIdCount++;
    if(tasksAreHighPriority[i].status === STATUS.DONE) {
      copyElement.querySelector('.new-task').checked = true;
      copyElement.style.background = '#F4F4F4';
    }
    const formHigh = document.querySelector('.form-high');
    formHigh.after(copyElement);
  }

  for(let i = 0; i < tasksAreLowPriority.length; i++){
    const copyElement = template.cloneNode(true);
    
    copyElement.querySelector('.new-text').textContent = tasksAreLowPriority[i].data;
    copyElement.querySelector('.new-task').id = 'new'+checkboxIdCount;
    copyElement.querySelector('.new-task-label').htmlFor = 'new'+checkboxIdCount;
    checkboxIdCount++;
    if(tasksAreLowPriority[i].status === STATUS.DONE) {
      copyElement.querySelector('.new-task').checked = true;
      copyElement.style.background = '#F4F4F4';
    }
  const formLow = document.querySelector('.form-low');
  formLow.after(copyElement);
  }

  //Удаление таска из массива
  const closeTaskBtn = document.querySelectorAll('.close-task');
  console.log(closeTaskBtn);
  closeTaskBtn.forEach((closeTaskButton) => {
    closeTaskButton.addEventListener('click', function deleteTask(event) {
      const inputText = event.target.nextElementSibling.textContent;
      const curentTask = arrayTodo.findIndex((element) => element.data === inputText);
      arrayTodo.splice(curentTask, 1);
      render();
    });
  })

  //Изменение статуса таска при чекпоинте
  const changeStatus = document.querySelectorAll('.new-task');
  changeStatus.forEach((checkbox) => {
    checkbox.addEventListener('click', function(event){
      if(event.target.checked) {
        console.log(event.target)
        event.target.closest('.new-task-wrapper').classList.add('task-checked');
        console.log(event.target.closest('.new-task-wrapper'));
        const curentText = event.target.closest('.new-task-wrapper').lastElementChild.textContent;
        console.log(curentText);
        const taskIndex = arrayTodo.findIndex((elem) => elem.data === curentText);
        
        arrayTodo[taskIndex].status = STATUS.DONE;
        console.log(arrayTodo);
        console.log(taskIndex);
        return;
      }

      event.target.closest('.new-task-wrapper').classList.remove('task-checked');
        console.log(event.target.closest('.new-task-wrapper'));
        const curentText = event.target.closest('.new-task-wrapper').lastElementChild.textContent;
        console.log(curentText);
        const taskIndex = arrayTodo.findIndex((elem) => elem.data === curentText);
        
        arrayTodo[taskIndex].status = STATUS.DONE;
        console.log(arrayTodo);
        console.log(taskIndex);
    })
  })
}




