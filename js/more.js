import { STATUS, list } from './const.js'

let i = 0;

export function addTask(task, status = STATUS.TO_DO, priority) {
	i += 1;

	const newTask = {
		id: i,
		name: task,
		status: status,
		priority: priority,
	}

	return list.push(newTask)
};

function deleteTask(task) {
	const findItem = list.findIndex(item => item.name === task.name);

	if (findItem !== -1) {
    list.splice([findItem], 1);
  }
};

function changeStatus(task, status) {
	const result = list.find(item => item.name === task.name);

	return result.status = status;
};

export function createTask(priority, taskList, id) {
	const task = document.createElement('li');
	const label = document.createElement('label');
	const divCheck = document.createElement('div');
	const span = document.createElement('span');
	const closeBtn = document.createElement('img');

	task.classList.add('item');
	label.classList.add('item-label');
	divCheck.classList.add('check');
	span.classList.add('item-text');
	span.id = id;
	closeBtn.classList.add('close');
	closeBtn.src = 'css/img/close.png';
	
	
	priority.prepend(task);
	task.append(label);
	label.append(divCheck);
	label.append(span);
	label.append(closeBtn);
	
	
	divCheck.addEventListener('click', (evt) => {
		
		task.classList.toggle('checked');

		if (evt.target.classList.contains('checked')) {
			evt.target.classList.remove('checked');
			changeStatus(taskList, STATUS.TO_DO)
		} else {
			evt.target.classList.add('checked');
			changeStatus(taskList, STATUS.DONE)
		}
		 console.log(list)
		
	})

	closeBtn.addEventListener('click', () => {
		task.remove();
		deleteTask(taskList);
		console.log(list)
	})

	span.textContent = taskList.name

	return task;
}
