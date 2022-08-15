// razvalnuy написал сам!
function calcSumRazvalnuy(operatorion, a, b) {
	switch (operatorion) {
		case '+': return a + b;
			break;
		case '-': return a - b;
			break;
		case '*': return a * b;
			break;
		case '/': return a / b;
			break;
		default:
			alert('Ой что то я не понял ) ')
	}
}
let operatorion, a, b;
a = +prompt('Введите 1 число: ', 0);
b = +prompt('Введите 2 число: ', 0);
operatorion = prompt('Введите базовую операцию (+, -, *, /: ) ');
result = calcSumRazvalnuy(operatorion, a, b);
alert(result);


