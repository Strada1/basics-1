const ELEMENTS = {
    citySearch : document.querySelector('.forecast-form'),
    cityInput : document.querySelector('.city-input'),
    forecastDegrees : document.querySelector('.degrees-num'),
    forecastIcon : document.querySelector('.cloud'),
    forecastCity : document.querySelector('.city-name'),
    iconFavorite : document.querySelector('.like')
}

console.log(ELEMENTS.iconFavorite)
const SERVER = {
    serverUrl : 'http://api.openweathermap.org/data/2.5/weather',
    apiKey : '6ca767a0f89bdb44703b66b9c5240f30',

}

let list = ['Amur', 'Samara', 'Bali', 'Dane', 'Kilo', 'Nur-Sultan'];


//Add city in Now

function cityNow(event, cityName) {
    if(!cityName) {
        cityName = ELEMENTS.cityInput.value;
    }
    if(list.includes(cityName)) {
    document.querySelector('.like svg').classList.add('heart');
    console.log(ELEMENTS.iconFavorite);
    } else {
        document.querySelector('.like svg').classList.remove('heart');
    }

const url = `${SERVER.serverUrl}?q=${cityName}&appid=${SERVER.apiKey}&units=metric`;

fetch(url) 
.then(response => {
    if(response.ok) {
       return response.json()
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
    
    response.json()})
.then(forecast => {
    let degrees = Math.round(forecast.main.temp);
    let icon = forecast.weather[0].icon;

    ELEMENTS.forecastDegrees.textContent = degrees;
    ELEMENTS.forecastCity.textContent = forecast.name;

    ELEMENTS.forecastIcon.removeAttribute('src');
    ELEMENTS.forecastIcon.removeAttribute('width');
    ELEMENTS.forecastIcon.removeAttribute('height');

    ELEMENTS.forecastIcon.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)

})
.catch(err => alert(err));
event.preventDefault();
ELEMENTS.cityInput.value = '';
}


ELEMENTS.citySearch.addEventListener('submit', (event) => {
    cityNow(event);
});


// Add favorite locations

function addFavoriteLocation() {
    if (list.includes(ELEMENTS.forecastCity.textContent)) {
        let newList = list.filter(item => item !== ELEMENTS.forecastCity.textContent);
        newList.push(ELEMENTS.forecastCity.textContent);
        list = newList;
    } else {
        list.push(ELEMENTS.forecastCity.textContent);
    }
    render();

};

// delete favorite location

function deleteFavoriteLocation(city) {
    if (list.includes(city)) {
        let newList = list.filter(item => item !== city);
        list = newList;
        console.log(list)

    }
    render();
};

// Render favorite cities


function render(){
    let delCity = document.querySelectorAll('.locations-items li');
    delCity.forEach((item) => item.remove());
    for (let item of list) {
        addFavoriteHTML(item);
    }
}
render()

function addFavoriteHTML (cityName) {
    const ul = document.querySelector('.locations-items');
    let li = document.createElement('li');
    ul.prepend(li);
    li.addEventListener('click', (event) => {
        cityNow(event, cityName);
    });

    let p = document.createElement('p');
    li.prepend(p);
    p.textContent = cityName;

    let button = document.createElement('button');
    button.classList.add('button-exit');
    li.append(button);
    button.addEventListener('click', () => {
        deleteFavoriteLocation(cityName)
    });
}

ELEMENTS.iconFavorite.addEventListener('click', addFavoriteLocation);

// function changeButtonColor () {
//     document.querySelector('.like svg').classList.add('heart');
//     console.log(ELEMENTS.iconFavorite);
// }

// changeButtonColor()