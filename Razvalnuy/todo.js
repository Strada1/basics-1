
//my code
const STATUS = {
	TO_DO: 'To Do',
	IN_PROGRESS: "In Progress",
	DONE: 'Done',
}
const list = {
	'create a new practice task': STATUS.IN_PROGRESS,
	'make a bed': STATUS.TO_DO,
	'write a post': STATUS.DONE,
}

function addTask(task) {
	list[task] = STATUS.TO_DO
}

function deleteTask(task) {
	delete list[task];
}

function changeStatus(task, status) {
	list[task] = status;
}

function showList(task) {
	for (task in list) {
		console.log(`${list[task]}: \n\t ${task}`);
	}
}
deleteTask('Очистить корзину');
deleteTask('make a bed');
deleteTask('write a post');
deleteTask('create a new practice task');


addTask('Почистить комп');
addTask('Очистить корзину');
addTask('Клеар дом');
addTask('Поесть хлеб')
changeStatus('Почистить комп', STATUS.IN_PROGRESS);
changeStatus('Очистить корзину', STATUS.TO_DO);
changeStatus('Поесть хлеб', STATUS.DONE)
showList()




