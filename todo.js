const TASKS = {}

const STATUSES = {
	TO_DO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
}

function showList() {
	const NO_TASKS = '\t-\n'
	let todoTasks = '';
	let inProgressTasks = '';
	let doneTasks = '';

	for (let prop in TASKS) {
		switch (TASKS[prop]) {
			case STATUSES.TO_DO:
				todoTasks += `\t${prop}\n`
				break
			case STATUSES.IN_PROGRESS:
				inProgressTasks += `\t${prop}\n`
				break
			case STATUSES.DONE:
				doneTasks += `\t${prop}\n`
				break
		}
	}

	return `${STATUSES.TO_DO}:\n${todoTasks || NO_TASKS}${STATUSES.IN_PROGRESS}:\n${inProgressTasks || NO_TASKS}${STATUSES.DONE}:\n${doneTasks || NO_TASKS}`
}

function addTask(task) {
	if (!task) return

	const isTaskExsist = TASKS[task];

	if (!isTaskExsist) {
		TASKS[task] = STATUSES.TO_DO
	} else {
		return `Task already exsist`
	}
}

function deleteTask(task) {
	if (!task) return
	delete TASKS[task]
}

function changeStatus(task, status) {
	if (!task) {
		console.log('You didn\'t provide a task name')
		return
	}

	if (!status) {
		console.log('You didn\'t provide a task status')
		return
	}

	TASKS[task] = status
}