const request = async function(event){
    event.preventDefault();

    const firstName = document.querySelector('#name').value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    let result = await fetch(url);
    if(result.ok){
        let json = await result.json();
        alert(`${firstName} is ${json.gender}`);
    } else{
        alert(new Error(result.status));
    }
}

document.querySelector('#send').onclick = request;