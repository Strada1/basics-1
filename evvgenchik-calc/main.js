'use stict'





const list = [
	{ name: 'create a post', status: 'in progress', priority: 'low' },
]


const statuses = ['in progress', 'todo', 'done']
const priorities = ['high', 'low']

function addTask(task, priority) {
	if (list.find(nameTask => nameTask.name == task)) {
		alert('have this task')
	} else { list.push({ 'name': task, 'status': 'todo', 'priority': priority }) }
}
function changeStatus(task, status) {
	if (statuses.includes(status.toLowerCase())) {
		list.map(nameTask => {
			if (nameTask.name == task) {
				nameTask.status = status.toLowerCase()
			}
		})
	} else { alert('incorrect status') }
}
function deleteTask(task) {
	if (list.find(nameTask => nameTask.name != task)) {
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
						${aim.name}(priority: ${aim.priority})`);
		}
	}
	console.log('In progress:');
	for (let aim of list) {
		if (aim.status == 'in progress') {
			console.log(`
						${aim.name}(priority: ${aim.priority})`);
		}
	}
	console.log('Done:');
	for (let aim of list) {
		if (aim.status == 'done') {
			console.log(`
						${aim.name}(priority: ${aim.priority})`);
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
console.log(list);