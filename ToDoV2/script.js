const todosListOne = document.querySelector('.todosListOne');
const todoslistTwo = document.querySelector('.todoslistTwo');
const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');
const BtnAddOne = document.querySelector('.BtnAddOne');
const BtnAddTwo = document.querySelector('.BtnAddTwo');





//массив обьектов
let todos = [];


//Функция добавления обьекта в массив
function addTodo(text){
  const todo = {
    text,
    done:false,
    id: `${Math.random()}`
  };

    todos.push(todo);
};


//Функция вывода на страницу task one
function addTaskOne(){
  let html = '';

  todos.forEach(todo => {
    html += ` <form class="completed">
            <input type="radio" class="check">
            <div class="inputCompleted">
              <div>${todo.text}</div>
            </div>
            <a href="#" class="BtnClose">
              <img class="logo__close" src="img/close.png" alt="" />
            </a>
          </form>`; 

  })
    todosListOne.innerHTML = html;
    
};

//Функция вывода на страницу task two
function addTaskTwo(){
  let html = '';

  todos.forEach(todo => {
    html += ` <form class="completed">
            <input type="radio" class="check">
            <div class="inputCompleted">
              <div>${todo.text}</div>
            </div>
            <a href="#" class="BtnClose">
              <img class="logo__close" src="img/close.png" alt="" />
            </a>
          </form>`; 

  })
    todoslistTwo.innerHTML = html;
};


//добавления task one

inputOne.addEventListener('keypress', (event) =>{
  if(event.key === 'Enter'){
    event.preventDefault();
    BtnAddOne.click();
  }
});

BtnAddOne.addEventListener('click', () => {
  const text = inputOne.value;

  addTodo(text);

  addTaskOne();
});


// добавления task two
inputTwo.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    BtnAddTwo.click();
  }
});


BtnAddTwo.addEventListener('click', () => {
  const text2 = inputTwo.value;

  addTodo(text2);

  addTaskTwo();
});




