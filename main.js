const form = document.querySelector('.form');
const input = document.querySelector('.name__input');
const output = document.querySelector('.answer__inner');

const firstName = input;
const serverUrl = 'https://api.genderize.io';

form.addEventListener('submit', getGender);

function getGender(event) {
    event.preventDefault();
    const url = `${serverUrl}?name=${firstName.value}`;
    fetch(url)
        .then(response => response.json())
        .then(obj => correct(obj))
}

function correct(obj) {
    return (obj.gender === null) ? output.innerHTML = `Probably this name doesn't exist` : output.innerHTML = obj.gender;
}




