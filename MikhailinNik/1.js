const STATUS = {
	IN_PROGRESS: "In progress",
	DONE: "Done",
	TO_DO: "To Do",
};

const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
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

function showList() {
	let progressList = "";
	let doneList = "";
	let toDoList = "";

	list1.forEach(item => {
		if (item.status === STATUS.IN_PROGRESS) {
			progressList += item.name + '\n';
			
		}

		if (item.status === STATUS.DONE) {
			doneList += item.name + "\n";
		}

		if (item.status === STATUS.TO_DO) {
			toDoList += item.name + "\n";
		}
	})

	console.log(
		STATUS.IN_PROGRESS +
			":" +
		"\n" +
		progressList
			 +
			"\n" +
			"\n" +
			STATUS.DONE +
			":" +
			`\n` +
			doneList +
			"\n" +
			"\n" +
			STATUS.TO_DO +
			":" +
			`\n` +
			toDoList
	);
}

changeStatus('test', 'Done')
addTask('learn Js', 'In Progress', 'high');
addTask('learn Js', 'Done', 'low');
addTask('cooking', 'To Do', 'high');
deleteTask('learn Js')
showList();
console.log(list1)
deleteTask('learn Js')



