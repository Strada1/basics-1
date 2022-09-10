//сама функция калькулятора
export function calc(identifier, a, b) {
	switch (identifier) {
		case "+":
			return Number(a) + Number(b);

		case "*":
			return a * b;

		case "-":
			return a - b;

		case "/":
			return a / b;
	}
}