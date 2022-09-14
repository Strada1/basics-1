const forms = document.querySelectorAll('form');
const listHigh = document.querySelector('.high-list');
const listLow = document.querySelector('.low-list');
const addButton = document.querySelector('.new-task__button')

function createTask(levelList) {
	const task = document.createElement('li');
	const label = document.createElement('label');
	const divCheck = document.createElement('div');
	const span = document.createElement('span');
	const closeBtn = document.createElement('img');

	task.classList.add('item');
	label.classList.add('item-label');
	divCheck.classList.add('check');
	span.classList.add('item-text')
	closeBtn.classList.add('close');
	closeBtn.src = 'css/img/close.png';
	
	
	levelList.prepend(task)
	task.append(label);
	label.append(divCheck);
	label.append(span)
	label.append(closeBtn)
	
	
	divCheck.addEventListener('click', (evt) => {
		
		task.classList.toggle('checked');

		evt.target.classList.contains('checked') ?
		evt.target.classList.remove('checked') :
		evt.target.classList.add('checked');
	})

	closeBtn.addEventListener('click', () => task.remove())	

	return task;

}

function getClassName(levelList, evt) {
	let res = createTask(levelList);
	const span = res.querySelector('span');

	span.textContent = evt.target[0].value;
}

forms.forEach((form) => {
	form.addEventListener('submit', (evt) => {
		evt.preventDefault();

		evt.target.className === 'high' ? getClassName(listHigh, evt) : getClassName(listLow, evt)
		
	})
})


