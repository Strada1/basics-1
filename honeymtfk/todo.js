const STATUS = {
	TO_DO: "To Do",
	IN_PROGRESS: "In Progress",
	DONE: "Done"
}

const list = {
	"Make some js work": STATUS.TO_DO,
	"Make some HTML/CSS work": STATUS.IN_PROGRESS,
	"Open computer": STATUS.DONE
}

function changeStatus(task, status) {
	if (task in list && status in STATUS) {
		list[task] = STATUS[status]
	} else {
		console.log ('This is impossible, try again!')
	}
}

function addTask(new_task) {
	if ((typeof new_task) == 'string') {
		list[new_task] = STATUS.TO_DO;
	} else {
		console.log('This is impossible, try again!');
	}
}

function deleteTask (task) {
	if (task in list) {
		delete list[task];
	} else {
		console.log('This is impossible, try again!');
	}
}

function todoStatusCheck() {
	for (let task in list) {
		switch (list[task]) {
			case STATUS.TO_DO:
				console.log("	" + task);
				break;
		}
	}
}

function inProgStatusCheck() {
	for (let task in list) {
		switch (list[task]) {
			case STATUS.IN_PROGRESS:
				console.log("	" + task);
				break;
		}
	}
}

function doneStatusCheck() {
	for (let task in list) {
		switch (list[task]) {
			case STATUS.DONE:
				console.log("	" + task);
				break;
		}
	}
}

function showList () {
	console.log("To Do:");
	todoStatusCheck();
	console.log("In Progress:");
	inProgStatusCheck();
	console.log("Done:");
	doneStatusCheck();
}

changeStatus("Make some HTML/CSS work", "DONE");
changeStatus("Make some js work", "IN_PROGRESS");
addTask("Make some functions in TODO");
addTask("Close computer");
deleteTask("Open computer");
showList();
