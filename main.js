
const form = document.querySelector('.form');
const input = document.querySelector('.name__input');
const output = document.querySelector('.answer__inner');

const firstName = input;
const serverUrl = 'https://api.genderize.io';

form.addEventListener('submit', getGender);

function getGender(event) {
    event.preventDefault();
    const url = `${serverUrl}?name=${firstName.value}`;
    fetch(url).then(
        function (response) {
            const json = response.json().then(
                function (obj) {
                    output.innerHTML = obj.gender;
                }
            );
        }
    );
}





