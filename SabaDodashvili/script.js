let a = prompt('enter the first number', '0');
let b = prompt('enter the second number', '0');
let operation = prompt('enter one of the operators: add, sub, multi', 'add');

function validateValues(operation, numbOne, numbTwo) {
	let checkOnSpaces = numbOne === ' ' || numbTwo === ' ';
	let notNumber = (numbOne !== '0' && isNaN(numbOne / numbOne)) || (numbTwo !== '0' && isNaN(numbTwo / numbTwo));
	let operationIsCorrect = operation === 'add' || operation === 'multi' || operation === 'sub';

	if (checkOnSpaces || notNumber) return 'for the program to work correctly, enter the numbers';
	else if (!operationIsCorrect) return 'enter the correct operator';
	else return 'correct validation';
}

function calc(operation, numbOne, numbTwo) {
	if (validateValues(operation, numbOne, numbTwo) === 'correct validation') {
		switch (operation) {
			case 'add':
				return Number(numbOne) + Number(numbTwo);
			case 'sub':
				return Number(numbOne) - Number(numbTwo);
			case 'multi':
				return Number(numbOne) * Number(numbTwo);
			default:
				return 'unexpected error please try again';
		}
	} else {
		return validateValues(operation, numbOne, numbTwo);
	}
}

console.log(calc(operation, a, b));
