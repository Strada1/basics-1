const tabs = document.querySelector(".info");
const tabButton = tabs.querySelectorAll(".tabs_item"); 
    //берем все кнопки для табов
const contents = tabs.querySelectorAll(".tabs_block"); 
    //берем все табы

tabs.onclick = e => {
    const id = e.target.dataset.id; 
        //берем ид с кликнутой кнопки (data-id)
    if (id) {
        tabButton.forEach(btn =>  btn.classList.remove("active")); 
            //удаляем актив со всех кнопок
        contents.forEach(content =>  content.classList.remove("active")); 
            //и с табов
        e.target.classList.add("active"); 
            //навешиваем актив на кликнутую кнопку
        tabs.querySelector('#'+id).classList.add("active"); 
            //навешиваем класс эктив на нужный таб
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

function startSearch(env) {
    env.preventDefault()
    const citySearchName = searchPhrase.value
    getWeather(citySearchName)
}
  
async function getWeather(cityName) {
    const serverUrl = '//api.openweathermap.org/data/2.5/weather'
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'
    const iconsUrl = '//openweathermap.org/img/wn/'
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`
    
    let response = await fetch(url)
    let chekBase = await response.json()

    let city = chekBase.name
    let icon = chekBase.weather[0].icon
    let temp = Math.round(chekBase.main.temp)
    let feelsLike = Math.round(chekBase.main.feels_like)
    let weather = chekBase.weather[0].main
    let sunrise = `${new Date(chekBase.sys.sunrise*1000).getHours()}:${new Date(chekBase.sys.sunrise*1000).getMinutes()}`
    let sunset = `${new Date(chekBase.sys.sunset*1000).getHours()}:${new Date(chekBase.sys.sunset*1000).getMinutes()}`

    cityForm.forEach(anyCity => {
        anyCity.textContent = city
    })
    weatherIcon.innerHTML = `<img src="${iconsUrl}${icon}@2x.png" wight='250' height='100'>`
    temperatureForm.innerHTML = `${temp}°`
// таб2 - детально
    temperatureForm2.innerHTML = `Temperature: ${temp}°`
    feelsLikeForm2.innerHTML = `Feels like: ${feelsLike}°`
    weatherForm2.innerHTML = `Weather: ${weather}`
    sunriseForm2.innerHTML = `Sunrise: ${sunrise}`
    sunsetForm2.innerHTML = `Sunset: ${sunset}`
// сброс поля ввода
    searchPhrase.value = ``
}

