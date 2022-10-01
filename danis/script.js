const tabs = document.querySelectorAll('.tab_item');
const tabsContent = document.querySelectorAll('.weather__forecast-main');
const form = document.querySelector('form');
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const input = document.querySelector('.search__city');
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const nowTemperature = document.querySelector('.count-temperature');
const nowTemperatureDetails = document.querySelector('.count-temperature-text span');
const nowNameCity = document.querySelector('.name_city');
const parentForImage = document.querySelector('.image__wather');
const addedButton = document.querySelector('.button__add_favorites-city');
const parentFavoriteCity = document.querySelector('.weather__forecast-list');
const nameCityDetails = document.querySelector('.name_city_details');
const feelsLikeDetails = document.querySelector('.feels-like span');
const wheather = document.querySelector('.wheather span');
const sunrice = document.querySelector('.sunrice span');
const sunset = document.querySelector('.sunset span');

let result = '';

for (let i = 0; i < tabs.length; i++) {
    tabs[0].classList.add('active');
    tabsContent[0].classList.add('active');
    tabs[i].addEventListener("click", function () {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active');
            tabsContent[j].classList.remove('active');
        }
        tabs[i].classList.add('active');
        tabsContent[i].classList.add('active');
    });
}

form.addEventListener("submit", function () {
    showThisCity(input.value);
});


addedButton.addEventListener("click", function () {
    addedFavoriteCity(nowNameCity.innerHTML);
    addedCityToLocalStorage(nowNameCity.innerHTML);
});

list = JSON.parse(localStorage.getItem("favoritesCity"));

function addedCityToLocalStorage(nameCity) {
    list.push({ 'name': nameCity });
    localStorage.setItem('favoritesCity', JSON.stringify(list));
    result = JSON.parse(localStorage.getItem("favoritesCity"));
}




function render() {
    parentFavoriteCity.innerHTML = "";
    result = JSON.parse(localStorage.getItem("favoritesCity"));
    for (let key in result) {
        addedFavoriteCity(result[key].name)
    }
    if (result[0]) {
        showThisCity(result[0].name);
    }
}

render();




function addedFavoriteCity(nameCity) {
    const myDiv = document.createElement('div');
    const parentContainer = document.createElement('div');
    const deleteCity = document.createElement('button');
    parentContainer.className = 'city__item';
    myDiv.textContent = nameCity;
    deleteCity.textContent = 'x';
    myDiv.addEventListener("click", function () {
        showThisCity(nameCity);
        result.forEach(function (item, index) {
            if (item.name == nameCity) {
                result.splice(index, 1)
                result.unshift(item);
            }
            localStorage.setItem('favoritesCity', JSON.stringify(result));
            result = JSON.parse(localStorage.getItem("favoritesCity"));
        })
    })

    deleteCity.addEventListener("click", function () {
        parentContainer.remove();
        result = result.map(function (name, index) {
            if (name.name == nameCity) {
                localStorage.removeItem(nameCity);
                result.splice(index, 1);
                localStorage.setItem('favoritesCity', JSON.stringify(result));
                result = JSON.parse(localStorage.getItem("favoritesCity"));
            } else {
                return name;
            }
        });
        render();
    });
    parentFavoriteCity.append(parentContainer);
    parentContainer.append(myDiv);
    parentContainer.append(deleteCity);
}


function showThisCity(nameCity) {
    const url = `${serverUrl}?q=${nameCity}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(function (result) {
            return result.json();
        }).then(function (result) {
            sunrice.textContent = new Date(result.sys.sunrise * 1000).toLocaleTimeString('en-US');
            sunset.textContent = new Date(result.sys.sunset * 1000).toLocaleTimeString('en-US');
            nowTemperature.textContent = Math.round(result.main.temp);
            nowTemperatureDetails.textContent = Math.round(result.main.temp);
            feelsLikeDetails.textContent = Math.round(result.main.feels_like);
            wheather.textContent = result.weather[0].main;
            nowNameCity.textContent = nameCity;
            nameCityDetails.textContent = nameCity;
            const img = document.createElement('img');
            img.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
            parentForImage.innerHTML = "";
            parentForImage.append(img);
        }).catch(function (err) {
            alert(err.message);
        })
}




