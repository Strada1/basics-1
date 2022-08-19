let todo = {
	'buy products': 'not yet time',
	'find job': 'in progress',
	'make todo List': 'done',

	statuses: {
		status_1: 'not yet time',
		status_2: 'in progress',
		status_3: 'done',
	},

	changeStatus(task, newStatus) {
		if (this.keyExists(task) && this.checkStatus(newStatus)) this[task] = newStatus;
	},
	addTask(taskName, status) {
		if (!this.keyExists(taskName) && this.checkStatus(status)) this[taskName] = status;
	},
	deleteTask(task) {
		if (this.keyExists(task)) delete this[task];
	},
	showList() {
		let showListStr = '';

		for (const key in this) {
			if (typeof this[key] === 'string') showListStr += `task - ${key}: status - ${this[key]} \n`;
		}

		console.log(showListStr);
	},

	keyExists(keyName) {
		if (keyName in this) return true;
	},

	checkStatus(status) {
		for (const key in this.statuses) {
			if (status === this.statuses[key]) return true;
		}
		return false;
	},
};

todo.changeStatus('buy products', 'in progress');
todo.addTask('do PR', 'in progress');
todo.deleteTask('find job');
todo.showList();
console.log(todo);
