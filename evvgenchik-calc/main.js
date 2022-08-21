'use stict'



const list = {
	'stydy': 'In progress',
	'gym': 'ToDo',
	'eat': 'Done',
}
function changeStatus(task, status) {
	for (let key in list) {
		if (status == 'In progress' || status == 'ToDo' || status == 'Done') {
			return list[task] = status
		}
	}
	alert('don\'t has this status')
}
function addTask(task) {
	list[task] = 'ToDo'
}
function deleteTask(task) {
	for (let key in list) {
		if (key == task) {
			return delete list[task]
		}
	}
	alert('don\'t has this task')
}

function showList() {
	console.log('ToDo:');
	for (let key in list) {
		if (list[key] == 'ToDo') {
			console.log(`
							${key}`);
		}
	}
	console.log('In progress:');
	for (let key in list) {
		if (list[key] == 'In progress') {
			console.log(`
							${key}`);
		}
	}
	console.log('Done:');
	for (let key in list) {
		if (list[key] == 'Done') {
			console.log(`
							${key}`);
		}
	}
}

addTask('take shower')
addTask('masturbate')
addTask('fight')
changeStatus('take shower', 'Done')
changeStatus('fight', 'I progress')
deleteTask('eat')
deleteTask('big')
showList()