todoUl.insertAdjacentHTML('beforeend', `
            <li class="todo__list-item">
              <input class="todo__checkbox" type="checkbox" id="todo__checkbox-${checkboxCounter}">
              <label for="todo__checkbox-${checkboxCounter}" class="todo__task">
                <div class="todo__text">
                  <p class="todo__task-text">
                    ${newTask}
                  </p>
                </div>
                <button class="todo__close-btn"></button>
              </label>
            </li>`);
checkboxCounter++;


const todoInput = this.todoForm.querySelector('input');
const todoUl = this.todoForm.nextElementSibling;
const tasks = document.querySelectorAll('.todo__task-text');