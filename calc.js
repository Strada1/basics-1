let a=+prompt('Введите значение a','');
let b=+prompt('Введите значение b','');
let operator=prompt('Что нужно сделать?','');
function calc(a, b, operator) {
	switch(operator) {
		case '+':
			return a + b
		case '-':
			return a - b
		case '*':
			return a * b
		case '/':
			return a / b
	}
}
alert (calc(a, b, operator))

