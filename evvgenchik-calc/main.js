'use stict'


const toDo = {
	study: 'complete',
	exercise: 'uncomplete',
	changeStatus(task, status) {
		this[task] = status || 'complete'
	},
	addTask(task) {
		this[task] = 'uncomplete'
	},
	deleteTask(task) {
		delete this[task]
	},
	showList() {
		for (let key in this) {
			if (typeof this[key] != 'function') {
				alert(`Задача ${key}: ${this[key]}`)
			}
		}
	}
}

toDo.addTask('shower')
toDo.changeStatus('shower', 'wait')
toDo.addTask('breakfast')
toDo.deleteTask('breakfast')
toDo.showList()