const STATUSES = {
	To_Do: 'To Do',
	In_Progress: 'In Progress',
	Done: 'Done',
};

const PRIORITIES = {
	Low: 'Low',
	Medium: 'Medium',
	High: 'high',
};

let list = [
	{ name: 'create a post', status: STATUSES.In_Progress, priority: PRIORITIES.Low },
	{ name: 'test', status: STATUSES.Done, priority: PRIORITIES.High },
];

function changeStatus(taskName, newStatus) {
	if (checkStatus(newStatus) && taskExists(taskName)) list.find(el => el.name === taskName).status = newStatus;
	else console.log('изминение статуса невозможно');
}

function changePriority(taskName, newPriority) {
	if (checkPriority(newPriority) && taskExists(taskName)) list.find(el => el.name === taskName).priority = newPriority;
	else console.log('изминение статуса невозможно');
}

function addTask(taskName, status = STATUSES.To_Do, priority = PRIORITIES.Low) {
	if (!taskExists(taskName) && checkStatus(status) && checkPriority(priority)) list.push({ name: taskName, status: status, priority: priority });
	else console.log('добавление задачи невозможно');
}

function deleteTask(taskName) {
	if (taskExists(taskName))
		list.splice(
			list.findIndex(el => el.name === taskName),
			1
		);
	else console.log('невозможно удалить задачу');
}

function showList() {
	let toDoStr = 'ToDo:\n';
	let inProgressStr = 'In Progress:\n';
	let doneStr = 'Done:\n';

	for (const obj of list) {
		if (obj.status === 'To Do') toDoStr += `  "${obj.name}",\n`;
		else if (obj.status === 'In Progress') inProgressStr += `  "${obj.name}",\n`;
		else if (obj.status === 'Done') doneStr += `  "${obj.name}",\n`;
	}

	console.log(toDoStr + inProgressStr + doneStr);
}

function taskExists(taskName) {
	if (list.find(el => el.name === taskName)) return true;
	else return false;
}

function checkStatus(status) {
	for (const key in STATUSES) {
		if (status === STATUSES[key]) return true;
	}
	return false;
}

function checkPriority(priority) {
	for (const key in PRIORITIES) {
		if (priority === PRIORITIES[key]) return true;
	}
	return false;
}

changeStatus('create a post', 'To Do');

changePriority('test', 'Low');

addTask('complete tasks', 'In Progress', 'Medium');
addTask('test_2', 'In Progress', 'Medium');
addTask('test_3', 'Done', 'Medium');
addTask('test_4', 'Done', 'Medium');
deleteTask('test');

showList();

console.log(list);
