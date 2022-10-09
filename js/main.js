import { dateToHHMM } from "./dateConverter.js";
import { favoriteRender, favouriteAdd, favouriteRemove } from "./favouriteList.js";
import { localSave, setCurrentCity, stringToArrayer } from "./localStorage.js";

// SERVER
const searchForm = document.querySelector('.search-form');
const searchButton = searchForm.querySelector('.search-button');
const searchInput = searchForm.querySelector('.search-input');
// FAVOURITE LIST
const favList = ['Tashkent', 'Katowice'];
// ELEMS
const tabs = document.querySelectorAll('.tab');
const tabChoices = document.querySelectorAll('.choice-item');
const favourite = document.querySelector('.favourite__city');
const favButton = document.querySelector('.favourite-button');
const favIcon = favButton.querySelector('.favourite-icon');
const locations = document.querySelector('.app__locations');
//search
const searcher = (cityName) => {
    setCurrentCity(cityName);
    favButton.style.display = 'block';
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'ca481ceb6d124487feabc2fa83c207c2';
    searchInput.value = '';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    const degree = document.querySelector('.now__degree');
    const icon = document.querySelector('.now__weather-icon');
    //-> details-tab
    const detCity = document.querySelector('.details__city');
    const temperature = document.querySelector('span.temperature');
    const feelsLike = document.querySelector('span.feels-like');
    const weather = document.querySelector('span.weather');
    const sunrise = document.querySelector('span.sunrise');
    const sunset = document.querySelector('span.sunset');
    fetch(url).then(response => response.json())
    .then(result => {
        if (result.cod == 404) {
            throw new Error('City not found')
        }
        if (result.cod == 400) {
            throw new Error('Bad request (type city)')
        }
        console.log(result);
        degree.innerHTML = `${Math.trunc(result.main.temp - 273)}&deg`;
        searchInput.placeholder =  result.name;
        favourite.innerHTML = result.name;
        icon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
        // console.log(icon.src);
        detCity.innerHTML = result.name;
        temperature.innerHTML = `${Math.trunc(result.main.temp - 273)}&deg`
        feelsLike.innerHTML = `${Math.trunc(result.main.feels_like - 273)}&deg`
        weather.innerHTML = result.weather[0].main;
        sunrise.innerHTML = dateToHHMM(result.sys.sunrise);
        sunset.innerHTML = dateToHHMM(result.sys.sunset);
        // removing favButton check if the new city is not in the list
        if (!favList.includes(favourite.innerHTML)) {
            favIcon.classList.remove('favourited'); 
        }
        // the same but opposite
        if (favList.includes(favourite.innerHTML)) {
            favIcon.classList.add('favourited'); 
        }
        // console.log(favourite.innerHTML)
    }).catch(error => {
        alert(error.name + ': ' + error.message)
    })
}
searchForm.onsubmit = () => {
    let cityName = searchInput.value;
    searcher(cityName)
}
//tab changer
tabChoices.forEach((btn,index) => {
    btn.addEventListener('click', () => {
        tabChoices.forEach(btn => btn.classList.remove('choice-item__active'));
        tabChoices[index].classList.add('choice-item__active');
        tabs.forEach(tab => tab.classList.remove('tab__active'));
        tabs[index].classList.add('tab__active');
    })
})
//add to / remove from _favourites
favButton.addEventListener('click', () => {
    favIcon.classList.toggle('favourited');
    if (favIcon.classList.contains('favourited')) {
        favouriteAdd(favList, favourite.innerHTML);
        favoriteRender(favList);
        localSave('favourite', favList)
    }
    if (!favIcon.classList.contains('favourited')) {
        favouriteRemove(favList, favourite.innerHTML);
        favoriteRender(favList);
        localSave('favourite', favList)
    }
})
locations.addEventListener('click', (e) => {
    if (e.target.classList.contains('locations__item-close-img')) {
        let city = e.target.closest('button').previousSibling.innerHTML;
        if (favourite.innerHTML == city) favIcon.classList.remove('favourited');
        favouriteRemove(favList, city);
        favoriteRender(favList);
        localSave('favourite', favList)
    }
    if (e.target.classList.contains('locations__button')) searcher(e.target.innerHTML);
})


// FIRST RUN
for (let item of stringToArrayer(localStorage.getItem('favourite'))) {
    favouriteAdd(favList, item);
}
favoriteRender(favList);
if (localStorage.getItem('currentCity') != null) searcher(localStorage.getItem('currentCity'))
