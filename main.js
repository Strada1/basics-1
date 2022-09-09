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

const firstNum = document.querySelector('.first');
const secondNum = document.querySelector('.second');

const resultBtn = document.querySelector('.result-button');
const operator = document.querySelector('[id="1"]');
const resul = document.querySelector('.result');

resultBtn.addEventListener('click', () => {
	const result = calc(operator.value, +firstNum.value, +secondNum.value);

	resul.innerHTML = result;
})