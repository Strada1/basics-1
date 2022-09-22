const input = document.querySelector('input');
const button = document.querySelector('button');
const span = document.querySelector('span');
const serverUrl = 'https://api.genderize.io';

button.addEventListener("click", async function() {
    const url = `${serverUrl}?name=${input.value}`;
    const result = await fetch(url);
    const object = await result.json();
    span.textContent = `${input.value} is ${object.gender}`
});
