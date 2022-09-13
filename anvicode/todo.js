const STATUS = {
	DONE: 'Done',
	IN_PROGRESS: 'In Progress',
	TODO: 'ToDo',
};

const PRIORITY = {
	HIGH: 'high',
	LOW: 'low',
};

const todoList = [];

// add new task
function addTask(task) {
	return todoList.push({
		name: task,
		status: STATUS.TODO,
		priority: PRIORITY.LOW,
	});
}

// change task status
function changeStatus(task, newStatus) {
	let taskList = todoList.find((item) => item.name === task);

	return (taskList.status = newStatus);
}

// change task priority
function changePriority(task, newPriority) {
	let taskList = todoList.find((item) => item.name === task);
	return (taskList.priority = newPriority);
}

// delete the task
function deleteTask(task) {
	const indexItem = todoList.findIndex((item) => item.name === task);
	todoList.splice(indexItem, 1);
}

function filterStatus(status) {
	console.log(todoList.filter((item) => item.status === status));
}

function showList() {
	console.log(`${STATUS.DONE}: `);
	filterStatus(STATUS.DONE);

	console.log(`${STATUS.IN_PROGRESS}: `);
	filterStatus(STATUS.IN_PROGRESS);

	console.log(`${STATUS.TODO}: `);
	filterStatus(STATUS.TODO);
}

addTask('play');
addTask('create a blog');
addTask('write a blogpost');
addTask('buy a toy');
addTask('work');
addTask('write code');

changeStatus('play', STATUS.IN_PROGRESS);
changeStatus('write a blogpost', STATUS.DONE);
changeStatus('work', STATUS.DONE);
changeStatus('write code', STATUS.TODO);

changePriority('play', PRIORITY.HIGH);
changePriority('write code', PRIORITY.HIGH);

deleteTask('buy a toy');

showList();
