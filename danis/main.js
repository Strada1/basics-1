const STATUS = {
	toDO: "to do",
	done: "done",
};

const PRIORITET = {
	low: "low",
	high: "high",
};

const list = [
	{
		name: "пойти бегать",
		status: 'to do'
	},
];

const form = document.querySelector(".container");
const addFroms = document.querySelectorAll(".todo__add_new-task-container");

for (let i = 0; i < addFroms.length; i++) {	
	addFroms[i].addEventListener("submit", function (event) {
		event.preventDefault();
		const form = event.currentTarget;
		const input = form.querySelector('input[type=text]')
		addTask(input.value)
	});
}

function addTask(nameTask) {
	let result = list.findIndex(function (item) {
		return item.name === nameTask;
	});
	if ((result === -1) && (nameTask !== "")) {
		list.push({ name: nameTask, status: STATUS.toDO });
		render();
	} else {
		errorMessage();
	}
}

function deleteTask(nameTask) {
		list.splice(nameTask, 1);
		render();
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


function errorMessage() {
	let myDiv = document.createElement("div");
	myDiv.textContent = "Ошибка!";
	myDiv.className = "error__message";
	document.body.append(myDiv);
	setTimeout(function () {
		myDiv.remove();
	}, 1500);
}

function render() {
	form.innerHTML = "";
	list.forEach(function (item) {
		form.insertAdjacentHTML(
			"beforeend",
			`<div class="todo__list__high-task">
				<div class="todo__list__high-task-item">
						<input type="checkbox">
						<div class="todo__list__high-task-item-text"> ${item.name} </div>
				</div>
				<button>x</button>
			</div>`
		);

		let buttonDeleteTask = document.querySelectorAll("button");
		for (let i = 0; i < buttonDeleteTask.length; i++) {
			buttonDeleteTask[i].addEventListener("click", function () {
				deleteTask(item.name);
			});
		}

		let buttonCheckBox = document.querySelectorAll("input[type=checkbox]");
		let inputTaskElement = document.querySelectorAll(".todo__list__high-task");

		for (let i = 0; i < buttonCheckBox.length; i++) {
			buttonCheckBox[i].addEventListener("change", function () {
				
				inputTaskElement[i].classList.toggle("done");

				if (buttonCheckBox[i].checked) {
					changeStatus(item.name, STATUS.done);
				} else {
					changeStatus(item.name, STATUS.toDO);
				}
			});
		}
		console.log(list);
	});

	// const addTaskButton = document.querySelectorAll(".addTask");
	// 	for (let i = 0; i < addTaskButton.length; i++) {
	// 		addTaskButton[i].addEventListener("click", function () {
	// 			let presentValue = addTaskButton[i].parentElement.querySelector("input").value;
	// 			addTask(presentValue, addTaskButton[i]);
	// 		});
	// 	}
	
}



render();
