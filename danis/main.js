const addFroms = document.querySelectorAll(".todo__add_new-task-container");
const list = [];
const highElement = document.querySelector('.todo__list__high-task');

for (let i = 0; i < addFroms.length; i++) {	
	addFroms[i].addEventListener("submit", function (event) {
		// отменяем поведение по-умолчанию
		event.preventDefault();
		// получаем форму из currentTarget
		const form = event.currentTarget;
		// получаем input[type=text] у нашей формы
		const input = form.querySelector('input[type=text]')
		if(addTask(input.value)){
			createTaskElement(input);
			//чистим инпут
			input.value = '';
		}		
	});
}

function createTaskElement(input) {
	let myDiv = highElement.cloneNode(true);
	myDiv.querySelector('.todo__list__high-task-item-text').textContent = input.value;
	input.parentElement.parentElement.append(myDiv);
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
		list.push({ name: nameTask});
		return true;		
	} else {
		errorMessage();
		return false;		
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
