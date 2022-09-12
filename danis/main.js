const addTaskButton = document.querySelectorAll(".addTask");
const list = [];

const STATUS = {
	inProgress: "In Progress",
	toDo: "To do",
	Done: "Done",
};

const PRIORITY = {
	low: "Low",
	high: "High",
};

for (let i = 0; i < addTaskButton.length; i++) {
	addTaskButton[i].addEventListener("click", function () {
    let presentValue = addTaskButton[i].parentElement.querySelector('input').value;
    addTask(presentValue, PRIORITY.high);

    let myDiv = document.createElement('div'); 
    myDiv.textContent = presentValue;
    
    });
}



	function addTask(nameTask, priority) {
		let result = list.findIndex(function (item) {
			return item.name === nameTask;
		});
		if (result === -1) {
			list.push({name: nameTask, status: STATUS.toDo, priority: priority,});
		} else {
			console.log("Такая задача уже существует");
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
