let vault = {};

function addTask(taskName) {
	vault[taskName] = 'todo';
}

function deleteTask(taskName) {
	delete vault[taskName];
}

function changeStatus(taskName, taskStatus) {
	vault[taskName] = taskStatus;
}

function showList() {
	console.log(vault);
}

addTask('taskname');
addTask('task1');
changeStatus('task1', 'done');
deleteTask('taskname');

showList();
