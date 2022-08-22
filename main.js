const STATUS = {
	TO_DO: "To Do",
	DONE: "Done",
	IN_PROGRESS: "In Progress",
}
const list = {
	"create a new practice task": STATUS.TO_DO,
	"make a bed": STATUS.DONE,
	"write a post": STATUS.IN_PROGRESS,
}
// будет выводить весь список дел
function showList() {
	console.log("Todo:");
	for (let key in list) {
		if (list[key] === STATUS.TO_DO) {
			console.log("\t" + key);
		}
	}
	console.log("in progress:");
	for (let key in list) {
		if (list[key] === STATUS.IN_PROGRESS) {
			console.log("\t" + key);
		}
	}
	console.log("Done:");
	for (let key in list) {
		if (list[key] === STATUS.DONE) {
			console.log("\t" + key);
		}
	}
}
// удаляет  задачу
function deleteTask(task) {
	for (let key in list) {
		delete list[task];
	}
}
// меняет статус задачи
function changeStatus(task, status) {
	list[task] = status;
}
// добавляет новую задачу
function addTask(task) {
	list[task] = STATUS.DONE;
}
changeStatus("write a post", "In Progress");
changeStatus("make a bed", "To Do");
deleteTask();
addTask();
showList();
