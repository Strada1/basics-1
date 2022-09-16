'use strict'

const highInput = document.querySelector('#input-high')
const lowInput = document.querySelector('#input-low')
const highList = document.getElementById('high-list')
const lowList = document.querySelector('#low-list')
const addButtons = document.querySelectorAll('.input-priority__add')

const tasksList = [];

addButtons.forEach(el => el.addEventListener('click', function (event) {
	event.preventDefault()
	addTask(event.target)
}))

function addTask(event) {
	try {
		if (event.matches('#button-high')) {
			if (highInput.value === '') {
				throw 'введите задачу в поле 1'
			}
			tasksList.push({
				'name': highInput.value,
				'state': 'todo',
				'priority': 'high',
			})
			highInput.value = '';
		}
		if (event.matches('#button-low')) {
			if (lowInput.value === '') {
				throw 'введите задачу в поле 1'
			}
			tasksList.push({
				'name': lowInput.value,
				'state': 'todo',
				'priority': 'low',
			})
			lowInput.value = '';
		}
	} catch (e) {
		alert(e)
	}
	addHtmlTask()
}
function changeStatus(index) {
	tasksList[index].state == 'done' ? tasksList[index].state = 'todo' : tasksList[index].state = 'done';
	addHtmlTask()
}

function deleteTask(index) {
	tasksList.splice(index, 1);
	addHtmlTask()
}

function addHtmlTask() {
	highList.innerHTML = '';
	lowList.innerHTML = '';
	tasksList.forEach((task, index) => {
		if (task.priority === 'high') {
			highList.insertAdjacentHTML('afterbegin', `
		<div id = "${index}" class="checkbox__task">
								<input  onclick = "changeStatus(${index})" type="checkbox" class="checkbox__input">
								<div class="checkbox-task__name">${task.name}</div>
								<div class="checkbox__close" onclick = "deleteTask(${index})"></div>
							</div>
		`)
		}
		if (task.priority === 'low') {
			lowList.insertAdjacentHTML('afterbegin', `
	<div id = "${index}" class="checkbox__task">
							<input onclick = "changeStatus(${index})" type="checkbox" class="checkbox__input">
							<div class="checkbox-task__name">${task.name}</div>
							<div class="checkbox__close" onclick = "deleteTask(${index})"></div>
						</div>
	`)
		}
		if (task.state === 'done') {
			(document.getElementById(index).classList.add('done'))
			document.getElementById(index).querySelector('input').setAttribute('checked', 'checked')
		} else { document.getElementById(index).classList.remove('done') }
	})
}




