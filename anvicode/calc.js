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

function calc(f, num1, num2) {
	switch (f) {
		case 'add':
			res = num1 + num2;
			break;
		case 'multi':
			res = num1 * num2;
			break;
		case 'subtract':
			res = num1 - num2;
			break;
	}
	return res;
}

console.log(calc('add', 2, 2));
console.log(calc('multi', 2, 5));
console.log(calc('subtract', 100, 1));
