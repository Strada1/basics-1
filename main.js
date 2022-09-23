/*
Напишите программу, которая передает на сервер имя и в ответ получает "возможный" пол для этого имени.
Вот вам готовая строка с URL (только имя успевайте менять)
const firstName = 'artem';
const serverUrl = 'https://api.genderize.io';
const url = `${serverUrl}?name=${firstName}`;
Сделайте самый простой интерфейс для этой программы (форму):
input - в него введете имя
кнопку рядом - она будет отправлять это имя на сервер
в alert или в строке ниже показывайте результат вот такого вида
"Artem is male"*/



let button = document.getElementById('button');
//<получаем ответ с сервера>
async function OnButtonPress() {
    let userName = document.getElementById('inputName');
    let firstName = userName.value; 
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    let response = await fetch(url);
    let json = await response.json();
    let result = document.getElementById('resultField');
    result.innerHTML = `${firstName} is ${json.gender}`;
}
button.onclick = OnButtonPress;
