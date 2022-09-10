
const container = document.querySelector('.container');
const firstNum = container.querySelector('.first');
const secondNum = container.querySelector('.second');
const resultBtn = container.querySelector('.result-button');
const operator = container.querySelector('[id="1"]');
const result = container.querySelector('.result');
const list = document.querySelector('.list');

function calc(operator, a, b) {
	switch (operator) {
		case 'plus':
			return a + b
		case 'multi':
			return a * b
		case 'minus':
			return a - b
		case 'divide':
			return a / b
		default:
			console.log('Ошибка')
			
	}
}



resultBtn.addEventListener('click', () => {
	const getCalc = calc(operator.value, +firstNum.value, +secondNum.value);

	list.insertAdjacentHTML(`beforeend`, `<li class="item">${getCalc}</li>`);

	const items = list.querySelectorAll('.item');

	items.forEach((item) => {
		function removeItem() {
			item.remove()
		}

		item.addEventListener('click', removeItem)
	})
		
	firstNum.value === '' || secondNum.value === '' ? result.textContent = 'Press your number' : result.textContent = getCalc;
})