const operation = {
	add: 'add',
	multi: 'multi',
	substract: 'substract',
}

function calculate(operand, a, b) {
	switch (operand) {
		case operation.add:
			return a + b
		case operation.multi:
			return a * b
		case operation.substract:
			return a - b
		default:
			alert('Ошибка')
	}
}

console.log(calculate('add', 2, 1))
console.log(calculate('multi', 1, 2))
console.log(calculate('substract', 3, 2))
