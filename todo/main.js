import { ELEMENTS } from './elements.js'

ELEMENTS.FORMS.forEach(form => {
	form.addEventListener('submit', function (e) {
		e.preventDefault()
		const currentForm = this
		const input = currentForm.querySelector('.todo_input')
		const taskText = input.value
		const priority = currentForm.dataset.priority

		addTask(taskText, priority)
		render()
		currentForm.reset()
	})
})

ELEMENTS.TASKS_LISTS.forEach(list => {
	list.addEventListener('click', e => {
		const target = e.target
		const listItem = target.closest('.todo_item')
		const taskTextElement = listItem.querySelector('.todo_text')
		const taskName = taskTextElement.textContent
		const isCheckbox = target.classList.contains('todo_checkbox')
		const isDeleteTaskButton = target.classList.contains('todo_remove') || target.closest('.todo_remove')

		if (isCheckbox) {
			const checkbox = target
	
			if (checkbox.checked) {
				listItem.classList.add('todo_item--active')
				changeStatus(taskName, STATUS.DONE)
			} else {
				listItem.classList.remove('todo_item--active')
				changeStatus(taskName, STATUS.TO_DO)
			}
		}

		if(isDeleteTaskButton) {
			deleteTask(taskName)
			render()
		}
	})
})

const TASKS = []

const PRIORITY = {
	HIGH: 'high',
	LOW: 'low'
}

const STATUS = {
	TO_DO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
}

const ERROR = {
	TASK_EXSIST: 'Task already exsist',
	NO_TASK: 'Tasks not in the list',
	TASK_NOT_ENTERED: 'You didn\'t provide a task name',
	STATUS_NOT_ENTERED: 'You didn\'t provide a task status',
	TASK_NOT_IN_LIST: 'Task is not in the list'
}

function render() {
	ELEMENTS.HIGH_PRIORITY_LIST.innerHTML = ''
	ELEMENTS.LOW_PRIORITY_LIST.innerHTML = ''

	TASKS.forEach(task => {
		const taskMarkup = `<li class="todo_item">
													<label class="todo_label">
														<input class="todo_checkbox" type="checkbox">
														<div class="todo_checkbox-custom"></div>
													</label>
													<p class="todo_text">${task.name}</p>
													<button class="todo_remove">
														<img src="images/close-icon.svg" alt="close">
													</button>
												</li>`
		
		const isHighPriorityTask = task.priority === PRIORITY.HIGH
		const isLowPriorityTask = task.priority === PRIORITY.LOW	

		if(isHighPriorityTask) ELEMENTS.HIGH_PRIORITY_LIST.innerHTML += taskMarkup
		if(isLowPriorityTask) ELEMENTS.LOW_PRIORITY_LIST.innerHTML += taskMarkup		
	})
}

function addTask(task, priority) {
	try {
		if (!task) throw new Error(ERROR.TASK_NOT_ENTERED)

		const isTaskExsist = TASKS.find(item => item.name === task);
	
		if (isTaskExsist) throw new Error(ERROR.TASK_EXSIST)
		
		TASKS.push(
			{
				name: task,
				status: STATUS.TO_DO,
				priority: priority || PRIORITY.LOW
			}
		)
	} catch(error) {
		const taskNotEntered = error.message === ERROR.TASK_NOT_ENTERED
		const taskAlreadyExsist = error.message === ERROR.TASK_EXSIST

		if(taskNotEntered || taskAlreadyExsist) {
			alert(`${error.name}: ${error.message}`)
		} else {
			throw error
		}
	}
}

function deleteTask(task) {
	const taskIndex = TASKS.findIndex(item => item.name === task);
	TASKS.splice(taskIndex, 1)
}

function changeStatus(task, status) {
	const targetTask = TASKS.find(item => item.name === task);
	targetTask.status = status
}