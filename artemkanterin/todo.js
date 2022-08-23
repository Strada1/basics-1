const STATUS = {
	to_do: 'To Do',
	done: 'Done',
	in_progress: 'In Progress',
}

const LIST = {
	"create a new practice task": STATUS.in_progress,
	"make a bed": STATUS.done,
	"write a post": STATUS.to_do,
	'have a walk': STATUS.to_do,
}

function addTask (list, task, status) {
	 list[task] = status;
	}

function deleteTask (list, task) {
	delete list[task];
		}

function changeStatus (list, task, status) {
	if (task in LIST && status in STATUS) {
		list[task] = STATUS[status];
	}	else {
		console.log('Error change task, status');
	}	
}

function showList() {

	let resultTodo = `${STATUS.to_do}: \n`;
	let resultDone = `${STATUS.done}: \n`;
	let resultProgress = `${STATUS.in_progress}: \n`;
	
		for (let key in LIST) {
		if (LIST[key] == STATUS.to_do) {
			resultTodo += `  "${key}"\n`;
			
		}
		else if (LIST[key] == STATUS.done){
			resultDone += `  "${key}"\n`;
			
		}
		else if (LIST[key] == STATUS.in_progress){
			resultProgress += `  "${key}"\n`;
			
		}
	}

	console.log (resultTodo);
	console.log(resultDone);
	console.log(resultProgress);
	}

addTask (LIST, 'abc', STATUS.done);
addTask (LIST, 'efg', STATUS.in_progress);
addTask (LIST, 'higk', STATUS.done);
addTask (LIST, 'lmno', STATUS.in_progress);

deleteTask (LIST, 'make a bed');
changeStatus (LIST, 'write a post', 'done');
showList ();