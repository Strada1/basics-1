const STATUS = {
	TO_DO: "To Do",
	IN_PROGRESS: "In Progress",
	DONE: "Done",
}


const list = {}

function addTask(nameTask, statusTask) {
	if(typeof(nameTask) === "string" && typeof(statusTask) === "string") {
		list[nameTask] = statusTask;
	} else {
		console.log("Неверный тип данных");
	}
}

function changeStatus(nameTask, statusTask) {
		if([nameTask] in list) {
			list[nameTask] = statusTask;
		} else {
			console.log("Нет такой задачи");
		}
}

function deleteTask(nameTask) {
	if([nameTask] in list) {
		delete list[nameTask];
	} else console.log("Такой задачи нет. Видимо уже удалена");
}

function showList() {
	for(let key in list) {
		if(list[key] == STATUS.DONE) {
			console.log(STATUS.DONE + "\n"+ "\t"+ key);
		}
	}

	for(let key in list) {
		if(list[key] == STATUS.IN_PROGRESS) {
			console.log(STATUS.IN_PROGRESS + "\n"+ "\t"+ key);
		}
	}

	for(let key in list) {
		if(list[key] == STATUS.TO_DO) {
			console.log(STATUS.TO_DO + "\n"+ "\t"+ key);
		}
	}
}

addTask("have a walk", "To Do");
addTask("make a bed", "To Do");
addTask("write a post", "In Progress");
addTask("open the door", "In Progress");
addTask("listen to music", "Done");
addTask("watch the movie", "Done");

changeStatus("make a bed", "In Progress");
changeStatus("open the door", "To Do");

deleteTask("write a post");

showList();