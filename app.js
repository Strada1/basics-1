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

let cityName = 'Aktobe'
let addedLocations = []
let locationsElems = []

// ? USE CLASSES
function Location(name) {
  this.name = name
  this.isAdded = false
}
// -----------------------on page start---------------------
// render addedLocations initially
renderAddedLocations(addedLocations, locationsList)
// fetch default city's weather
fetchWeatherData()
// update storage on every render
updateLocalStorage()
// ---------------------------------------------------------

!localStorage.addedLocations
  ? JSON.stringify(localStorage.setItem('addedLocations', addedLocations))
  : JSON.parse(localStorage.getItem('addedLocations', addedLocations))

window.addEventListener('load', () => {
  like.addEventListener('click', (e) => {
    e.target.classList.toggle('now__city--favorite')
    addedLocations.push(
      new Location(e.target.previousElementSibling.textContent),
    )
    updateLocalStorage()
    renderAddedLocations(addedLocations, locationsList)
  })
})

const createTemplate = (addedLocation, index) => {
  return `
    <li class="location-item location-item__favorite">
      <span class="location-item__text">${addedLocation.name}</span>
      <button onclick="deleteFromFavorites(${index})" class="location-item__button">&#9587;</button>
    </li>
  `
}

function renderAddedLocations(addedLocations, locationsList) {
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
  addedLocations[index].isAdded = !addedLocations[index].isAdded
  if (addedLocations[index].isAdded) {
    locationsElems[index].classList.add('location-item__favorite')
  } else {
    locationsElems[index].classList.remove('location-item__favorite')
  }
  updateLocalStorage('addedLocations', addedLocations)
  fillHtmlList(addedLocations, locationsList)
}

function deleteFromFavorites(index) {
  addedLocations.splice(index, 1)
  updateLocalStorage('addedLocations', addedLocations)
  renderAddedLocations(addedLocations, locationsList)
}

// search for a city
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!searchInput.value.length) {
    alert('Please type a city name')
  } else {
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

// fetch data from the weather API
async function fetchWeatherData() {
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`
  try {
    const response = await fetch(url)
    const data = await response.json()

    const temp = Math.floor(data.main.temp)

    temperature.innerHTML = `${temp}°`
    city.innerHTML = data.name
  } catch (error) {
    alert('Такого города не существует!')
    console.error(error.message)
  }
}
