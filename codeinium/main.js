const ELEMENTS = {
    FINDINPUT: document.querySelector("#find-input"),
    FORM: document.querySelector("#find-form"),
    WEATHERICON: document.querySelector("#weather-icon"),
    TEMPERATURE: document.querySelector("#temperature"),
    LOCATION: document.querySelector("#loca")
}
const APIKEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const SERVERURL = 'http://api.openweathermap.org/data/2.5/weather';

function getLocation() {
    const location = ELEMENTS.FINDINPUT.value; 
    return location;
}

function serverLocationRequest(event) {
    event.preventDefault()
    const cityName = getLocation();
    const url = `${SERVERURL}?q=${cityName}&appid=${APIKEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => data)
        .then(function (data) {
            ELEMENTS.WEATHERICON.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            ELEMENTS.TEMPERATURE.textContent = Number(data.main.temp);
            ELEMENTS.LOCATION.textContent = data.name;
        })

        
}
ELEMENTS.FORM.addEventListener('submit', (event) => serverLocationRequest(event))
// const cityName = 'boston';
