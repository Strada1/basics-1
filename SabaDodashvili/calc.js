let a = prompt('enter the first number', '0');
let b = prompt('enter the second number', '0');
let operation = prompt('enter one of the operators: add, sub, multi', 'add');

function validateValues(operation, numbOne, numbTwo, operationsObj) {
	let checkOnSpaces = numbOne === ' ' || numbTwo === ' ';
	let notNumber = (numbOne !== '0' && isNaN(numbOne / numbOne)) || (numbTwo !== '0' && isNaN(numbTwo / numbTwo));
	let operationIsCorrect = false;

	for (const key in operationsObj) {
		if (key === operation) operationIsCorrect = true;
	}

	if (checkOnSpaces || notNumber) return 'for the program to work correctly, enter the numbers';
	else if (!operationIsCorrect) return 'enter the correct operator';
	else return 'correct validation';
}

function calc(operation, numbOne, numbTwo) {
	let operations = {
		add: '+',
		sub: '-',
		multi: '*',
	};

	let validationResult = validateValues(operation, numbOne, numbTwo, operations);

	if (validationResult === 'correct validation') {
		switch (operations[operation]) {
			case operations.add:
				return Number(numbOne) + Number(numbTwo);
			case operations.sub:
				return Number(numbOne) - Number(numbTwo);
			case operations.multi:
				return Number(numbOne) * Number(numbTwo);
			default:
				return 'unexpected error please try again';
		}
	} else {
		return validationResult;
	}
}

console.log(calc(operation, a, b));
