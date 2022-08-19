let todo = {
	list: {
		'buy products': 'To Do',
		'find job': 'in progress',
		'make todo List': 'Done',
	},

	statuses: {
		status_1: 'To Do',
		status_2: 'In Progress',
		status_3: 'Done',
	},

	changeStatus(task, newStatus) {
		if (this.keyExists(task) && this.checkStatus(newStatus)) this.list[task] = newStatus;
	},
	addTask(task, status = 'To Do') {
		if (!this.keyExists(task) && this.checkStatus(status)) this.list[task] = status;
	},
	deleteTask(task) {
		if (this.keyExists(task)) delete this.list[task];
	},
	showList() {
		let toDoStr = 'ToDo:\n';
		let inProgressStr = 'In Progress:\n';
		let doneStr = 'Done:\n';

		for (const key in this.list) {
			if (this.list[key] === 'To Do') toDoStr += `  "${key}",\n`;
			else if (this.list[key] === 'In Progress') inProgressStr += `  "${key}",\n`;
			else if (this.list[key] === 'Done') doneStr += `  "${key}",\n`;
		}

		console.log(toDoStr + inProgressStr + doneStr);
	},

	keyExists(keyName) {
		if (keyName in this.list) return true;
	},

	checkStatus(status) {
		for (const key in this.statuses) {
			if (status === this.statuses[key]) return true;
		}
		return false;
	},
};

todo.changeStatus('buy products', 'In Progress');
todo.addTask('do PR', 'To Do');
todo.addTask('finish strada', 'In Progress');
todo.addTask('refactor code', 'Done');

todo.deleteTask('find job');
todo.showList();
console.log(todo);
