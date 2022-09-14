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

function randomId () {
  let randomId = Math.floor(Math.random() * 100);
  return randomId;
}

function itemTaskHtml (value) {
  const random = randomId();
  const itemHtml = `<input type="checkbox" class="checkbox__todoItem" id=${random}>
        <label for=${random} class="text__todoItem">${value}</label>
        <button class="btn btn__deleteTask">
          <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="18.0096" y2="-0.5" transform="matrix(0.999988 -0.00481873 0.0748716 0.997193 1 10)" stroke="#998899"/>
            <line y1="-0.5" x2="18.0401" y2="-0.5" transform="matrix(-0.0192905 -0.999814 0.998699 0.0509976 10.5404 18.8444)" stroke="#998899"/>
          </svg>
        </button>`
  return itemHtml;
}

formTaskHigh.addEventListener('submit', (event) => {
  event.preventDefault();

  valueHigh = inputTaskHigh.value;
  todoListHigh.push({id: todoListHigh.length, task: valueHigh});
  inputTaskHigh.value = '';

  const todoItem = document.createElement('div');
  todoItem.className = 'todoItem';
  todoItem.innerHTML = itemTaskHtml(valueHigh);
  itemsTasksHigh.append(todoItem);
  console.log(todoListHigh);
});

formTaskLow.addEventListener('submit', (event) => {
  event.preventDefault();

  valueLow = inputTaskLow.value;
  todoListLow.push({id: todoListLow.length, task: valueLow});
  inputTaskLow.value = '';

  const todoItem = document.createElement('div');
  todoItem.className = 'todoItem';
  todoItem.innerHTML = itemTaskHtml(valueLow);
  itemsTasksLow.append(todoItem);
  console.log(todoListLow);
});
