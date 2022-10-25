const cityInput = document.querySelector('.forecast-form');
const nameInp = document.querySelector('.inputForm');
const addFavorite = document.querySelector('#favoriteAdd');
const ELEMENTS_PARENTS = {
    weatherCity:document.querySelector('.forecast-months'),
    weatherTemp:document.querySelector('.degrees'),
    favoriteItems:document.querySelector('.locations-items'),
    textHeader:document.querySelector('.locations-header'),
    detailList:document.querySelector('.details-items'),
};
const NEW_ELEMENTS = {
    nameCity:document.createElement('p'),
    tempCity:document.createElement('p'),
    detailsTemp:document.createElement('li'),
    detailsFeelsLike:document.createElement('li'),
    detailsWeather:document.createElement('li'),
    detailsSunrise:document.createElement('li'),
    detailsSunset:document.createElement('li'),
    newCity:document.createElement('p'),
};

//Запрос на сервер
let FAVORITE_CITY = new Set(localGet());
let cityNOW = localGet2()
//LOCALSTORAGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function localSet() {
    localStorage.setItem ('cityNow', JSON.stringify([...FAVORITE_CITY]))
    localStorage.setItem ('cityNeNow', JSON.stringify(cityNOW))
}
function localGet() {
    return JSON.parse(localStorage.getItem('cityNow'));
}
function localGet2() {
    return JSON.parse(localStorage.getItem('cityNeNow'));
}
cityInput.addEventListener('submit' , inputToUrl);
function inputToUrl(event) {
    event.preventDefault();
    serverToDOM(nameInp.value)
}

async function serverToDOM(item) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${item}&appid=${apiKey}&units=metric`;

    const serverINFO = await fetch(url)
    const responseURL = await serverINFO.json()

        if(responseURL.cod !== 200) {
            alert(responseURL.cod + ' ' + responseURL.message)
        } else {
            showCurrentCity(responseURL.name , responseURL.main.temp);
            renderDetails(responseURL.name , responseURL.main.temp , responseURL.main.feels_like, responseURL.weather[0].main, responseURL.sys.sunset, responseURL.sys.sunrise);
        }
};

function showCurrentCity(cityName, cityTemp, ) {
    cityNOW.name = cityName;
    cityNOW.temp = cityTemp;
    NEW_ELEMENTS.nameCity.textContent = cityName;
    ELEMENTS_PARENTS.weatherCity.prepend(NEW_ELEMENTS.nameCity);
    NEW_ELEMENTS.tempCity.textContent = Math.round(cityTemp);
    NEW_ELEMENTS.tempCity.className = 'degrees-num';
    ELEMENTS_PARENTS.weatherTemp.prepend(NEW_ELEMENTS.tempCity);
    nameInp.value = '';
    localSet()
    
};
function renderDetails(cityName, cityTemp, feelsLike, weather, sunset, sunrise) {
    cityNOW.name = cityName;
    cityNOW.temp = cityTemp;
    cityNOW.feelslike = feelsLike;
    cityNOW.weather = weather;
    cityNOW.sunset = sunset;
    cityNOW.sunrise = sunrise;
    const normalDataSunSet = new Date(sunset * 1000);
    const normalDataSunRise = new Date(sunrise * 1000);
        // render city name
        NEW_ELEMENTS.newCity.className = 'text-locations';
        ELEMENTS_PARENTS.textHeader.textContent = '';
        NEW_ELEMENTS.newCity.textContent = cityName;
        ELEMENTS_PARENTS.textHeader.prepend(NEW_ELEMENTS.newCity);
        //Render city details
        ELEMENTS_PARENTS.detailList.textContent = '';
        NEW_ELEMENTS.detailsTemp.textContent = `Temperature: ${Math.round(cityTemp)}°`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsTemp);
        NEW_ELEMENTS.detailsFeelsLike.textContent = `Feels like: ${Math.round(feelsLike)}°`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsFeelsLike);
        NEW_ELEMENTS.detailsWeather.textContent = `Weather: ${weather}`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsWeather);
        NEW_ELEMENTS.detailsSunrise.textContent = `Sunrise: ${normalDataSunRise.toLocaleTimeString()}`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsSunrise);
        NEW_ELEMENTS.detailsSunset.textContent = `Sunset: ${normalDataSunSet.toLocaleTimeString()}`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsSunset);
        localSet()
};
addFavorite.addEventListener('click' , addFavoriteInArray);
function addFavoriteInArray() {
    FAVORITE_CITY.add(NEW_ELEMENTS.newCity.textContent);
    localSet()
    console.log(FAVORITE_CITY)
    renderFavorite()
}
function renderFavorite() {
    ELEMENTS_PARENTS.favoriteItems.textContent = '';
    FAVORITE_CITY.forEach((item) => {
        const newFavoriteCity = document.createElement('li');
        newFavoriteCity.textContent = item;
        ELEMENTS_PARENTS.favoriteItems.prepend(newFavoriteCity);
        const removeCityIcon = document.createElement('button');
        removeCityIcon.innerHTML = `<img src="./img/heart.svg" alt="">`;
        newFavoriteCity.appendChild(removeCityIcon);
        newFavoriteCity.addEventListener('click' , ()=> {
            serverToDOM(item)
        })
        removeCityIcon.addEventListener('click', ()=> {
            deleteFavoriteCity(item)
        })
    })
}
function deleteFavoriteCity(item) {
    FAVORITE_CITY.delete(item);
    localSet()
    console.log(FAVORITE_CITY)
    renderFavorite()
}

// КАНСТРУКТАР ПАПЫТКА
addFavorite.addEventListener('click', () => {
    constr(ELEMENTS_PARENTS.weatherCity.innerText)
})

function constr(name) {
    const cityes = new CityLikes(name);
    console.log(cityes)

    function CityLikes(name) {
        this.name =  name
    }
}

renderFavorite()
showCurrentCity(cityNOW.name , cityNOW.temp)
renderDetails(cityNOW.name , cityNOW.temp, cityNOW.feelslike, cityNOW.weather, cityNOW.sunset, cityNOW.sunrise)
