const STATUS = {
	IN_PROGRESS: "In progress",
	DONE: "Done",
	TO_DO: "To Do",
};

const list1 = [
	{ name: 'create a post', status: 'In progress', priority: 'low' },
	{ name: 'test', status: 'Done', priority: 'high' }
] 

function addTask(task, status, priority) {
	const newTask = {
		name: task,
		status: status,
		priority: priority,
	}

	return list1.push(newTask)
}

function changeStatus(task, status = 'In Progress') {
	const result = list1.find(item => item.name === task);

	return result.status = status;
}

function deleteTask(task) {
	const findItem = list1.findIndex(item => item.name === task);

	list1.splice(findItem, findItem)
}

function showNameTask(name) {
	return name.map(item => item.name)
}

function showList() {
	const resultToDo = list1.filter(item => item.status === STATUS.TO_DO);
	const resultDone = list1.filter(item => item.status === STATUS.DONE);
	const resultProgress = list1.filter(item => item.status === STATUS.IN_PROGRESS);

	console.log(
		STATUS.IN_PROGRESS +
			":" +
		"\n" +
		showNameTask(resultProgress)
			 +
			"\n" +
			"\n" +
			STATUS.DONE +
			":" +
			`\n` +
			showNameTask(resultDone) +
			"\n" +
			"\n" +
			STATUS.TO_DO +
			":" +
			`\n` +
			showNameTask(resultToDo)
	);
}



changeStatus('test', 'Done')
addTask('learn Js', 'In Progress', 'high');
addTask('learn Js', 'Done', 'low');
addTask('cooking', 'To Do', 'high');
deleteTask('learn Js')
showList();
deleteTask('learn Js')



