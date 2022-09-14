const STATUS = {
	toDO: "to do",
	done: "done",
};
const addTaskButton = document.querySelectorAll(".addTask");
const list = [];
const highElement = document.querySelector(".todo__list__high-task");
const deleteNameTask = document.querySelectorAll(".todo__list__high-task");

for (let i = 0; i < addTaskButton.length; i++) {
	addTaskButton[i].addEventListener("click", function () {
		let presentValue =
			addTaskButton[i].parentElement.querySelector("input").value;
		addTask(presentValue, addTaskButton[i]);
	});
}

function createTaskElement(button) {
	let myDiv = highElement.cloneNode(true);
	myDiv.querySelector(".todo__list__high-task-item-text").textContent =
		button.parentElement.querySelector("input").value;
	button.parentElement.parentElement.append(myDiv);
	const buttonDelete = myDiv.querySelector("button");
	const buttonCheckBox = myDiv.querySelector("input[type=checkbox]");
	buttonCheckBox.addEventListener("change", function () {
		myDiv.classList.toggle("done");
		if (buttonCheckBox.checked) {
			changeStatus(button.parentElement.querySelector("input").value, STATUS.done);
			console.log('asd');
		} else {
			changeStatus(button.parentElement.querySelector("input").value, STATUS.toDO);
		}
		console.log(list);
	});
	buttonDelete.addEventListener("click", function () {
		deleteTask(button.parentElement.querySelector("input").value);
		myDiv.remove();
	});
}

function errorMessage() {
	let myDiv = document.createElement("div");
	myDiv.textContent = "Ошибка!";
	myDiv.className = "error__message";
	document.body.append(myDiv);
	setTimeout(function () {
		myDiv.remove();
	}, 1500);
}

function addTask(nameTask, button) {
	let result = list.findIndex(function (item) {
		return item.name === nameTask;
	});
	if (result === -1 && nameTask !== "") {
		list.push({ name: nameTask, status: STATUS.toDO });
		createTaskElement(button);
		console.log(list);
	} else {
		errorMessage();
	}
}

function deleteTask(nameTask) {
	let result = list.findIndex(function (item) {
		return item.name === nameTask;
	});
	if (result === -1) {
		errorMessage();
	} else {
		list.splice(result, 1);
	}
}

function changeStatus(nameTask, status) {
	let result = list.findIndex(function (item) {
		return item.name === nameTask;
	});

	if (result === -1) {
		console.log("Такой задачи нет ");
	} else {
		list[result].status = status;
	}
}

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
