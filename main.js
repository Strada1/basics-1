const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const iconsUrl = 'https://openweathermap.org/img/wn/';


function calcCelsiusTemp(temp) {
    return Math.round(temp-273);
}

async function OnButtonPress() {

    try {

        const inputCity = document.getElementById('inputName');

        const url = `${serverUrl}?q=${inputCity.value}&appid=${apiKey}`;
        let response = await fetch(url);
        let json = await response.json();

        document.getElementById('now_city').innerHTML = `${json.name}`;
        document.getElementById('now_temp').innerHTML = calcCelsiusTemp(json.main.temp) + '&#176';


        let icon = json.weather[0].icon;
        document.getElementById('weatherPic').innerHTML = `<img src=\"${iconsUrl}${icon}@2x.png\" alt="weatherPic">`;
    }
    catch(error) {
        alert(error.message);
    }
}

let button = document.getElementById('searchButton');
button.onclick = OnButtonPress;

