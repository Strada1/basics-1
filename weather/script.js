const cityInput = document.querySelector('.forecast-form')
const nameInp = document.querySelector('.inputForm')
const addFavorite = document.querySelector('#favoriteAdd')
const NEW_ELEMENTS = {
    weatherCity:document.querySelector('.forecast-months'),
    nameCity:document.createElement('p'),
    weatherTemp:document.querySelector('.degrees'),
    tempCity:document.createElement('p'),
}
const CITY_NAME = {}
const FAVORITE_CITY = []

cityInput.addEventListener('submit' , (event) => {
    event.preventDefault();
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = nameInp.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        if(response.cod !== 200) {
            alert(response.cod + ' ' + response.message)
        } else {
            showCurrentCity(response.name , response.main.temp)
        }
    })
    .catch(err => alert(err.message))
})
// Отображение городда в NOW
function showCurrentCity(cityName, cityTemp) {
    CITY_NAME.name = cityName;
    CITY_NAME.temp = cityTemp;
    NEW_ELEMENTS.nameCity.textContent = cityName
    NEW_ELEMENTS.weatherCity.prepend(NEW_ELEMENTS.nameCity)
    NEW_ELEMENTS.tempCity.textContent = Math.round(cityTemp)
    NEW_ELEMENTS.tempCity.className = 'degrees-num'
    NEW_ELEMENTS.weatherTemp.prepend(NEW_ELEMENTS.tempCity)
}
// Добавление города в избранные (массив)
addFavorite.addEventListener('click' , addFavoriteInArray)

function addFavoriteInArray() {
    let favoriteCity = FAVORITE_CITY.find(item => item.name == CITY_NAME.name)
    if(FAVORITE_CITY.includes(favoriteCity)) {
        alert('Такой город уже в избранных!')
    } else {
        FAVORITE_CITY.push({name: CITY_NAME.name,temp: CITY_NAME.temp,})
        console.log(FAVORITE_CITY)
        render()
    }
}
// Удаление города из массива 
function deleteCityArray(cityName) {
    let CityFavorite = FAVORITE_CITY.findIndex(item => item.name == cityName)
    FAVORITE_CITY.splice(CityFavorite , 1)
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
            showCurrentCity(item.name, item.temp)
        })
    })
}

