const STATUS = {
	toDO: "to do",
	done: "done",
};

const PRIORITET = {
	low: "low",
	high: "high",
};

const list = [];

const hightParent = document.querySelector(".todo_container-high .container");
const lowParent = document.querySelector(".todo_container-low .container");
const taskFormHigh = document.querySelector(".todo_container-high");
const taskFormLow = document.querySelector(".todo_container-low");

taskFormHigh.addEventListener("submit", function (event) {
	event.preventDefault();
	const form = event.currentTarget;
	const input = form.querySelector("input[type=text]");
	addTask(input.value.trim(), PRIORITET.high);
	input.value = "";
});

taskFormLow.addEventListener("submit", function (event) {
	event.preventDefault();
	const form = event.currentTarget;
	const input = form.querySelector("input[type=text]");
	addTask(input.value.trim(), PRIORITET.low);
	input.value = "";
});

function addTask(nameTask, prioritet) {
	try {
		let result = list.findIndex(function (item) {
			return item.name === nameTask;
		});
		if (result === -1 && nameTask !== "") {
			list.push({
				name: nameTask,
				status: STATUS.toDO,
				prioritet: prioritet,
			});
			render();
		} else {
			errorMessage();
		}
		render();
	} catch (err) {
		alert(err);
	}
}

function deleteTask(item) {
	list.splice(list.indexOf(item), 1);
	render();
}

function changeStatus(item, status) {
	item.status = status;
}

function errorMessage() {
	try {
		let myDiv = document.createElement("div");
		myDiv.textContent = "Ошибка!";
		myDiv.className = "error__message";
		document.body.append(myDiv);
		setTimeout(function () {
			myDiv.remove();
		}, 1500);
	} catch (error) {
		alert(error);
	}
}

function createElement(parent, item) {
	try {
		let todoListHighTask = document.createElement("div");
		todoListHighTask.className = "todo__list__high-task";
		parent.append(todoListHighTask);
		let checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		if (item.status === STATUS.done) {
			todoListHighTask.classList.add("done");
			checkbox.checked = true;
		}
		checkbox.addEventListener("change", function () {
			todoListHighTask.classList.toggle("done");
			if (checkbox.checked) {
				changeStatus(item, STATUS.done);
			} else {
				changeStatus(item, STATUS.toDO);
			}
		});
		todoListHighTask.append(checkbox);
		let todoListHighTaskItemText = document.createElement("div");
		todoListHighTaskItemText.textContent = item.name;
		todoListHighTask.append(todoListHighTaskItemText);
		let button = document.createElement("button");
		button.textContent = "x";
		button.addEventListener("click", function () {
			deleteTask(item);
		});
		todoListHighTask.append(button);
	} catch (error) {
		alert(error);
	}
}

function render() {
	try {
		hightParent.innerHTML = "";
		lowParent.innerHTML = "";
		list.forEach(function (item) {
			if (item.prioritet === "high") {
				createElement(hightParent, item);
			} else {
				createElement(lowParent, item);
			}
		});
	} catch (error) {
		alert(error);
	}
}
