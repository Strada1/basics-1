let equals = document.querySelector("#equals");
let result = document.querySelector(".result");
let operator = document.querySelector("#identifier");
let firstNumber = document.querySelector(".a");
let secondNumber = document.querySelector(".b");
let functionResult;

let containerForNewDiv = document.querySelector(".container__saves-results");

//Создаем новый div, который будет содержать в себе сохраненный ответ
function saveResult(functionResult) {
	
	let myDiv = document.createElement("div");

	//Вешаем на него сразу событие клика, чтобы по клику удалялся
	myDiv.addEventListener("click", function () {
		myDiv.remove();
	});

	//стили для создаваемого div
	myDiv.style.cursor = "pointer";
	myDiv.style.width = "fit-content";
	myDiv.style.margin = "0 auto";

	//Передаем в новый созданный div результат функции
	myDiv.textContent = functionResult;
	containerForNewDiv.append(myDiv);
}

//вешаем событие на кнопку равно
equals.addEventListener("click", function () {
	operator = document.querySelector("#identifier").value;
	firstNumber = document.querySelector(".a").value;
	secondNumber = document.querySelector(".b").value;

	functionResult = Number(calc(operator, firstNumber, secondNumber).toFixed(2));

	//проверяем все ли поля заполнены
	if (firstNumber == "" || secondNumber == "") {
		result.textContent = "Пожалуйста введите все числа";
		result.style.color = "red";
	} else {
		//Передаем результат функции в span
		result.textContent = functionResult;
		result.style.color = "green";

		saveResult(functionResult);
	}
});

//сама функция калькулятора
function calc(identifier, a, b) {
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
