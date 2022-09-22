const ELEMENTS = {
    FORM: document.querySelector('.field'),
    INPUT: document.querySelector('.add__name'),
    RESULT: document.querySelector('.result')
}

const firstName = ELEMENTS.INPUT.value;
const serverUrl = 'https://api.genderize.io';

ELEMENTS.FORM.addEventListener('submit', function () {
    definitionGender(firstName);
    ELEMENTS.INPUT.value = '';
    ELEMENTS.RESULT.textContent = '';

    event.preventDefault(); 
})
    
function definitionGender (firstName) {
    let empty = '';
    try {
        firstName = ELEMENTS.INPUT.value;
        const name = firstName[0].toUpperCase() + firstName.slice(1);
        const url = `${serverUrl}?name=${firstName}`;

        fetch(url)
        .then(response => response.json())
        .then(result => ELEMENTS.RESULT.textContent = `${name}` + ' is ' + `${result.gender}`);

    } catch(err) {
        if(firstName === empty)  {
            alert('Ошибка: введите имя');
        }
    }
}