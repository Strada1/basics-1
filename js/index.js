import { createTask, addTask } from './more.js';
import { STATUS, PRIORITY, list } from './const.js';



const forms = document.querySelectorAll('form');
const priorityHigh = document.querySelector('.high-list');
const priorityLow = document.querySelector('.low-list');
const addButton = document.querySelector('.new-task__button');

forms.forEach((form) => {
	form.addEventListener('submit', (evt) => {
		evt.preventDefault();

		if (evt.target.className === 'high') {
			addTask(evt.target[0].value, STATUS.TO_DO, PRIORITY.HIGH)
		} else {
			addTask(evt.target[0].value, STATUS.TO_DO, PRIORITY.LOW)
		}
			
		render()
	} )
})

function render() {
	document.querySelectorAll('.item').forEach(task => task.remove());

	list.map((task) => {
		if (task.priority === PRIORITY.HIGH) {
			createTask(priorityHigh, task, task.id);
		} else {
			createTask(priorityLow, task, task.id)
		}
	})
}
