// Custom Scripts

//_______________________________________12.08.22

function calcul(func, a, b) {
	switch (func) {
		case 'add':
			return a + b;
		case 'multi':
			return a * b;
		case 'subtract':
			return a - b;
		default:
			return console.log('подумай получше');
	}
}
console.log(calcul('add', 8, 2));
console.log(calcul('multi', 4, 2));
console.log(calcul('subtract', 5, 2));


// if (browser === 'Edge') {
// 	alert("You've got the Edge!");
// }
// else if (browser === 'Chrome'
// 	|| browser === 'Firefox'
// 	|| browser === 'Safari'
// 	|| browser === 'Opera') {
// 	alert('Okay we support these browsers too');
// }
// else {
// 	alert('We hope that this page looks ok!');
// }


// const number = +prompt('Введите чисто от 0 до 3', '');

// switch (number) {
// 	case 0:
// 		alert('Вы ввели число 0');
// 		break;
// 	case 1:
// 		alert('Вы ввели число 1');
// 		break;
// 	case 2:
// 	case 3:
// 		alert('Вы ввели число 2, а может и 3');
// 		break;
// }

