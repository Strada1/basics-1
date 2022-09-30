const cityInput = document.querySelector('.forecast-form')
const nameInp = document.querySelector('.inputForm')
const addFavorite = document.querySelector('#favoriteAdd')
const NEW_ELEMENTS = {
    weatherCity:document.querySelector('.forecast-months'),
    nameCity:document.createElement('p'),
    weatherTemp:document.querySelector('.degrees'),
    tempCity:document.createElement('p'),
}
const DETAILS = {
    textHeader:document.querySelector('.locations-header'),
    detailList:document.querySelector('.details-items'),
}
const CITY_NAME = localGet2()
const FAVORITE_CITY = localGet();

cityInput.addEventListener('submit' , (event) => {
    event.preventDefault();
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = nameInp.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(response => {
        if(response.cod !== 200) {
            alert(response.cod + ' ' + response.message)
        } else {
            showCurrentCity(response.name , response.main.temp , response.main.feels_like, response.weather[0].main, response.sys.sunset, response.sys.sunrise)
            renderDetails()
        }
    })
    .catch(err => alert(err.message))
})
// localStorage Added Locations
function localSet() {
    localStorage.setItem('cityNow', JSON.stringify(CITY_NAME))
    localStorage.setItem('favoriteCity' , JSON.stringify(FAVORITE_CITY))
}

function localGet() {
    if(localStorage.getItem('favoriteCity') !== null) {
        return JSON.parse(localStorage.getItem('favoriteCity'))
    }  else {
        return []
    }
}
function localGet2() {
    if(localStorage.getItem('cityNow') !== null) {
        return JSON.parse(localStorage.getItem('cityNow'))
    }  else {
        return []
    }
}
// Вкладка Details
function renderDetails() {
    // render city name
    const newCity = document.createElement('p')
    newCity.className = 'text-locations'
    DETAILS.textHeader.textContent = ''
    newCity.textContent = CITY_NAME.name
    DETAILS.textHeader.prepend(newCity)
    //Render city details
    const normalDataSunSet = new Date(CITY_NAME.sunset * 1000)
    const normalDataSunRise = new Date(CITY_NAME.sunrise * 1000)
    const detailsTemp = document.createElement('li')
    const detailsFeelsLike = document.createElement('li')
    const detailsWeather = document.createElement('li')
    const detailsSunrise = document.createElement('li')
    const detailsSunset = document.createElement('li')
    DETAILS.detailList.textContent = ''
    detailsTemp.textContent = `Temperature: ${Math.round(CITY_NAME.temp)}°`
    DETAILS.detailList.append(detailsTemp)
    detailsFeelsLike.textContent = `Feels like: ${Math.round(CITY_NAME.feelslike)}°`
    DETAILS.detailList.append(detailsFeelsLike)
    detailsWeather.textContent = `Weather: ${CITY_NAME.weather}`
    DETAILS.detailList.append(detailsWeather)
    detailsSunrise.textContent = `Sunrise: ${normalDataSunRise.toLocaleTimeString()}`
    DETAILS.detailList.append(detailsSunrise)
    detailsSunset.textContent = `Sunset: ${normalDataSunSet.toLocaleTimeString()}`
    DETAILS.detailList.append(detailsSunset)
}
// Отображение города в NOW
function showCurrentCity(cityName, cityTemp, cityFeel, cityWeather, citySunSet, citySunRise) {
    CITY_NAME.name =cityName
    CITY_NAME.temp = cityTemp
    CITY_NAME.feelslike = cityFeel;
    CITY_NAME.weather = cityWeather;
    CITY_NAME.sunset = citySunSet;
    CITY_NAME.sunrise = citySunRise;
    NEW_ELEMENTS.nameCity.textContent = cityName
    NEW_ELEMENTS.weatherCity.prepend(NEW_ELEMENTS.nameCity)
    NEW_ELEMENTS.tempCity.textContent = Math.round(cityTemp)
    NEW_ELEMENTS.tempCity.className = 'degrees-num'
    NEW_ELEMENTS.weatherTemp.prepend(NEW_ELEMENTS.tempCity)
    nameInp.value = ''
    localSet()
}
nameInp.textContent = ''
// Добавление города в избранные (массив)
addFavorite.addEventListener('click' , addFavoriteInArray)

function addFavoriteInArray() {
    let favoriteCity = FAVORITE_CITY.find(item => item.name == CITY_NAME.name)
    if(FAVORITE_CITY.includes(favoriteCity)) {
        alert('Такой город уже в избранных!')
    } else {
        FAVORITE_CITY.push({name: CITY_NAME.name,temp: CITY_NAME.temp, feelslike: CITY_NAME.feelslike, weather: CITY_NAME.weather,sunset: CITY_NAME.sunset, sunrise:CITY_NAME.sunrise,})
        localSet()
        render()
        
    }
}
// Удаление города из массива 
function deleteCityArray(cityName) {
    let CityFavorite = FAVORITE_CITY.findIndex(item => item.name == cityName)
    FAVORITE_CITY.splice(CityFavorite , 1)
    localSet()
    render()
}
// Добавление городов из массива в вёрстку
function render() {
    let favoriteItems = document.querySelector('.locations-items');
    favoriteItems.textContent = '';
    FAVORITE_CITY.forEach(function(item) {  
        let newFavoriteCity = document.createElement('li');
        newFavoriteCity.textContent = item.name
        favoriteItems.prepend(newFavoriteCity)
        let removeCityIcon = document.createElement('button')
        removeCityIcon.innerHTML = `<img src="./img/heart.svg" alt="">`
        newFavoriteCity.appendChild(removeCityIcon)
        removeCityIcon.addEventListener('click' , () => {
            deleteCityArray(newFavoriteCity.textContent)
        })
        newFavoriteCity.addEventListener('click', () => {
            showCurrentCity(item.name, item.temp, item.feelslike, item.weather, item.sunset, item.sunrise)
            renderDetails()
        })
    })
}
window.onload = render()
window.onload = renderDetails()
window.onload = showCurrentCity(CITY_NAME.name, CITY_NAME.temp, CITY_NAME.feelslike, CITY_NAME.weather,CITY_NAME.sunset , CITY_NAME.sunrise)