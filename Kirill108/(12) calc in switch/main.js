function calc (operation, a, b) {
	switch (operation) {
		case '+':
			return (a + b);
		case '*': 
			return (a * b);
		case '-': 
			return (a - b);
	}
}

console.log(calc('+', 1, 2));
console.log(calc('*', 2, 2));
console.log(calc('-', 10, 5));
