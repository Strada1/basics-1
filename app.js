const form = document.querySelector('form');
const span = document.querySelector('span');
const input = document.querySelector('input');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const firstName = input.value;
  findYourGender(firstName);
});

function findYourGender(firstName) {
  const serverUrl = 'https://api.genderize.io';
  const url = `${serverUrl}?name=${firstName}`;
  fetch(url)
    .then((data) => data.json())
    .then((data) => (span.textContent = `${data.name} is ${data.gender}`));
}
