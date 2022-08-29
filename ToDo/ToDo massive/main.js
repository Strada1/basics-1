const STATUS = {
    TODO: 'ToDo',
    INPROGRESS: 'In Progers',
    DONE: 'Done',
   }
   
const PRIORITY = {
	HIGH: 'high',
	LOW: 'low'
}

const list = [ { 
	name: 'create a post', status: STATUS.INPROGRESS, priority: PRIORITY.LOW }, { 
	name: 'test', status: STATUS.TODO, priority: PRIORITY.HIGH },{ 
	name: 'read a book', status: STATUS.DONE, priority: PRIORITY.HIGH }
];
	
function addTask(name, status = STATUS.INPROGRESS, priority = PRIORITY.HIGH) {
	list.push({name, status, priority})
}

function deleteTask(name) {
	if (list.find(item => item.name == name)) {
		list.splice(list.findIndex(item => name == item.name),1);
	} else {
		return console.log('Данной задачи нет в списке!')
	}
		
}

function changeStatus (name, status = STATUS.INPROGRESS) {
	let result = list.findIndex(item => item.name == name) 
	if (result === -1 ) {
		console.log('Данной задачи нет в списке. Вы не можете изменить статус для несуществующей задачи.')
	} else {
		return list[result].status = status;
	}
}

function changePriority (name, priority) {
	let result = list.findIndex(item => item.name == name);
	if (result === -1 ) {
	console.log('Данной задачи нет в списке. Вы не можете изменить приоритет для несуществующей задачи.')
	} else {
		list[result].priority = priority;
	}
}

function showList() {

	console.log(`${STATUS.DONE}:`)
	for (let task of list ) {
		if (task.status === STATUS.DONE) {
			console.log(` -Задача: ${task.name}, Приортет: ${task.priority}.`);
		}
	}
	console.log(`${STATUS.TODO}:`)
	for (let task of list ) {
		if (task.status === STATUS.TODO) {
			console.log(` -Задача: ${task.name}, Приортет: ${task.priority}.`);
		}
	}
	console.log(`${STATUS.INPROGRESS}:`)
	for (let task of list ) {
		if (task.status === STATUS.INPROGRESS) {
			console.log(` -Задача: ${task.name}, Приортет: ${task.priority}.`);
		}
	}
}
changePriority ('test', PRIORITY.LOW) ;	
changeStatus ('test', STATUS.DONE);
deleteTask('test');
addTask('make a bad');
addTask('go for a walk', STATUS.TODO);


showList();
