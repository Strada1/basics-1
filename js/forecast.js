// alert('Work in progress!')
// Elements ...
const searchForm = document.querySelector('.search')
const searchInput = document.querySelector('.search__input')

const locationsList = document.querySelector('.locations-list')
const locationItems = document.querySelectorAll('.location-item')

// details' items
const city = document.querySelector('.details__city-name')
const temperature = document.querySelector('.detail-item__temperature')
const feelsLike = document.querySelector('.detail-item__feels-like')
const weather = document.querySelector('.detail-item__weather')
const sunrise = document.querySelector('.detail-item__sunrise')
const sunset = document.querySelector('.detail-item__sunset')

const tabsList = document.querySelector('.tabs-list')
const tabs = document.querySelectorAll('.tab-item')

// api's urls
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'

let cityName = city.textContent || 'Aktobe'
// fetch data from the weather API
async function fetchWeatherData() {
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`
  try {
    const response = await fetch(url)
    const data = await response.json()

    const temp = Math.floor(data.main.temp)
    const feels = Math.floor(data.main.feels_like)
    const currentWeather = String(data.weather[0].main)

    // formatting Date
    const sunriseDate = new Date(data.sys.sunrise * 1000)
    const sunsetDate = new Date(data.sys.sunset * 1000)
    let sunriseHours = sunriseDate.getHours()
    let sunsetHours = sunsetDate.getHours()

    let sunriseMinutes = sunriseDate.getMinutes()
    let sunsetMinutes = sunsetDate.getMinutes()

    // adding 0 when there's none
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

    city.innerHTML = data.name
    temperature.innerHTML = `Temperature: ${temp}°`
    feelsLike.innerHTML = `Feels like: ${feels}°`
    weather.innerHTML = `Weather: ${currentWeather}`
    sunrise.innerHTML = `Sunrise: ${sunriseAt}`
    sunset.innerHTML = `Sunset: ${sunsetAt}`
  } catch (error) {
    // alert('Такого города не существует!')
    console.error(error.message)
  }
}

fetchWeatherData()

// search for a city
// searchForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   if (!searchInput.value.length) {
//     alert('Please type a city name')
//   } else {
//     // !city name must derive from fetch data.name
//     // cityName = fetchWeatherData().name
//     cityName = searchInput.value
//     try {
//       fetchWeatherData()
//     } catch (error) {
//       alert('Ошибка!')
//       console.error(error.message)
//     }
//     searchInput.value = ''
//   }
// })

// !switching between tabs
const activePage = location.pathname
const navLinks = document.querySelectorAll('nav a').forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.parentNode.classList.add('tab-item--current')
    // link.classList.add('tab-item--current')
  }
})
console.log(activePage)

// added locations
let addedLocations = []
let locationsElems = []

// add switch between added cities functionality

!localStorage.addedLocations
  ? (addedLocations = [])
  : (addedLocations = JSON.parse(localStorage.getItem('addedLocations')))

function Location(name) {
  this.name = name
  this.isAdded = true
}

const createTemplate = (addedLocation, index) => {
  return `
    <li onclick="chooseNewCity('${addedLocation.name}')" class="location-item location-item__favorite">
      <span class="location-item__text">${addedLocation.name}</span>
      <button onclick="deleteFromFavorites(${index})" class="location-item__button">&#9587;</button>
    </li>
  `
}

function renderAddedLocations() {
  locationsList.innerHTML = ''
  if (addedLocations.length > 0) {
    addedLocations.forEach((item, index) => {
      locationsList.innerHTML += createTemplate(item, index)
    })
    locationsElems = document.querySelectorAll('.locationItems')
  }
}

// Local Storage
function updateLocalStorage() {
  localStorage.setItem('addedLocations', JSON.stringify(addedLocations))
}

function deleteFromFavorites(index) {
  addedLocations[index].isAdded = false
  addedLocations.splice(index, 1)

  updateLocalStorage('addedLocations', addedLocations)
  renderAddedLocations()
  isAdded()
}

function chooseNewCity(name) {
  fetchByName(name)
}

// fetch data by name
async function fetchByName(name) {
  const url = `${serverUrl}?q=${name}&appid=${apiKey}&units=metric`
  try {
    const response = await fetch(url)
    const data = await response.json()

    const temp = Math.floor(data.main.temp)
    const feels = Math.floor(data.main.feels_like)
    const currentWeather = String(data.weather[0].main)

    // formatting Date
    const sunriseDate = new Date(data.sys.sunrise * 1000)
    const sunsetDate = new Date(data.sys.sunset * 1000)
    let sunriseHours = sunriseDate.getHours()
    let sunsetHours = sunsetDate.getHours()

    let sunriseMinutes = sunriseDate.getMinutes()
    let sunsetMinutes = sunsetDate.getMinutes()

    // adding 0 when there's none
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

    city.innerHTML = data.name
    temperature.innerHTML = `Temperature: ${temp}°`
    feelsLike.innerHTML = `Feels like: ${feels}°`
    weather.innerHTML = `Weather: ${currentWeather}`
    sunrise.innerHTML = `Sunrise: ${sunriseAt}`
    sunset.innerHTML = `Sunset: ${sunsetAt}`
  } catch (error) {
    alert('error!')
    console.error(error.message)
  }
}

// -----------------------on page start---------------------
// render addedLocations initially
renderAddedLocations()
// fetch default city's weather
fetchWeatherData()
// check is city already in addedLocations
// ---------------------------------------------------------

// search for a city
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!searchInput.value.length) {
    alert('Please type a city name')
  } else {
    // !city name must derive from fetch data.name
    // cityName = fetchWeatherData().name
    cityName = searchInput.value
    try {
      fetchWeatherData()
    } catch (error) {
      alert('Ошибка!')
      console.error(error.message)
    }
    searchInput.value = ''
  }
})
