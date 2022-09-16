const firstTodoForm = document.getElementById('form-1');
const secondTodoForm = document.getElementById('form-2');
let checkboxCounter = 1;

firstTodoForm.addEventListener('submit', {
	handleEvent: createTask,
	todoForm: firstTodoForm,
});
secondTodoForm.addEventListener('submit', {
	handleEvent: createTask,
	todoForm: secondTodoForm,
});

function createTask(event) {
	event.preventDefault();
	const todoInput = this.todoForm.querySelector('input');
	const todoUl = this.todoForm.nextElementSibling;
	const tasks = document.querySelectorAll('.todo__task-text');
	const newTask = todoInput.value;

	if (newTask.trim() === '') {
		alert('Не введена задача');
		return;
	}

	if (tasks[0] != undefined) {
		if (checkTask(newTask)) {
			alert('Такая задача уже есть!');
			return;
		}
	}

	todoUl.insertAdjacentHTML(
		'beforeend',
		`
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
            </li>`
	);
	checkboxCounter++;
}

function checkTask(newTask) {
	const tasks = document.querySelectorAll('.todo__task');

	for (let i = 0; i < tasks.length; i++) {
		if (
			newTask.trim() === tasks[i].innerHTML.trim() ||
			newTask === tasks[i].innerHTML
		) {
			return true;
		}
	}
}
