const ELEMENTS = {
    forecast_form : document.querySelector('.forecast-form'),
    city_Input : document.querySelector('.city-input'),
    forecast_Degrees : document.querySelector('.degrees-num'),
    forecast_Icon : document.querySelector('.cloud'),
    forecast_City : document.querySelector('.city-name'),
};

const allFavCities = [ 
    { name: 'Amur' },
    { name: 'Samara' },
    { name: 'Bali' },
    { name: 'Dane' },
    { name: 'Kilo' },
    { name: 'Nur-Sultan' },
];

const heartIcon = document.querySelector('.heart');
const locationsItems = document.querySelector('.locations-items');


const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 

ELEMENTS.forecast_form.addEventListener('submit', (event) => {
    const cityName = ELEMENTS.city_Input.value;
    publishWeather(cityName);
    event.preventDefault();
    ELEMENTS.city_Input.value = '';
})

heartIcon.addEventListener('click', (event) => {
    const nameNewFavCity = document.querySelector('.city-name');
    allFavCities.push({ name: `${nameNewFavCity.textContent}`})
    showList()
    event.preventDefault();
});

locationsItems.addEventListener('click', (event) => {
    const dlt_btns = document.querySelectorAll('.dlt_btn');
    for (let dlt_btn of dlt_btns) {
        if (event.target === dlt_btn) {
            deleteCity(event.target.parentNode.textContent);
        } else {
            for (let city of allFavCities) {
                if (event.target.textContent === city.name) {
                    publishWeather(event.target.textContent);
                };
            };
        };
    };
    showList()
    event.preventDefault();
});

function deleteCity(cityName) {
    for (let i = 0; i < allFavCities.length; i++) {
        if (allFavCities[i].name === cityName.trim()) {
            allFavCities.splice(i, 1);
        };
    };
    showList();
};

function showList() {
    let addedCities = document.querySelectorAll('.addedCities');
    addedCities.forEach((city) => {
        city.remove();
    });
    for (let city of allFavCities) {
            locationsItems.insertAdjacentHTML('beforeend', `<li class="addedCities">${city.name}<button class="dlt_btn"></button></li>`)
    };
};

function publishWeather(cityName) {
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
            response.json()})
        .then(forecast => {
            console.log(forecast)
            let degrees = Math.round(forecast.main.temp);
            let icon = forecast.weather[0].icon;
            
            ELEMENTS.forecast_Degrees.textContent = degrees;
            ELEMENTS.forecast_City.textContent = forecast.name;
            ELEMENTS.forecast_Icon.removeAttribute('src');
            ELEMENTS.forecast_Icon.removeAttribute('width');
            ELEMENTS.forecast_Icon.removeAttribute('height');
            ELEMENTS.forecast_Icon.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
    
        })
        .catch(err => alert(err));
};

showList();