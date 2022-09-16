const STATUS = {
	DONE: "Done",
	TO_DO: "To Do",
};

const PRIORITY = {
	HIGH: 'high',
	LOW: 'low',
}

const list = [];

const forms = document.querySelectorAll('form');
const priorityHigh = document.querySelector('.high-list');
const priorityLow = document.querySelector('.low-list');
const addButton = document.querySelector('.new-task__button');
const taskTextHigh = document.querySelector('.text_high');
const taskTextLow = document.querySelector('.text_low');

let i = 0;

function addTask(task, status = STATUS.TO_DO, priority) {
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
}

function changeStatus(task, status) {
	const result = list.find(item => item.name === task.name);

	return result.status = status;
}

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

function createTask(priority, taskList, id) {
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

function render() {
	document.querySelectorAll('.item').forEach(task => task.remove());

	list.map((task, idx) => {
		if (task.priority === PRIORITY.HIGH) {
			createTask(priorityHigh, task, task.id);
		} else {
			createTask(priorityLow, task, task.id)
		}
	})
}
