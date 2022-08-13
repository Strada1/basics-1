function calc(a, b, action) {
	switch(action) {
		case '+':
			return a + b
		case '-':
			return a - b
		case '*':
			return a * b
		case '/':
			return a / b
		case '**':
			return a ** b
		case '%':

	}
}

console.log(calc(3, 1, '+'))
console.log(calc(3, 1, '-'))
console.log(calc(3, 1, '*'))
console.log(calc(3, 1, '/'))
console.log(calc(3, 1, '**'))
