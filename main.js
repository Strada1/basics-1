const form = document.querySelector('#form');
const input = document.querySelector('#input');


form.addEventListener('submit',async (event) => {
  event.preventDefault();

  const firstName = `${input.value}`;
  const serverUrl = 'https://api.genderize.io';
  const url = `${serverUrl}?name=${firstName}`;

  const response = await fetch(url, {
    method: 'GET',
  });

  if (response.ok) {
    let result = await response.json();
    console.log('te', result.gender);
  }

})