import {calc} from './calc.js';
import {saveResult} from './saveResult.js';

let equals = document.querySelector("#equals");
let result = document.querySelector(".result");
let operator = document.querySelector("#identifier");
let firstNumber = document.querySelector(".a");
let secondNumber = document.querySelector(".b");
let functionResult;

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


