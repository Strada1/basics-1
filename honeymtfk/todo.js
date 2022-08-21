const list = {
	"Make some js work": "To Do",
	"Make some HTML/CSS work": "In Progress",
	"Open computer": "Done"
}

function changeStatus(task, status) {
	task in list;
	if (status == "To Do" || "In Progress" || "Done") {
		list[task] = status;
	} else {
		console.log("error");
	}
}

function addTask(new_task) {
	new_task in list;
	list[new_task] = "To Do";
}

function deleteTask (task) {
	if (task in list) {
		delete list[task];
	}
}

function showList () {
	console.log("To Do:");
	for (let item in list) {
		switch (list[item]) {
			case "To Do":
				console.log("	" + item);
				break;
		}
	}
	console.log("In Progress:");
	for (let item in list) {
		switch (list[item]) {
			case "In Progress":
				console.log("	" + item);
				break;
		}
	}
	console.log("Done:");
	for (let item in list) {
		switch (list[item]) {
			case "Done":
				console.log("	" + item);
				break;
		}
	}
}
addTask("Make a homework");
addTask("Dinner");
addTask("sleep")
deleteTask("Open computer");
changeStatus("Make some js work", "Done");
changeStatus("Make some HTML/CSS work", "Done");
showList();