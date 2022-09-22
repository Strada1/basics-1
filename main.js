function genderize() {

    let name = document.getElementById('name').value;


    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${name}`;

    const promise = fetch(url)
    promise
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            const gender = json.gender;
            document.getElementById('result').innerHTML = name + " is " + gender;
        })
}





