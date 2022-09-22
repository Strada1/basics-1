const inputName = document.querySelector('.input-name');
const newName = document.querySelector('.addName');



function gender (event) {

    let firstName = newName.value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    
    fetch(url)
    .then(response => (response.json()))
    .then(result => alert(`${firstName} is ${result.gender}!`));
    event.preventDefault();
}


inputName.addEventListener ('submit', (event) => { 
    gender (event);  
});



