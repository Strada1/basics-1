// Если я делаю этот скрипт type="module", у меня отваливаются функции
// chooseNewCity и deleteFromFavorites
// Это из-за того, что весь этот скрипт становится модулем, и
// его скоуп не распространяется на li в функции createTemplate?
// Как это фиксануть, я так и не понял, по этому я не могу изолировать отдельные функции в utils и импортировать их от туда

// import { switchTabs } from './utils.js'

// Elements ...
const searchForm = document.querySelector('.search')
const searchInput = document.querySelector('.search__input')

const locationsList = document.querySelector('.locations-list')

const city = document.querySelector('.details__city-name')
const temperature = document.querySelector('.detail-item__temperature')
const feelsLike = document.querySelector('.detail-item__feels-like')
const weatherCondition = document.querySelector('.detail-item__weather')
const sunrise = document.querySelector('.detail-item__sunrise')
const sunset = document.querySelector('.detail-item__sunset')

const tabsList = document.querySelector('.tabs-list')
const tabs = document.querySelectorAll('.tab-item')

// api's urls
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'

// Default city name
let cityName = city.textContent || 'Aktobe'

function Location(name) {
  this.name = name
  this.isAdded = true
}

// Array for rendering added locations
let addedLocations = []

// Local Storage
function updateLocalStorage() {
  localStorage.setItem('addedLocations', JSON.stringify(addedLocations))
}

!localStorage.addedLocations
  ? (addedLocations = [])
  : (addedLocations = JSON.parse(localStorage.getItem('addedLocations')))

// Template for rendering new location
const createTemplate = (addedLocation, index) => {
  return `
    <li onclick="chooseNewCity('${addedLocation.name}')" class="location-item location-item__favorite">
      <span class="location-item__text">${addedLocation.name}</span>
      <button onclick="deleteFromFavorites(${index})" class="location-item__button">&#9587;</button>
    </li>
  `
}

// Render Added Locations
function renderAddedLocations() {
  locationsList.innerHTML = ''
  if (addedLocations.length > 0) {
    addedLocations.forEach((item, index) => {
      locationsList.innerHTML += createTemplate(item, index)
    })
    locationsElems = document.querySelectorAll('.locationItems')
  }
}

// Delete item from Added Locations (favorites)
function deleteFromFavorites(index) {
  addedLocations[index].isAdded = false
  addedLocations.splice(index, 1)

  updateLocalStorage('addedLocations', addedLocations)
  renderAddedLocations()
  isCityFavorite()
}

// Switch between favorite cities
// I don't know how to implement it without fetching again?
function chooseNewCity(name) {
  fetchWeatherData(name)
}

// Fetch data
async function fetchWeatherData(locationName) {
  const url = `${serverUrl}?q=${locationName}&appid=${apiKey}&units=metric`
  try {
    const response = await fetch(url)
    const { name, main, sys, weather } = await response.json()
    const temp = Math.floor(main.temp)
    const feels = Math.floor(main.feels_like)
    const currentWeather = String(weather[0].main)

    // formatting Date
    const sunriseDate = new Date(sys.sunrise * 1000)
    const sunsetDate = new Date(sys.sunset * 1000)
    let sunriseHours = sunriseDate.getHours()
    let sunsetHours = sunsetDate.getHours()

    let sunriseMinutes = sunriseDate.getMinutes()
    let sunsetMinutes = sunsetDate.getMinutes()

    // Adding 0s when there's none
    if (sunriseHours < 10) {
      sunriseHours = '0' + sunriseHours
    }

    if (sunsetHours < 10) {
      sunsetHours = '0' + sunsetHours
    }

    if (sunriseMinutes < 10) {
      sunriseMinutes = '0' + sunriseMinutes
    }

    if (sunsetMinutes < 10) {
      sunsetMinutes = '0' + sunsetMinutes
    }

    const sunriseAt = `${sunriseHours} : ${sunriseMinutes}`
    const sunsetAt = `${sunsetHours} : ${sunsetMinutes}`

    temperature.innerHTML = `Temperature: ${temp}°`
    city.innerHTML = name
    cityName = locationName = name

    feelsLike.innerHTML = `Feels like: ${feels}°`
    weatherCondition.innerHTML = `Weather: ${currentWeather}`
    sunrise.innerHTML = `Sunrise: ${sunriseAt}`
    sunset.innerHTML = `Sunset: ${sunsetAt}`
  } catch (error) {
    // alert('Такого города не существует!')
    console.error(error.message)
  }
}

// Switching between Now, Details & Forecast
function switchTabs() {
  const activePage = location.pathname
  const navLinks = document.querySelectorAll('nav a').forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.parentNode.classList.add('tab-item--current')
    }
  })
  console.log(activePage)
}
switchTabs()

// Find a city
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!searchInput.value.length) {
    alert('Please type a city name')
  }
  try {
    cityName = searchInput.value
    fetchWeatherData(cityName)
  } catch (error) {
    alert('Ошибка!')
    console.error(error.message)
  }
  searchInput.value = ''
})

// -----------------------on page start---------------------
// render addedLocations initially
renderAddedLocations()
// fetch default city's weather
fetchWeatherData(cityName)
// check is city already in addedLocations
// ---------------------------------------------------------
