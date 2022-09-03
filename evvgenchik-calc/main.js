'use stict'




const list = [
	{ name: 'create a post', status: 'in progress', priority: 'low' },
]

function addTask(task, priority) {
	if (list.find(item => item.name == task)) {
		alert('have this task')
	}
	list.push({ 'name': task, 'status': 'todo', 'priority': priority })
}
function changeStatus(task, status) {
	if (status.toLowerCase() == 'todo' || status.toLowerCase() == 'in progress' || status.toLowerCase() == 'done') {
		list.map(item => {
			if (item.name == task) {
				item.status = status.toLowerCase()
			}
		})
	} else { alert('incorrect status') }
}
function deleteTask(task) {
	if (list.find(item => item.name != task)) {
		alert('dont had this task yet')
	}
	list.map((item, index) => {
		if (item.name == task) {
			list.splice(index, 1)
		}
	})
}
function showList() {
	console.log('ToDo:');
	for (let aim of list) {
		if (aim.status == 'todo') {
			console.log(`
						${aim.name}`);
		}
	}
	console.log('In progress:');
	for (let aim of list) {
		if (aim.status == 'in progress') {
			console.log(`
						${aim.name}`);
		}
	}
	console.log('Done:');
	for (let aim of list) {
		if (aim.status == 'done') {
			console.log(`
						${aim.name}`);
		}
	}
}



addTask('drink', 'high')
addTask('drink', 'high')
addTask('gym', 'low')
addTask('shower', 'high')
addTask('walk', 'low')
addTask('study', 'high')
changeStatus('study', 'dOne')
changeStatus('study', 'did')
changeStatus('shower', 'In progress')
deleteTask('walk')
showList()
