const STATUSES = {
	To_Do: 'To Do',
	In_Progress: 'In Progress',
	Done: 'Done',
};

const PRIORITIES = {
	Low: 'Low',
	Medium: 'Medium',
	High: 'High',
};

let list = [
	{ name: 'create a post', status: STATUSES.In_Progress, priority: PRIORITIES.Low },
	{ name: 'test', status: STATUSES.Done, priority: PRIORITIES.High },
];

function changeStatus(taskName, newStatus) {
	let foundEl = taskExists(taskName);

	checkStatus(newStatus) && foundEl ? (foundEl.status = newStatus) : console.log('status change is not possible');
}

function changePriority(taskName, newPriority) {
	let foundEl = taskExists(taskName);

	checkPriority(newPriority) && foundEl ? (foundEl.priority = newPriority) : console.log('priority change is not possible');
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
	list = list.sort((a, b) => (a.priority > b.priority ? 1 : -1));

	let toDoStr = 'ToDo:\n';
	let inProgressStr = 'In Progress:\n';
	let doneStr = 'Done:\n';

	for (const obj of list) {
		if (obj.status === 'To Do') toDoStr += `  "${obj.name}": ${obj.priority} Priority,\n`;
		else if (obj.status === 'In Progress') inProgressStr += `  "${obj.name}": ${obj.priority} Priority,\n`;
		else if (obj.status === 'Done') doneStr += `  "${obj.name}" ${obj.priority} Priority,\n`;
	}

	console.log(`${toDoStr}${inProgressStr}${doneStr}`);
}

function taskExists(taskName) {
	let elExist = list.find(el => el.name === taskName);

	return elExist ? elExist : false;
}

function checkStatus(status) {
	for (const key in STATUSES) {
		if (status === STATUSES[key]) return true;
	}
}

function checkPriority(priority) {
	for (const key in PRIORITIES) {
		if (priority === PRIORITIES[key]) return true;
	}
}

changeStatus('create a post', 'To Do');
changePriority('test', 'Low');
addTask('complete tasks', 'In Progress', 'Medium');
addTask('test_2', 'In Progress', 'Medium');
addTask('test_3', 'Done', 'Medium');
addTask('test_4', 'Done', 'High');
addTask('test_5', 'Done', 'Low');
addTask('test_6', 'Done', 'Medium');
deleteTask('test');
showList();

console.log(list);
