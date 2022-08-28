const STATUS = {
	inProgress: "In Progress",
	done: "Done",
	toDo: "To Do",
};

const PRIORITY = {
	low: "low",
	high: "high",
};

const list = [];

function addTask(nameTask, priority) {
	list.push({ name: nameTask, status: STATUS.toDo, priority: priority });
}

function deleteTask(nameTask) {
	let result = list.findIndex(function (item) {
		return nameTask == item.name;
	});
	if (result == -1) {
		console.log("Такой задачи нет");
	} else {
		return list.splice(result, 1);
	}
}

function changeStatus(nameTask, status) {
	let result = list.findIndex(function (item) {
		return nameTask == item.name;
	});
	if (result == -1) {
		console.log("Такой задачи нет");
	} else {
		return (list[result].status = status);
	}
}

function showList() {
	for (let nameStatus in STATUS) {
        console.log(`${STATUS[nameStatus]}: `);
		list.filter(function (item) {
			if (item.status == STATUS[nameStatus]) {
				console.log(item.name);
			}
		});
	}
}

addTask("Пойти бегать", PRIORITY.low);
addTask("Поdsadsaddsaь", PRIORITY.low);
addTask("Пойти учить ", PRIORITY.high);
addTask("Пойти танцевать", PRIORITY.high);
addTask("Пойти гулять", PRIORITY.high);
addTask("Пойти смотреть", PRIORITY.high);
changeStatus("Пойти танцевать", STATUS.done);
changeStatus("Пойти смотреть", STATUS.done);
changeStatus("Пойти бегать", STATUS.done);
changeStatus("Пойти учить", STATUS.inProgress);
changeStatus("Пойти гулять", STATUS.inProgress);

showList();