'use strict'

const iconTask = document.querySelectorAll('.input-priority__add');

iconTask.forEach(el => {
	el.addEventListener('click', addTask)
})
function addTask(event) {
	event.preventDefault()
	let actualEvent = event.target;
	switch (actualEvent.id) {
		case 'high':
			let textTask = actualEvent.closest('form').querySelector('input').value
			let br = actualEvent.closest('form').querySelector('input')
			let parentList = document.querySelector('#high-list')
			let tasks = (parentList.querySelectorAll('.checkbox__task'))
			// проверка
			for (let task of tasks) {
				console.log(task.textContent.replace(/\s+/g, ''));
				console.log(textTask);
				if (task.textContent.replace(/\s+/g, '') == textTask) {
					alert('такая задача уже есть')
					return
				}
			}
			parentList.insertAdjacentHTML('beforeend', `
			<label for="html" class="checkbox__task"><input type="checkbox" class="checkbox__input">
							${textTask}
							<div class="checkbox__close"></div>
						</label>
			`)
	}
	switch (actualEvent.id) {
		case 'low':
			let textTask = actualEvent.closest('form').querySelector('input').value
			let parentList = document.querySelector('#low-list')
			let tasks = (parentList.querySelectorAll('.checkbox__task'))
			// проверка
			for (let task of tasks) {
				console.log(task.textContent.replace(/\s/g, ''));
				console.log(textTask);
				if (task.textContent.replace(/\s/g, '') == textTask) {
					alert('такая задача уже есть')
					return
				}
			}
			parentList.insertAdjacentHTML('beforeend', `
			<label for="html" class="checkbox__task"><input type="checkbox" class="checkbox__input">
							${textTask}
							<div class="checkbox__close"></div>
						</label>
			`)
	}
}