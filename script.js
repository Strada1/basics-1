const serverUrl = 'https://api.genderize.io';

async function takeGender() {

    const serverUrl = 'https://api.genderize.io';

    firstName = document.mainForm.name.value;
    let url = `${serverUrl}?name=${firstName}`;

    let response = await fetch(url);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)       
        let json = await response.json();
        document.mainForm.res.value = json.gender;
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}
