'use strict'


const highButton = document.querySelector('#button-high')
const lowButton = document.querySelector('#button-low')
const highInput = document.querySelector('#input-high')
const highList = document.getElementById('high-list')
const lowList = document.querySelector('#low-list')


const tasksList = [];


highButton.addEventListener('click', function (event) {
	event.preventDefault()
	addTask()
})


function addTask() {
	tasksList.push({
		'name': highInput.value,
		'state': 'todo'
	})
	addHtmlTask()
}
function changeStatus(index) {
	tasksList[index].state == 'done' ? tasksList[index].state = 'todo' : tasksList[index].state = 'done';
}


function deleteTask(index) {
	tasksList.splice(index, 1);
	addHtmlTask()
}

function addHtmlTask() {
	highList.innerHTML = '';
	tasksList.forEach((task, index) => {
		highList.insertAdjacentHTML('afterbegin', `
	<div class="checkbox__task">
							<input onclick = "changeStatus(${index})" type="checkbox" class="checkbox__input">
							<div class="checkbox-task__name">${task.name}</div>
							<div class="checkbox__close" onclick = "deleteTask(${index})"></div>
						</div>
	`)
	})

}



















































// const iconTask = document.querySelectorAll('.input-priority__add');
// const parentListLow = document.querySelector('#low-list');
// const parentListHigh = document.querySelector('#high-list')
// const parentLists = document.querySelectorAll('.checkbox')


// const arrTasksList = [
// 	{ name: 'бег', status: 'done', priority: 'high' }]

// parentLists.forEach(el => el.addEventListener('click', function (event) {
// 	event.preventDefault()
// 	if (event.target.tagName === 'INPUT') {
// 		changeStatus(event.target)

// 	}
// 	if (event.target.tagName === 'DIV') {
// 		deleteTask(event.target)
// 		showList()
// 	}
// })
// )
// iconTask.forEach(el => {
// 	el.addEventListener('click', addTask)
// 	el.addEventListener('click', showList)
// })


// function addTask(event) {
// 	event.preventDefault()
// 	let actualEvent = event.target;
// 	switch (actualEvent.id) {
// 		case 'high':
// 			let textTask = actualEvent.closest('form').querySelector('input').value
// 			if (arrTasksList.find(nameTask => nameTask.name === textTask)) {
// 				alert('такая задача уже есть')
// 				return
// 			} else {
// 				arrTasksList.push({ 'name': textTask, 'status': 'todo', 'priority': 'high' })
// 			}
// 	}
// 	switch (actualEvent.id) {
// 		case 'low':
// 			let textTask = actualEvent.closest('form').querySelector('input').value
// 			if (arrTasksList.find(nameTask => nameTask.name === textTask)) {
// 				alert('такая задача уже есть')
// 				return
// 			} else {
// 				arrTasksList.push({ 'name': textTask, 'status': 'todo', 'priority': 'low' })
// 			}
// 	}
// }

// function changeStatus(event) {
// 	event.closest('label').classList.toggle('done')
// 	let TaskChangeText = event.closest('label').querySelector('span').textContent;
// 	for (let task of arrTasksList) {
// 		if (task.name === TaskChangeText) {
// 			task.status = 'done'
// 		}
// 	}
// }

// function deleteTask(event) {
// 	let TaskChange = event.closest('label').querySelector('span').textContent;
// 	arrTasksList.splice(arrTasksList.findIndex(task => task.name === TaskChange), 1)
// }

// function showList() {
// 	parentListHigh.innerHTML = '';
// 	parentListLow.innerHTML = '';
// 	for (let task of arrTasksList) {
// 		if (task.priority === 'high') {
// 			parentListHigh.insertAdjacentHTML('beforeend', `
// 			<label for="html" class="checkbox__task"><input type="checkbox" class="checkbox__input">
// 				<span>${task.name}</span>
// 							<div class="checkbox__close"></div>
// 						</label>
// 			`)
// 		}
// 		if (task.priority === 'low') {
// 			parentListLow.insertAdjacentHTML('beforeend', `
// 			<label for="html" class="checkbox__task"><input type="checkbox" class="checkbox__input">
// 				<span>${task.name}</span>
// 							<div class="checkbox__close"></div>
// 						</label>
// 			`)
// 		}
// 	}
// }
