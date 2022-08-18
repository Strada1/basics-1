const operations = {
	add: '+',
	multi: '*',
	subract: '-',
}

function calc(operator, a, b) {
	switch (operator) {
		case operations.add:
			return +a + +b;
		case operations.multi:
			return +a * +b;
		case operations.subract:
			return +a - +b;
		default:
			return ('error')
	}
}
console.log(calc(operations.add, '166', 5));
console.log(calc(operations.multi, 6, 3));
console.log(calc(operations.subract, '17q', 3));
