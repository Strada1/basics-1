const inputName = document.querySelector('.input-name')
const genderForm = document.querySelector('.gender-form');


genderForm.addEventListener('submit', gender);
function gender(event) {
    event.preventDefault();
 const firstName = inputName.value
const serverUrl = 'https://api.genderize.io';
const url = `${serverUrl}?name=${firstName}`;
const response = fetch(url);
const result = response.json()
alert(`${firstName} is ${result.gender}`)
}
