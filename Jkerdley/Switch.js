let calcAction = prompt( "Введите действие (add, sub, multi, div, exp)" );
let a = +prompt( "Введите первое число" );
let b = +prompt( "Введите второе число" );

function calc(calcAction, a=parseFloat, b=parseFloat) {
	switch (calcAction) {
		case "add": return a + b;		//Сложение
		case "multi": return a * b;		//Умножение
		case "sub": return a - b;		//Вычитание
		case "div": return a / b;		//Деление
		case "exp": return a ** b;		//Возведение в степень
		default: return ( "Введите add-сложить, sub-вычесть, multi-умножить div-разделить, exp-возвести в степень" );
		}
	}
alert(calc(calcAction, a, b));