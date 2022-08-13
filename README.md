# basics-1
Репозиторий для первого потока "Основы" 

function calc(operation, a, b) {
	if (operation === '+') {
		return a + b;
	} else if (operation === "-") {
		return a - b;
	} else if (operation === "*") {
		return a * b;
	}
}
console.log(calc('+', 4, 5))
console.log(calc('-', 4, 5))
console.log(calc('*', 4, 5))

function calc(operation, a, b) {
	switch (operation) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		default:
			break;
	}
}
console.log(calc('+', 4, 5))
console.log(calc('-', 4, 5))
console.log(calc('*', 4, 5))
