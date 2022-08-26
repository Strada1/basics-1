
const STATUS = {
	TO_DO: "To Do",
	DONE: "Done",
	iN_PROGRESS: "In Progress",
};
const PRIORITY = {
	low: "low",
	high: "high",
};
const list = [];

function addTask(task, priority) {
	list.push({ name: task, status: STATUS.TO_DO, priority });
}
addTask("to walk", PRIORITY.high);
addTask("to swim", PRIORITY.low);
addTask("to read", PRIORITY.high);

function deleteTask(task) {
	list.forEach(function (item, index) {
		if (item.name == task) {
			return list.splice(index, 1);
		}
	});
}
deleteTask("to swim");

function changeStatus(task, status) {
	list.filter(function (item) {
		if (item.name == task) {
			return (item.status = status);
		}
	});
}
changeStatus("to walk", STATUS.DONE);
changeStatus("to swim", STATUS.DONE);

function showList() {
	list.forEach(function (item) {
		for (let key in item) {
			for (let keys in STATUS) {
				if (item[key] == STATUS[keys]) {
					console.log(STATUS[keys] + ":" + "\n" + item.name);
					delete STATUS[keys];
				}
			}
		}
	});
	for (let el in STATUS) {
		console.log(STATUS[el] + "\n" + "-");
	}
}
function proirityStatus(task, priority) {
	let result = list.findIndex(function (item) {
		if (item.name == task) {
			console.log(item);
			return item.name;
		}
	});
	console.log(result);

	if (result != -1) {
		list[result].priority = priority;
	}
}
proirityStatus("to read", PRIORITY.low);
showList();
