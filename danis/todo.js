const todo = {
	status: {
		work: "в работе",
		done: "выполнено",
		planned: "Запланировано",
	},
	taskitems: {

    },
	addTask(nameTask, statusTask) {
		this.taskitems[nameTask] = statusTask;
	},
	deleteTask(nameTask) {
		delete this.taskitems[nameTask];
	},
	changeStatus(nameTask, status) {
		this.taskitems[nameTask] = status;
	},
	showList() {
		console.log("ToDo: ");
		for (let key in this.taskitems) {
			console.log(`${key} : ${this.taskitems[key]}`);
		}
	},
};

todo.addTask("Сделать домашнее задание", todo.status.planned);
todo.addTask("Полить цветок", todo.status.done);
todo.addTask("Поиграть в компьютер", todo.status.work);
todo.addTask("Поучить js", todo.status.planned);
todo.deleteTask("Поучить js");
todo.changeStatus("Поиграть в компьютер", todo.status.work);

todo.showList();