'use strict'


const equal = document.querySelector('.equals')
equal.addEventListener('click', calc)

function calc() {
	const firstNum = +document.querySelector('.input-one > input').value;
	const secondNum = +document.querySelector('.input-two > input').value;
	const operator = document.querySelector('.list').value;
	const result = document.querySelector('.result')
	if (firstNum == ' ' || secondNum == ' ') {
		return result.innerHTML = 'Заполните все поля'
	}
	let finalResult = 0
	switch (operator) {
		case '+': finalResult = firstNum + secondNum
			break
		case '*': finalResult = firstNum * secondNum
			break
		case '-': finalResult = firstNum - secondNum
			break
		case '/': finalResult = firstNum / secondNum
			break
	}
	result.innerHTML = +((finalResult).toFixed(10))
}


