const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const iconsUrl = 'https://openweathermap.org/img/wn/';




async function OnButtonPress() {
    try {
        const inputCity = document.getElementById('inputName');
        const url = `${serverUrl}?q=${inputCity.value}&appid=${apiKey}`;
        //todo
        let response = await fetch(url);
        let json = await response.json();
        document.getElementById('now_city').innerHTML = `${json.name}`;
        document.getElementById('now_temp').innerHTML = calcCelsiusTemp(json.main.temp) + '&#176';
        let icon = json.weather[0].icon;
        document.getElementById('weatherPic').innerHTML = `<img src=\"${iconsUrl}${icon}@2x.png\" alt="weatherPic">`;
    } catch (error) {
        alert(error.message);
    }
}

let button = document.getElementById('searchButton');
button.onclick = OnButtonPress;

const CITYLIST = new Map();
updateListOfCities();

function updateListOfCities (){
    for (let key in localStorage){
        if (key.startsWith('keyCity$')){
            CITYLIST.set(key, '1');
        }
    }

}


showSavingCities();

function deleteCityFromList(city) {
    let cityKey;
    let localStorageKeys = Object.keys(localStorage);
    for (let key of localStorageKeys){
        if (city === localStorage.getItem(key)){
            cityKey = key;
        }
    }
    CITYLIST.delete(city);
    localStorage.removeItem(cityKey);
    render();
}

function showSavingCities() {
    let sampleForCity = document.getElementById("pattern");
    for (let city of CITYLIST.keys()) {
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


function removeCityList() {
    let allTasks = document.getElementsByClassName('task');
    for (let i = allTasks.length - 1; i >= 0; i--) {
        allTasks[i].remove();
    }
}

function render() {
    removeCityList();
    showSavingCities();
}
function calcCelsiusTemp(temp) {
    return Math.round(temp - 273);
}

function saveFavoriteCities(input){

    const city = document.getElementById(input).textContent;
    alert("city - " + city);
    localStorage.setItem('favoriteCity', city);
    localStorage.setItem(`keyCity${city}`, city);
    for (let key in localStorage) {
        console.log(key);
    }
    CITYLIST.set(city, '1');
    for (let key in CITYLIST.keys()) {
        console.log(key);
    }
    render();
}
