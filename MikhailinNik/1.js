const STATUS = {
	IN_PROGRESS: "In Progress",
	DONE: "Done",
	TO_DO: "To Do",
};

const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
};

addTask = function (task, status = "In Progress") {
	list.key = task
	list[task] = status

};

changeStatus = function (task, status) {
	list[task] = status;
};

deleteTask = function (task) {
	delete list[task];
};

showList = function () {
	let progressList = "";
	let doneList = "";
	let toDoList = "";

	for (key in list) {
		if (list[key] === STATUS.IN_PROGRESS) {
			progressList += key + "\n";
		}

		if (list[key] === STATUS.DONE) {
			doneList += key + "\n";
		}

		if (list[key] === STATUS.TO_DO) {
			toDoList += key + "\n";
		}
	}

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
};

addTask("drink cup of tea", "In Progress");
addTask("learn JS", "To Do");

changeStatus("drink cup of tea", "Done");
changeStatus("write a post", "Done");
showList();

deleteTask("create a new practice task");
