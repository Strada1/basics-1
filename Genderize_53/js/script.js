const outPut = document.querySelector('.default');
const btn = document.querySelector('.btn');
const inputUser = document.querySelector('.userInput');
const form = document.querySelector('form');
const serverUrl = 'https://api.genderize.io';
form.addEventListener('submit', e => e.preventDefault());

function Genderize() {
  let firstName = inputUser.value;
  if (firstName) {
    const url = `${serverUrl}?name=${firstName}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        outPut.textContent = `${data.name} is ${
          data.gender ? data.gender : 'Unknown'
        }`;
      });
  }
}

btn.addEventListener('click', Genderize);
