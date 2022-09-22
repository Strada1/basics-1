const button = document.getElementById('button');
let firstName = '';
const serverUrl = 'https://api.genderize.io';
button.addEventListener('click', (event) => {
    firstName = document.getElementById('name').value;
    const url = `${serverUrl}?name=${firstName}`;

    fetch(url)
        .then(function (response) {
            if (response.status !== 200) {
              return Promise.reject(new Error(response.statusText))
            }
            return Promise.resolve(response)
          })
        .then((response) => response.json())
        .then((commits) => alert(commits.gender));
});

