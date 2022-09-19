import { createTask, addTask } from './more.js';
import { STATUS, PRIORITY, list, forms, priorityHigh, priorityLow } from './const.js';
import { writeData } from './localStorage.js';

forms.forEach((form) => {
	form.addEventListener('submit', (evt) => {
		evt.preventDefault();
		
		try {
			if (evt.target.className === 'high') {
				addTask(evt.target[0].value, STATUS.TO_DO, PRIORITY.HIGH)
				evt.target[0].value = '';
			} else {
				addTask(evt.target[0].value, STATUS.TO_DO, PRIORITY.LOW);
				evt.target[0].value = ''
			}
		} catch (error) {
			console.log(error.message)
		}
			
		render()
	} )
})

function render() {
	document.querySelectorAll('.item').forEach(task => task.remove());

	writeData(list);

	list.map((task) => {
		if (task.priority === PRIORITY.HIGH) {
			createTask(priorityHigh, task, task.id);
		} else {
			createTask(priorityLow, task, task.id)
		}
	})
}


