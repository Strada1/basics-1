async function sendRequest() {
    const serverUrl = 'https://api.genderize.io';
    const firstName = document.querySelector('input').value;
    const url = `${serverUrl}?name=${firstName}`;

    let response = await fetch(url);
    if (response.ok) {
         let result = await response.json();
        alert(`${result.name} is ${result.gender}`);
    }
    else {
        alert('произошла ошибка')
    }
}