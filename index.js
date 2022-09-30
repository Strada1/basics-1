// Elements ...
const searchForm = document.querySelector('.search')
const searchInput = document.querySelector('.search__input')

const locationsList = document.querySelector('.locations-list')
const locationItems = document.querySelectorAll('.location-item')

const temperature = document.querySelector('.now__temperature span')
const city = document.querySelector('.now__city-name')
const like = document.querySelector('.now__city--like')

const tabsList = document.querySelector('.tabs-list')
const tabs = document.querySelectorAll('.tab-item')

// api's urls
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'

let cityName = city.textContent || 'Aktobe'
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

like.addEventListener('click', cb)

function cb() {
  addToFavorite()
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

function addToFavorite(index) {
  // addedLocations[index].isAdded = !addedLocations[index].isAdded
  // if (addedLocations[index].isAdded) {
  //   locationsElems[index].classList.add('location-item__favorite')
  //   // like.removeEventListener('click', cb)
  // } else {
  //   locationsElems[index].classList.remove('location-item__favorite')
  // }
  // updateLocalStorage('addedLocations', addedLocations)
  // fillHtmlList()

  like.classList.add('now__city--favorite')
  addedLocations.push(new Location(cityName))
  updateLocalStorage()
  renderAddedLocations()
  isAdded()
}

function deleteFromFavorites(index) {
  like.classList.remove('now__city--favorite')

  addedLocations[index].isAdded = false
  addedLocations.splice(index, 1)

  updateLocalStorage('addedLocations', addedLocations)
  renderAddedLocations()
  isAdded()
}

function chooseNewCity(name) {
  fetchByName(name)
}

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
  isAdded()
})

// fetch data from the weather API
async function fetchWeatherData() {
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`
  try {
    const response = await fetch(url)
    const data = await response.json()

    const temp = Math.floor(data.main.temp)
    const feelsLike = Math.floor(data.main.feels_like)
    const weather = String(data.weather[0].main)

    temperature.innerHTML = `${temp}°`
    city.innerHTML = data.name
  } catch (error) {
    alert('Такого города не существует!')
    console.error(error.message)
  }
}

function isAdded() {
  const cityInLocations = addedLocations.some((loc) => loc.name === cityName)

  if (cityInLocations) {
    like.classList.add('now__city--favorite')
    like.removeEventListener('click', cb)
  } else {
    like.classList.remove('now__city--favorite')
    like.addEventListener('click', cb)
  }
}

// like.classList.add('now__city--favorite')
// -----------------------on page start---------------------
// render addedLocations initially
renderAddedLocations()
// fetch default city's weather
fetchWeatherData()
// check is city already in addedLocations
isAdded()
// ---------------------------------------------------------

// fetch data by name
async function fetchByName(name) {
  const url = `${serverUrl}?q=${name}&appid=${apiKey}&units=metric`
  try {
    const response = await fetch(url)
    const data = await response.json()
    const temp = Math.floor(data.main.temp)
    temperature.innerHTML = `${temp}°`
    city.innerHTML = data.name
  } catch (error) {
    alert('error!')
    console.error(error.message)
  }
}

// !switching between tabs
const activePage = location.pathname
const navLinks = document.querySelectorAll('nav a').forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.parentNode.classList.add('tab-item--current')
    // link.classList.add('tab-item--current')
  }
})
console.log(activePage)
