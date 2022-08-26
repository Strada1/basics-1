const TASKS = []

const PRIORITY = {
	HIGH: 'high',
	LOW: 'low'
}

const STATUS = {
	TO_DO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
}

const ERROR = {
	TASK_EXSIST: 'Task already exsist',
	NO_TASK: 'Tasks not in the list',
	TASK_NOT_ENTERED: 'You didn\'t provide a task name',
	STATUS_NOT_ENTERED: 'You didn\'t provide a task status',
	TASK_NOT_IN_LIST: 'Task is not in the list'
}

function showList() {
	const NO_TASKS = '\t-\n'
	let todoTasks = '';
	let inProgressTasks = '';
	let doneTasks = '';

	for (let task of TASKS) {
		switch (task.status) {
			case STATUS.TO_DO:
				todoTasks += `\t${task.name}: ${task.priority}\n`
				break
			case STATUS.IN_PROGRESS:
				inProgressTasks += `\t${task.name}: ${task.priority}\n`
				break
			case STATUS.DONE:
				doneTasks += `\t${task.name}: ${task.priority}\n`
				break
		}
	}

	return `${STATUS.TO_DO}:\n${todoTasks || NO_TASKS}${STATUS.IN_PROGRESS}:\n${inProgressTasks || NO_TASKS}${STATUS.DONE}:\n${doneTasks || NO_TASKS}`
}

function addTask(task, priority) {
	if (!task) {
		console.log(ERROR.TASK_NOT_ENTERED)
		return
	}

	const isTaskExsist = TASKS.find(item => item.name === task);

	if (isTaskExsist) {
		console.log(ERROR.TASK_EXSIST)
		return
	}

	TASKS.push(
		{
			name: task,
			status: STATUS.TO_DO,
			priority: priority || PRIORITY.LOW
		}
	)
}

function deleteTask(task) {
	if (!task) {
		console.log(ERROR.TASK_NOT_ENTERED)
		return
	}

	const taskIndex = TASKS.findIndex(item => item.name === task);
	const isTaskExsist = taskIndex !== -1;

	if(!isTaskExsist) {
		console.log(ERROR.TASK_NOT_IN_LIST)
		return
	}

	TASKS.splice(taskIndex, 1)
}

function changeStatus(task, status) {
	if (!task) {
		console.log(ERROR.TASK_NOT_ENTERED)
		return
	}

	if (!status) {
		console.log(ERROR.STATUS_NOT_ENTERED)
		return
	}

	const taskIndex = TASKS.findIndex(item => item.name === task);
	const isTaskExsist = taskIndex !== -1;

	if(!isTaskExsist) {
		console.log(ERROR.TASK_NOT_IN_LIST)
		return
	}

	TASKS[taskIndex].status = status
}

addTask('Strada tasks', 'high')
addTask('Work', 'high')
addTask('Gym', 'high')
addTask('Read book', 'low')
addTask('Read book')
addTask('test')
addTask()

changeStatus('Strada tasks', 'Done')
changeStatus('Work', 'In Progress')
changeStatus('asd', 'qwe')
changeStatus()

deleteTask('test')
deleteTask('sadas')
deleteTask()


console.log(showList())