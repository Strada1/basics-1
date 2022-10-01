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
const locationItems = document.querySelectorAll('.location-item')

const temperature = document.querySelector('.now__temperature span')
const city = document.querySelector('.now__city-name')
const like = document.querySelector('.now__city--like')

// api's urls
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'

// The location we're creating when adding / deleting from local storage
function Location(name) {
  this.name = name
  this.isAdded = true
}

// Default city name
let cityName = city.textContent || 'Aktobe'

// Array for rendering added locations
let addedLocations = []

// Local Storage
!localStorage.addedLocations
  ? (addedLocations = [])
  : (addedLocations = JSON.parse(localStorage.getItem('addedLocations')))

function updateLocalStorage() {
  localStorage.setItem('addedLocations', JSON.stringify(addedLocations))
}

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
  }
}

// Add city to favorites (Added Locations)
function addToFavorites() {
  like.classList.add('now__city--favorite')
  addedLocations.push(new Location(cityName))
  updateLocalStorage()
  renderAddedLocations()
  isCityInAddedLocations()
}

// Delete item from Added Locations (favorites)
function deleteFromFavorites(index) {
  // Sometimes the code below won't work, why?
  like.classList.remove('now__city--favorite')

  addedLocations[index].isAdded = false
  addedLocations.splice(index, 1)

  updateLocalStorage('addedLocations', addedLocations)
  renderAddedLocations()
  isCityInAddedLocations()
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
    const { main, name } = await response.json()
    const temp = Math.floor(main.temp)

    temperature.innerHTML = `${temp}°`
    city.innerHTML = name
    cityName = locationName = name
  } catch (error) {
    alert('Такого города не существует!')
    console.error(error.message)
  }
}

// Chech whether a city is already in Added Locations array
function isCityInAddedLocations() {
  const cityInLocations = addedLocations.some((loc) => loc.name === cityName)

  // If it's added:
  if (cityInLocations) {
    // Keep the like button active
    like.classList.add('now__city--favorite')
    // You can't add this city again (it's already in favorites)
    like.removeEventListener('click', addToFavorites)
  } else {
    like.classList.remove('now__city--favorite')
    like.addEventListener('click', addToFavorites)
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

like.addEventListener('click', addToFavorites)

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

  isCityInAddedLocations()
})

// -----------------------on page start---------------------
// render addedLocations initially
renderAddedLocations()
// fetch default city's weather
fetchWeatherData(cityName)
// check is city already in addedLocations
isCityInAddedLocations()
// ---------------------------------------------------------
