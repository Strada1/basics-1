const serverUrl = 'https://api.genderize.io';

const firstName = document.body.querySelector('#text');
const buttonGenderize = document.body.querySelector('#button');
const formGenderize = document.body.querySelector('.form');
const output = document.querySelector('.answer__inner');


formGenderize.addEventListener('submit', getGender);

function getGender(event) {
    event.preventDefault();
    const url = `${serverUrl}?name=${firstName.value}`;
    fetch(url)
        .then(response => response.json())
        .then(obj => correct(obj))
}

function correct(obj) {
    return (obj.gender === null) ? output.textContent = `Probably this name doesn't exist` : output.textContent = obj.gender;
}
