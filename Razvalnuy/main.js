//--------------------------------------
//*let result = 4 + 5;

// switch (result) {
// 	case 2:
// 		alert('НЕ верно');
// 		break;
// 	case 9:
// 		alert('верно');
// 		break;
// 	case 5:
// 		alert('НЕ верно');
// 		break;
// 	default:
// 		alert(' ты смотри что делаешь!');
// }


//--------------------------------------
// let a = prompt('Введите зн-ие, а я! Угадаю)')
// switch (a) {
// 	case '0':
// 	case '1':
// 		alert('Ноль или один');
// 		break;
// 	case '2':
// 		alert('Хах да просо 2');
// 		break;
// 	case 3:
// 		alert('Интересное 3 ');
// 		break;
// 	default:
// 		alert('Непонялллллллл');
// }

//--------------------------------------
// switch (browser) {
// 	case 'Edge':
// 		alert("You've got the Edge!");
// 		break;

// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		alert('Okay we support these browsers too');
// 		break;

// 	default:
// 		alert('We hope that this page looks ok!');
// }

//--------------------------------------
// let browser = prompt('Браузер');

// if (browser == 'Edge') {
// 	alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
// 	alert('Okay we support these browsers too');
// } else {
// 	alert('We hope that this page looks ok!');
// }

//--------------------------------------
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
// 	alert('Вы ввели число 0');
// }

// if (number === 1) {
// 	alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
// 	alert('Вы ввели число 2, а может и 3');
// }

//--------------------------------------
// switch (number) {
// 	case 0:
// 		alert('Вы ввели число 0 или нажали Esc');
// 		break;
// 	case 1:
// 		alert('Вы ввели число 1');
// 		break;
// 	case 2:
// 	case 3:
// 		alert('Вы ввели число 2, а может и 3');
// 		break
// }

//--------------------------------------

// function calcSumar(operator, one, two) {
// 	if (operator == 'add') { return one + two; }
// 	else if (operator == 'um') { return one * two; }
// 	else if (operator == 'minus') { return one - two; }
// 	else { alert("Ошибка в операции"); }
// }
// let one = +prompt('Введите 1 число');
// let two = +prompt('Введите 2 число');
// let operator = prompt("Введите оператор");

// result = calcSumar(operator, one, two);
// alert(result);

// function calcSumSwithc(operator, a, b) {
// 	switch (operator) {
// 		case 'add':
// 			return a + b;
// 			break;
// 		case 'um':
// 			return a * b;
// 			break;
// 		case 'minus':
// 			return a - b;
// 			break;
// 		default:
// 			alert('Я ннн не понял')
// 	}
// }
// let operator, a, b, result;
// a = +prompt('1');
// b = +prompt('2');
// operator = prompt('Введите оператор');
// result = calcSumSwithc(operator, a, b);
// alert(result);


// razvalnuy написал сам!
// function calcSumRazvalnuy(operatorion, a, b) {
// 	switch (operatorion) {
// 		case '+': return a + b;
// 			break;
// 		case '-': return a - b;
// 			break;
// 		case '*': return a * b;
// 			break;
// 		case '/': return a / b;
// 			break;
// 		default:
// 			alert('Ой что то я не понял ) ')
// 	}
// }
// let operatorion, a, b;
// a = +prompt('Введите 1 число: ', 0);
// b = +prompt('Введите 2 число: ', 0);
// operatorion = prompt('Введите базовую операцию (+, -, *, /: ) ');
// result = calcSumRazvalnuy(operatorion, a, b);
// alert(result);


