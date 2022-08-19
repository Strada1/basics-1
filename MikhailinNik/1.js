const operation = {
	add: "add",
	multi: "multi",
	subtract: "subtract",
};

function calculate(operand, a, b) {
	switch (operand) {
		case operation.add:
			return a + b;
		case operation.multi:
			return a * b;
		case operation.subtract:
			return a - b;
		default:
			alert("Ошибка");
	}
}

console.log(calculate("add", 2, 1));
console.log(calculate("multi", 1, 2));
console.log(calculate("subtract", 3, 2));

let toDo = {};

toDo.addTask = function (task, status = "doing") {
	this[task] = status;
};

toDo.changeTask = function (task, status) {
	this[task] = status;
};

toDo.deleteTask = function (task) {
	delete this[task];
};

toDo.showList = function () {
	for (let key in this) {
		if (typeof (this[key]) != "function") {
			console.log('Задача: '  + key + `\n` + 'Статус задачи: ' + this[key]);
		}
	}
};

toDo.addTask("tea", "do");
toDo.addTask("coffee", "done");
toDo.showList();
