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
let id = 1;
const formHigh = document.querySelector(".todo__item--form.high");
const containerHigh = formHigh.querySelector(".todo__container");
const formLow = document.querySelector(".todo__item--form.low");
const containerLow = formLow.querySelector(".todo__container");
//Add task function
function addTask(task, priority) {
	if (task != "") {
		list.push({ name: task, status: STATUS.TO_DO, priority });
	}
	render();
}

//deleteTask function
function deleteTask(task) {
	list.forEach(function (item, index) {
		if (item.name == task) {
			return list.splice(index, 1);
		}
	});
	render();
}
//change status function
function changeStatus(task, status) {
	list.filter(function (item) {
		if (item.name == task) {
			return (item.status = status);
		}
	});
}

function showList() {
	list.forEach(function (item) {
		for (let key in item) {
			for (let keys in STATUS) {
				if (item[key] == STATUS[keys]) {
					//   console.log(STATUS[keys] + ":" + "\n" + item.name);
					delete STATUS[keys];
				}
			}
		}
	});
	for (let el in STATUS) {
		// console.log(STATUS[el] + "\n" + "-");
	}
}
function proirityStatus(task, priority) {
	let result = list.findIndex(function (item) {
		if (item.name == task) {
			return item.name;
		}
	});

	if (result != -1) {
		list[result].priority = priority;
	}
}
proirityStatus("to read", PRIORITY.low);
showList();

function createTask(value, parent) {
	const ELEMENTS = {
		div: document.createElement("div"),
		input: document.createElement("input"),
		label: document.createElement("label"),
		button: document.createElement("button"),
	};
	//Div
	ELEMENTS.div.className = "todo__item--task todo_input";
	//Input
	ELEMENTS.input.type = "checkbox";
	ELEMENTS.input.setAttribute("id", `task_${id}`);
	ELEMENTS.input.className = "todo__task";
	//Label
	ELEMENTS.label.setAttribute("for", `task_${id}`);
	ELEMENTS.label.textContent = value;
	ELEMENTS.label.addEventListener("click", function (e) {
		if (e.target) {
			changeStatus(value, STATUS.DONE);
			this.parentElement.style.background = "green";
		}
	});
	//Button
	ELEMENTS.button.className = "button button__task";
	ELEMENTS.button.textContent = "X";
	ELEMENTS.button.addEventListener("click", function (e) {
		deleteTask(value);
	});
	// Input id and label for=""
	id++;
	ELEMENTS.div.appendChild(ELEMENTS.input);
	ELEMENTS.div.appendChild(ELEMENTS.label);
	ELEMENTS.div.appendChild(ELEMENTS.button);
	parent.appendChild(ELEMENTS.div);
}

//Adding a task when you click on the enter
formHigh.addEventListener("submit", function (e) {
	e.preventDefault();
	let taskEl = formHigh.querySelector(".todo__add--task");
	let taskValue = taskEl.value;
	addTask(taskValue, PRIORITY.high);
	taskEl.value = "";
});
//Adding a task when you click on the enter
formLow.addEventListener("submit", function (e) {
	e.preventDefault();
	let taskEl = formLow.querySelector(".todo__add--task");
	let taskValue = taskEl.value;
	addTask(taskValue, PRIORITY.low);
});
//Render function
function render() {
	try {
		//Clearing container
		containerHigh.innerHTML = "";
		containerLow.innerHTML = "";
		list.forEach(function (item) {
			//Container append task
			if (item.priority === PRIORITY.high) {
				createTask(item.name, containerHigh);
			} else {
				createTask(item.name, containerLow);
			}
		});
	} catch (error) {
		alert(error.stack);
	}
}
