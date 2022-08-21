const STATUS = {
	TO_DO: "To Do",
	DONE: "Done",
	IN_PROGRESS: "In Progress",
}
const list = {
	"create a new practice task": STATUS.IN_PROGRESS,
	"make a bed": STATUS.DONE,
	"write a post": STATUS.TO_DO,
}
// добавляет новую задачу
function addTask(task) {
	list[task] = STATUS.DONE;
}
// удаляет  задчу
function deleteTask(task) {
	if (task in list) {
		delete list[task];
	}
}
// меняет статус задачи
function changeStatus(task, status) {
	list[task] = status;
}
// будет выводить весь список дел
function showList() {
	console.log('Todo:');
	for (let key in list) {
		if (list[key] === STATUS.TO_DO) {
			console.log(` \t ${key}`);
		}
	}
	console.log('In Progress:');
	for (let key in list) {
		if (list[key] === STATUS.DONE) {
			console.log(` \t ${key}`);
		}
	}
	console.log('Done:');
	for (let key in list) {
		if (list[key] === STATUS.IN_PROGRESS) {
			console.log(` \t ${key}`);
		}
	}
}
changeStatus('make a bed', 'To Do');
changeStatus('write a post', 'In Progress');
addTask("walk the dog");
showList();