const tabs = document.querySelector(".info");
const tabButton = tabs.querySelectorAll(".tabs_item"); 
const contents = tabs.querySelectorAll(".tabs_block"); 
tabs.onclick = e => {
    const id = e.target.dataset.id; 
    if (id) {
        tabButton.forEach(btn =>  btn.classList.remove("active")); 
        contents.forEach(content =>  content.classList.remove("active")); 
        e.target.classList.add("active"); 
        tabs.querySelector('#'+id).classList.add("active"); 
    }
}
const searchButton = document.querySelector('#search_button')
const searchPhrase = document.querySelector('#search')
const temperatureForm = document.querySelector('.temperature')
const temperatureForm2 = document.querySelector('.temperatureTab2')
const feelsLikeForm2 = document.querySelector('.feelsLikeForm2')
const weatherForm2 = document.querySelector('.weatherForm2')
const sunriseForm2 = document.querySelector('.sunriseForm2')
const sunsetForm2 = document.querySelector('.sunsetForm2')
const weatherIcon = document.querySelector('.weather_icon')
const cityForm = document.querySelectorAll('.city')
searchButton.addEventListener('click', startSearch)

async function getWeather(cityName) {
    const serverUrl = '//api.openweathermap.org/data/2.5/weather'
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`
    fetch(url)
      .then(response => response.json())
      .then(chekBase => {
              if(chekBase.cod >= 300)
                throw new Error(chekBase.message)
              else
                render(chekBase)
    })
      .catch(error => document.querySelector('.error').textContent = error.message)
}
  
function startSearch(env) {
    env.preventDefault()
    const citySearchName = searchPhrase.value
    getWeather(citySearchName)
}

function toHumanDate(timestamp) {
    let hours = new Date(timestamp*1000).getHours()
    let minutes = new Date(timestamp*1000).getMinutes()
    return (hours + ':' + minutes)
}

function render(chekBase) {
    const iconsUrl = '//openweathermap.org/img/wn/'
    let city = chekBase.name
    let icon = chekBase.weather[0].icon
    let temp = Math.round(chekBase.main.temp)
    let feelsLike = Math.round(chekBase.main.feels_like)
    let weather = chekBase.weather[0].main
    let sunrise = toHumanDate(chekBase.sys.sunrise)
    let sunset = toHumanDate(chekBase.sys.sunset)

    cityForm.forEach(anyCity => {
        anyCity.textContent = city
    })
    weatherIcon.innerHTML = `<img src="${iconsUrl}${icon}@2x.png" wight='250' height='100'>`
    temperatureForm.innerHTML = `${temp}°`
    temperatureForm2.innerHTML = `Temperature: ${temp}°`
    feelsLikeForm2.innerHTML = `Feels like: ${feelsLike}°`
    weatherForm2.innerHTML = `Weather: ${weather}`
    sunriseForm2.innerHTML = `Sunrise: ${sunrise}`
    sunsetForm2.innerHTML = `Sunset: ${sunset}`
    searchPhrase.value = ``
}
  
function renderFavorites() {
    const favList = document.querySelector('.favorite_list')
    favList.textContent = ''
    for (let city of cities) {
      const li = document.createElement('li')
      li.insertAdjacentHTML('afterbegin', `<span>${city}</span><button id="delButton">×</button>`)
      li.querySelector('#delButton').addEventListener('click', delCity)
      li.addEventListener('click', showFromFavorite)
      favList.append(li)
    }
}

function showFromFavorite(event) {
    city = event.target.textContent
    getWeather(city)
}

function delCity(event, city) {
    event.stopPropagation()
    city = event.target.previousElementSibling.textContent
    let position = cities.findIndex(anyCity => anyCity == city)
    cities.splice(position, 1)
    renderFavorites()
}

function addCity() {
    let city = cityForm[0].textContent
    if (city !== '---'){
        let position = cities.findIndex(anyCity => anyCity == city)
        if (position >= 0) {
            cities.splice(position, 1)
        } else {
            cities.push(city)
        }
    } else {
        throw new Error('Отсутствует город, для добавления')
    }
    renderFavorites()
}

let cities = [ 'Tiraspol', 'Bendery', 'Parcani']  
document.querySelector('#favorite_button').addEventListener('click', addCity)
renderFavorites()
getWeather('Москва')