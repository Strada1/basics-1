function calc(operation, a, b) {
	const ADD_OPERATION = 'add';
	const MULTI_OPERATION = 'multi';
	const SUBTRACT_OPERATION = 'subtract';
	const OPERATION_ERROR = 'Unknown operation';
	const NUMBER_ERROR = 'Unknown number';
	const DEFAULT_ERROR = 'Unknown error';
	const isNumber = typeof a === 'number' && typeof b === 'number';
	const isCorrectOperation = operation === ADD_OPERATION || operation === MULTI_OPERATION || operation === SUBTRACT_OPERATION;

	if (!isCorrectOperation) return OPERATION_ERROR;
	if (!isNumber) return NUMBER_ERROR;

	switch (operation) {
		case ADD_OPERATION:
			return a + b;
		case MULTI_OPERATION:
			return a * b;
		case SUBTRACT_OPERATION:
			return a - b;
		default:
			return DEFAULT_ERROR;
	}
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('subtract'));
console.log(calc('', 3, 2));
console.log(calc('subtract', '3', 2));
console.log(calc('subtract', 3, '2'));