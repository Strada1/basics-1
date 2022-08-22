
function calcObjSum(a, b, command) {
	if (isNaN(a) || isNaN(b)) return 'Ошибка введен неправельный операнд';

	const obj = {
		add: 'add',
		sub: 'sub',
		mul: 'mul',
	}

	switch (command) {
		case obj.add: return a + b;
		case obj.sub: return +a - +b;
		case obj.mul: return +a * +b;
		default: return 'Ошибка, неправильная команда'
	};
}


console.log(calcObjSum(2, 5, 'add'));

console.log(calcObjSum(10, 5, 'sub'));

console.log(calcObjSum(5, 5, 'mul'));
