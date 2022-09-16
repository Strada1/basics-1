let btn = document.getElementById('btn');
btn.onclick = function () {
	let firstOperand = document.getElementById('firstInput').value;
	let secondOperand = document.getElementById('secondInput').value;
	let operator = document.getElementById('select').value;
	if (
		firstOperand === '' ||
		isNaN(firstOperand) ||
		secondOperand === '' ||
		isNaN(secondOperand)
	) {
		alert('Вы не ввели число!');
		return;
	} else {
		firstOperand = +firstOperand;
		secondOperand = +secondOperand;
	}

	let result = calc(operator, firstOperand, secondOperand);
	document.getElementById('calc_result').textContent = result;

	let resultsDiv = document.getElementById('results');
	resultsDiv.insertAdjacentHTML(
		'beforeend',
		`<div class="result">${result}</div>`
	);

	let resultsArr = document.querySelectorAll('.result');
	removeResult(resultsArr);
};

function removeResult(results) {
	for (let result of results) {
		result.onclick = function () {
			result.remove();
		};
	}
}

function calc(operator, firstOperand, secondOperand) {
	switch (operator) {
		case '+':
			return firstOperand + secondOperand;
		case '*':
			return firstOperand * secondOperand;
		case '-':
			return +(firstOperand - secondOperand).toFixed(10);
		case '/':
			return (firstOperand / secondOperand).toFixed(2);
		default:
			return 'Такого действия нет.';
	}
}
