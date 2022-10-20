const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const iconsUrl = 'https://openweathermap.org/img/wn/';


async function OnButtonPress() {
    try {
        const inputCity = document.getElementById('inputName');
        const url = `${serverUrl}?q=${inputCity.value}&appid=${apiKey}`;
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        document.getElementById('now_city').innerHTML
            = `${json.name}`;
        document.getElementById('now_temp').innerHTML
            = calcCelsiusTemp(json.main.temp) + '&deg';
        let icon = json.weather[0].icon;
        document.getElementById('weatherPic').innerHTML =
            `<img src=\"${iconsUrl}${icon}@2x.png\" alt="weatherPic">`;
        document.getElementById('details__city').innerHTML = `${json.name}`;
        document.getElementById('details__temp').innerHTML =
            `Temperature: ${calcCelsiusTemp(json.main.temp)}&deg`;
        document.getElementById('details__feels_like').innerHTML =
            `Feels like: ${calcCelsiusTemp(json.main.feels_like)}&deg`;
        document.getElementById('details__weather').innerHTML =
            `Weather: ${json.weather[0].main}`;
        document.getElementById('details__sunrise').innerHTML =
            `Sunrise: ${calcTime(json.sys.sunrise)}`;
        document.getElementById('details__sunset').innerHTML =
            `Sunset: ${calcTime(json.sys.sunset)}`;
    } catch (error) {
        alert(error.message);
    }
}

let button = document.getElementById('searchButton');
button.onclick = OnButtonPress;
showSavingCities();
const setOfCity = new Set();
updateListOfCities();

function updateListOfCities() {
    for (let key in localStorage) {
        if (key.startsWith('keyCity')) {

            setOfCity.add(localStorage.getItem(key))
        }
    }
}

function deleteCityFromList(city) {
    let cityKey;
    let localStorageKeys = Object.keys(localStorage);
    for (let key of localStorageKeys) {
        if (city === localStorage.getItem(key)) {
            cityKey = key;
        }
    }
    setOfCity.delete(city);
    console.log("cityKey = " + cityKey);
    localStorage.removeItem(cityKey);
    render();
}

function showSavingCities() {
    let sampleForCity = document.getElementById("pattern");
    for (let city of setOfCity) {
        let newDiv = sampleForCity.cloneNode(true);
        newDiv.className = "task";
        newDiv.removeAttribute('Style');
        newDiv.childNodes[1].innerHTML = city;
        let closeElem = newDiv.childNodes[3];
        closeElem.onclick = () => deleteCityFromList(city);
        let container = document.getElementById('container');
        container.appendChild(newDiv);
    }
}

function saveFavoriteCities(input) {
    const city = document.getElementById(input).textContent;
    alert("city - " + city);
    localStorage.setItem(`keyCity${city}`, city);
    setOfCity.add(city);
    render();
}


function removeCity() {
    let allTasks = document.getElementsByClassName('task');
    for (let i = allTasks.length - 1; i >= 0; i--) {
        allTasks[i].remove();
    }
}

function render() {
    removeCity();
    showSavingCities();
}

function calcTime(time) {
    let date = new Date(time * 1000);
    return date.toLocaleTimeString();
    //return date.getHours() + ':' + date.getMinutes();
}

function calcCelsiusTemp(temp) {
    return Math.round(temp - 273);
}

