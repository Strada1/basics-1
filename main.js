const btn = document.querySelector('#btn');
const FIRST_NAME = document.querySelector('#input').value;
const SERVER_URL = 'https://api.genderize.io';
const URL = `${SERVER_URL}?name=${FIRST_NAME}`;
btn.addEventListener('click', function () {
  fetch(URL)
    .then((response) => response.json())
    .then((commits) => alert(commits.gender));
});
