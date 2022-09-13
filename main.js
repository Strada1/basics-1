const firstTodoForm = document.getElementById('form-1');
const secondTodoForm = document.getElementById('form-2');
let checkboxCounter = 1;

firstTodoForm.addEventListener('submit', {handleEvent: createTask, todoForm: firstTodoForm});
secondTodoForm.addEventListener('submit', {handleEvent: createTask, todoForm: secondTodoForm});

function createTask (event) {
  event.preventDefault();
  const todoInput = this.todoForm.querySelector('input');
  const todoUl = this.todoForm.nextElementSibling;

  todoUl.insertAdjacentHTML('beforeend', `
            <li class="todo__list-item">
              <input class="todo__checkbox" type="checkbox" id="todo__checkbox-${checkboxCounter}">
              <label for="todo__checkbox-${checkboxCounter}" class="todo__task">
                <div class="todo__text">
                  <p class="todo__task-text">
                    ${todoInput.value}
                  </p>
                </div>
                <button class="todo__close-btn"></button>
              </label>
            </li>`);
  checkboxCounter++;
}