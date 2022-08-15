
function calc (func, num1, num2) {
switch (func) {
	case 'add':
	return num1 + num2;

	case 'sub':
	return num1 - num2;

	case 'multi':
	return num1 * num2;

	default:
	"Такой функции нет!";
}
}
console.log(calc('multi', 5, 7));