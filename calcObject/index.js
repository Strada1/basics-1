function calc(a, b, operator) {
	operations = {
		add:'+',
		multi:'*',
		sub:'-'
	}
	switch(operator) {
		case operations.add:
			return a + +b
		case operations.multi:
			return a * b
		case operations.sub:
			return a - b
	}
}

console.log(calc(6, '3', '+'))
console.log(calc(6, 3, '*'))
console.log(calc(6, 3, '-'))