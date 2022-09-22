const serverUrl = 'https://api.genderize.io';
const ELEMENTS = {
    INPUTNAME: document.querySelector('#text'),
    TEXT: document.querySelector('#result'),
    BUTTON: document.querySelector('#button')
};
const nullString = '';

function getNameGender() {
    try {
        const firstName = ELEMENTS.INPUTNAME.value
        if (!firstName) {
            throw new Error("Вы не ввели имя");
        };
        const url = `${serverUrl}?name=${firstName}`;
        fetch(url)
            .then(response => response.json(), error => alert(error))
            .then(function (data) {
                ELEMENTS.TEXT.textContent = `${data.name} is ${data.gender}`;
                if (data.gender === null) {
                    alert('Вы ввели не имя!');
                    ELEMENTS.TEXT.textContent = nullString;
                };
                ELEMENTS.INPUTNAME.value = nullString;
            }, error => alert(error ));
            

        } catch (error) {
        alert(error.message);
    };
};

ELEMENTS.BUTTON.addEventListener('click', getNameGender);
