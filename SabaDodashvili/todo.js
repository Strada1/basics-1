let todo = {
	'buy products': 'not yet time',
	'find job': 'in progress',
	'make todo List': 'done',

	changeStatus(task, newStatus) {
		if (this.keyExists(task)) this[task] = newStatus;
	},
	addTask(taskName, status) {
		if (!this.keyExists(taskName)) this[taskName] = status;
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
};

todo.changeStatus('buy products', 'in progress');
todo.add('do PR', 'in progress');
todo.deleteTask('find job');
todo.showList();
