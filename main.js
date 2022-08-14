// let number = prompt('число', 0);
// if (number > 0) {
// 	alert('1') //
// } else if (number < 0) {
// 	alert('-1')
// } else { //
// 	alert('0')
// }
// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

// function showMessage() {
// 	console.log(); ('Всем привет!');
// }

// showMessage();
// showMessage();

// function checkAge(age) { return age > 18 ? true : confirm('Родители разрешили?')
// 		// if () {
// 	//   return true;
// 	// } else {
// 	//   return confirm('Родители разрешили?');
// 	// }
//  }

// function Sum(){
// 	if  
// }

// function calc(a, b) { //не корректная функция
// 	let a = 1
// 	let b = 2
// 	if (a + b == c) {
// 		return c;
// 	} else if (a * b == c) {
// 		return c;
// 	} else if (c %= a + b) {
// 		return c
// 	}
// }

function calc(operation, a, b) {
	if (operation === '+') {
		return a + b;
	} else if (operation === "-") {
		return a - b;
	} else if (operation === "*") {
		return a * b;
	}
}
console.log(calc('+', 4, 5))
console.log(calc('-', 4, 5))
console.log(calc('*', 4, 5))

function calc(operation, a, b) {
	switch (operation) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		default:
			break;
	}
}
console.log(calc('+', 4, 5))
console.log(calc('-', 4, 5))
console.log(calc('*', 4, 5))