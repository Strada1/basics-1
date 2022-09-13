const addTaskButton = document.querySelectorAll(".addTask");
const list = [];
const highElement = document.querySelector('.todo__list__high-task');


for (let i = 0; i < addTaskButton.length; i++) {
	addTaskButton[i].addEventListener("click", function () {
		let presentValue = addTaskButton[i].parentElement.querySelector('input').value;
		addTask(presentValue, addTaskButton[i]);
	});
}

function createTaskElement(button) {
	let presentValue = button.parentElement.querySelector('input').value;
	let myDiv = highElement.cloneNode(true);
	let nameTask = myDiv.querySelector('.todo__list__high-task-item-text');
	nameTask.textContent = presentValue;
	let highParent = button.parentElement.parentElement;
	highParent.append(myDiv);
}

function errorMessage() {
	let myDiv = document.createElement('div');
	myDiv.textContent = "Ошибка!";
	myDiv.className = "error__message"
	document.body.append(myDiv);
	setTimeout(function() {
		myDiv.remove();
	}, 1500)
}

function addTask(nameTask, button) {
	let result = list.findIndex(function (item) {
		return item.name === nameTask;
	});
	if ((result === -1) && (nameTask !== "")) {
		console.log(nameTask);
		list.push({ name: nameTask});
		createTaskElement(button);
	} else {
		errorMessage();
	}
}

// function deleteTask(nameTask) {
// 	let result = list.findIndex(function (item) {
// 		return item.name === nameTask;
// 	});
// 	if (result === -1) {
// 		console.log("Такой задачи нет");
// 	} else {
// 		list.splice(result, 1);
// 	}
// }

// function changeStatus(nameTask, status) {
// 	let result = list.findIndex(function (item) {
// 		return item.name === nameTask;
// 	});

// 	if (result === -1 || !(status in STATUS)) {
// 		console.log("Такой задачи нет");
// 	} else {
// 		list[result].status = status;
// 	}
// }

// function showList() {
// 	for (let status in STATUS) {
// 		console.log(STATUS[status] + ":");
// 		list.filter(function (item) {
// 			if (item.status === STATUS[status]) {
// 				console.log(" " + item.name);
// 			}
// 		});
// 	}
// }

// function showPriotiry() {
// 	for (let priority in PRIORITY) {
// 		console.log(PRIORITY[priority] + ":");
// 		list.filter(function (item) {
// 			if (item.priority === PRIORITY[priority]) {
// 				console.log(" " + item.name);
// 			}
// 		});
// 	}
// }
