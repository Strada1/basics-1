const firstName = document.querySelector(".input-url");
const sendRequest = document.querySelector(".send-request");


function send_Request(event){
    event.preventDefault();

    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName.value}`;

    fetch(url)
        .then((response) => response.json())
        .then((commits) => (  console.log(`${firstName.value} is ${commits.gender}`) ));

}

sendRequest.addEventListener("click", send_Request)