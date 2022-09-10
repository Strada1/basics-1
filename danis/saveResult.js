import {calc} from './calc.js';

//Создаем новый div, который будет содержать в себе сохраненный ответ
export function saveResult(functionResult) {
	let containerForNewDiv = document.querySelector(".container__saves-results");
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