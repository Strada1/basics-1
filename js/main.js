const form = document.querySelector('.fetch-form');
const nameInput = form.querySelector('.name-input');
const answer = document.querySelector('.answer')
const givenName = answer.querySelector('.given-name');
const gottenGender = answer.querySelector('.gotten-gender');
//

const serverUrl = 'https://api.genderize.io';
form.onsubmit = () => {
    let name = nameInput.value;
    const url = `${serverUrl}?name=${name}`;
    fetch(url)
    .then(response => response.json())
    .then(commits => gottenGender.innerHTML = commits.gender);
    givenName.innerHTML = name;
}