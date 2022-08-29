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



function taskName(name) {
	return list.findIndex(item => item.name === name);
	 
}

function isNotValid (name, status, priority) {
	const isNotValid = (name !== undefined && status !== undefined && typeof name === 'string' && typeof status === 'string' && typeof priority === 'string');
	return isNotValid;
}

function addTask(name, status = STATUS.INPROGRESS, priority = PRIORITY.HIGH) {
	if (isNotValid(name, status, priority)) {
		return list.push({name, status, priority})
	} else {
		console.log('Вы ввели не правельное значение')
	}
}

function deleteTask(name) {
	if (taskName) {
		list.splice(taskName(name),1);
	} else {
		return console.log('Данной задачи нет в списке!')
	}
}

function changeStatus (name, newStatus = STATUS.INPROGRESS) {
	let result = taskName(name); 
	if (result === -1 ) {
		console.log('Данной задачи нет в списке. Вы не можете изменить статус для несуществующей задачи.')
	} else {
		return list[result].status = newStatus;
	}
}

function changePriority (name, priority) {
	let result = taskName(name);
	if (result === -1 ) {
	console.log('Данной задачи нет в списке. Вы не можете изменить приоритет для несуществующей задачи.')
	} else {
		list[result].priority = priority;
	}
}

function showList() {
	for (let nameStatus in STATUS){
		console.log(`${STATUS[nameStatus]}:`);
		list.filter(function (item) {
			if(item.status === STATUS[nameStatus]) {
			console.log(` -Задача: ${item.name}, Приортет: ${item.priority} `);
			}
		});
	}
}
changePriority ('test', PRIORITY.LOW) ;	
changeStatus ('test', STATUS.DONE);
deleteTask('test');
addTask(123);
addTask('time to rest');
addTask('go for a walk', STATUS.TODO);
showList();
