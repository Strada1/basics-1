const inputName = document.querySelector('.input-name')
const buttonGender = document.querySelector('.button-gender');




buttonGender.addEventListener('submit', gender);
function gender(event) {
    event.preventDefault();
 const firstName = inputName.value
const serverUrl = 'https://api.genderize.io';
const url = `${serverUrl}?name=${firstName}`;
const response = fetch(url);
result = response.json()
alert(`${firstName.value} is ${result.gender}`)
}
