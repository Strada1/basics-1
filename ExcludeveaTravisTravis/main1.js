function calc(a, b, mark) {
	let pull
	if (mark == '+') {
		pull = a + b;
	} else if (mark == '-') {
		pull = a - b;
	} else if (mark == '*') {
		pull = a * b;
	} else if (mark == '/') {
		pull = a / b;
	}
	return pull
}

console.log(calc(7, 3, '+'))
console.log(calc(7, 3, '-'))
console.log(calc(7, 3, '*'))
console.log(calc(7, 3, '/'))