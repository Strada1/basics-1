/* function calc(f, num1, num2) {
	if (f == 'add') {
		res = num1 + num2;
	} else if (f == 'multi') {
		res = num1 * num2;
	} else if (f == 'subtract') {
		res = num1 - num2;
	}
	return res;
} */

const operations = {
	add: '+',
	multi: '*',
	subtract: '-',
};

function calc(f, num1, num2) {
	switch (f) {
		case operations.add:
			res = num1 + num2;
			break;
		case operations.multi:
			res = num1 * num2;
			break;
		case operations.subtract:
			res = num1 - num2;
			break;
	}
	return res;
}

console.log(calc('+', 2, 2));
console.log(calc('*', 2, 5));
console.log(calc('-', 100, 1));
