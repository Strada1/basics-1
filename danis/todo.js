const todo = {
	status: {
		work: "в работе",
		done: "выполнено",
		planned: "Запланировано",
	},
	taskitems: {

    },
	addTask(nameTask, statusTask) {
		this.taskitem[nameTask] = statusTask;
	},
	deleteTask(nameTask) {
		delete this.taskitem[nameTask];
	},
	changeStatus(nameTask, status) {
		this.taskitem[nameTask] = status;
	},
	showList() {
		console.log("ToDo: ");
		for (let key in this.taskitem) {
			console.log(`${key} : ${this.taskitem[key]}`);
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
