const firstTodoForm = document.getElementById('form-1');
const secondTodoForm = document.getElementById('form-2');

const STATUS = {
	TO_DO: 'To Do',
	DONE: 'Done',
};
const taskList = [];

let checkboxCounter = 1;

firstTodoForm.addEventListener('submit', {
	handleEvent: addTask,
	todoForm: firstTodoForm,
});
secondTodoForm.addEventListener('submit', {
	handleEvent: addTask,
	todoForm: secondTodoForm,
});

function addTask(event) {
	event.preventDefault();
	const todoInput = this.todoForm.querySelector('input');
	const task = todoInput.value;
	const priority = this.todoForm.previousElementSibling.innerHTML;
	if (task.trim() === '') {
		alert('Не введена задача');
		return;
	}

	if (taskList[0] != undefined) {
		if (checkTask(task)) {
			alert('Такая задача уже есть!');
			return;
		}
	}

	taskList.push({ name: task, status: STATUS.TO_DO, priority: priority });
	render();
}

function changeStatus(event) {
	const checkbox = event.currentTarget;
	const li = checkbox.closest('.todo__list-item');
	const taskID = checkbox.id.slice(15);
	const task = li.querySelector('.todo__task-text').innerHTML.trim();
	if (!checkTask(task)) {
		alert('Такой задачи нет в списке!');
		return;
	}
	if (taskList[taskID].status === STATUS.TO_DO) {
		taskList[taskID].status = STATUS.DONE;
	} else if (taskList[taskID].status === STATUS.DONE) {
		taskList[taskID].status = STATUS.TO_DO;
	}
	render();
}

function deleteTask(event) {
	const btn = event.currentTarget;
	const label = btn.closest('.todo__task');
	const taskID = label.previousElementSibling.id.slice(15);
	const task = label.querySelector('.todo__task-text').innerHTML.trim();
	if (!checkTask(task)) {
		alert('Такой задачи нет в списке!');
	}
	taskList.splice(taskID, 1);
	render();
}

function render() {
	const UL = document.querySelectorAll('.todo__list-item');
	for (let i = 0; i < UL.length; i++) {
		UL[i].remove();
	}

	taskList.forEach((task, taskIndex) => {
		const taskPriority =
			task.priority[0] + task.priority.slice(1).toLowerCase();
		const todoUl = document.getElementById(`todo${taskPriority}List`);
		let status = '';
		let taskCheckbox = '';
		if (task.status === STATUS.DONE) {
			status = 'todo__list-item--active';
			taskCheckbox = 'checked';
		}
		todoUl.insertAdjacentHTML(
			'beforeend',
			`
            <li class="todo__list-item ${status}">
              <input onclick="changeStatus(event)" class="todo__checkbox" type="checkbox" id="todo__checkbox-${taskIndex}" ${taskCheckbox}>
              <label for="todo__checkbox-${taskIndex}" class="todo__task">
                <div class="todo__text">
                  <p class="todo__task-text">
                    ${task.name}
                  </p>
                </div>
                <button onclick="deleteTask(event)" class="todo__close-btn"></button>
              </label>
            </li>`
		);
	});
}

function checkTask(checkTask) {
	return taskList.find((task) => task.name === checkTask);
}

function getIndex(ctask) {
	return taskList.find((task) => task.name === checkTask);
}
