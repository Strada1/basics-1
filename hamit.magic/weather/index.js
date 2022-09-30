const storage = {
    saveFavoriteCity: (cities) => {
        localStorage.setItem('cities', JSON.stringify(cities));
    },
    getFavoriteCities: () => {
        try{
            return JSON.parse(localStorage.getItem('cities'));
        }
        catch(error){console.log(error)}
    },
    getCurrentCity: () => {
        try{
            return localStorage.getItem('currentCity');
        }
        catch{error}
    },
    saveCurrentCity: (city) => {
        localStorage.setItem('currentCity', city);
    },
}

let CITIES = storage.getFavoriteCities() || [];
// CITIES = Array.isArray(CITIES) ? CITIES : [CITIES];
let currentCity = storage.getCurrentCity();

document.addEventListener('DOMContentLoaded', () => {
    if (CITIES) {
        for (e of CITIES) {
            drawFavoriteCity(e)
        }
    }
    sendWeatherRequest(currentCity);
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#test').addEventListener('submit', (e)=>{
        e.preventDefault();
        sendWeatherRequest();
    })
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.left__bottom-box').addEventListener('click', (e)=>{
        e.preventDefault();
        sendWeatherRequest();
    })
});

async function sendWeatherRequest(city = null) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = city || document.querySelector('#city__location').value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&lang=ru&units=metric&appid=${apiKey}`;
    try{
        response = await fetch(url);
    } catch(err) {
        console.log(err);
    }
    if (response.ok) {
        result = await response.json();
        draw(result);
    }
    else {
        alert(`Произошла ошибка: ${response.message}` );
    }
}

function clearAllChildren(myNode) {
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
function createChild(tag, className, content) {
    tag = document.createElement(tag);
    tag.className = className;
    if (Boolean(content)) tag.textContent = content;
    return tag;
}
function draw(data) {
    switch (document.activeElement.value) {
        case 'Details':
            drawDetaislBox(data);
            break;
        case 'Forecast':
            drawForecastBox(data);
            break;
        default:
            drawNowBox(data);
    }
}
function favorite(Node, city) {
    let input = createChild('input', 'favorite', '');
    input.src = `./img/favourite-icon.svg`;
    input.id = 'favorite';
    input.type = 'image';
    if (!CITIES.includes(city)) {
        input.alt =  'not favorite';
        input.id = 'notFavorite';
    }
    Node.append(input);
    input.addEventListener('click', () => editFavoriteCities(city));
}

function editFavoriteCities(city) {
    parent = document.querySelector('.favorite');
    if (CITIES.includes(city)) {
        delFavoriteCity(city);
    }
    else addFavoriteCity(city);
}

function drawDetaislBox(data) {
    storage.saveCurrentCity(data.name);
    let parent = document.querySelector('.weather');
    clearAllChildren(parent);
    let children = [createChild('span', 'city', data.name),
                    createChild('span', 'image', ''),
                    createChild('div', 'weather-details', '')];
    for (key of children) {
        parent.append(key);
    }
    favorite(children[0], data.name);
    let sunrise = new Date(data.sys.sunrise*1000);
    let sunset = new Date(data.sys.sunset*1000);
    let subChildren = [createChild('span', 'temperature', `Температура: ${data.main.temp} ℃`),
                     createChild('span', 'fills-like', `Ощущается: ${data.main.feels_like} ℃`),
                     createChild('span', 'subweather', `Погода: ${data.weather[0].main}`),
                     createChild('span', 'sunrise', `Восход: ${sunrise.getHours()}:${sunrise.getMinutes()}`),
                     createChild('span', 'sunset', `Закат: ${sunset.getHours()}:${sunset.getMinutes()}`)];
    let img = createChild('img', 'weather-image', '');
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    img.alt = data.weather[0].description;
    children[1].append(img);
    for (key of subChildren) {
        children[2].append(key);
    }
}

function drawForecastBox(data) {
    storage.saveCurrentCity(data.name);
    let parent = document.querySelector('.weather');
    clearAllChildren(parent);
    let test = createChild('span', 'city', data.name);
    parent.append(test);
    favorite(test, data.name);
}
function drawNowBox(data) {
    storage.saveCurrentCity(data.name);
    let parent = document.querySelector('.weather');
    clearAllChildren(parent);
    let child1 = createChild('span', 'degrees', `${data.main.temp} ℃`);
    let child2 = createChild('span', 'image', '');
    let child3 = createChild('span', 'city', data.name);
    let img = createChild('img', 'weather-image', '');
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    img.alt = data.weather[0].description;
    parent.append(child1);
    parent.append(child2);
    parent.append(child3);
    favorite(child3, data.name);
    child2.append(img);
    document.querySelector('#city__location').placeholder = data.name;
    document.querySelector('#city__location').value = data.name;
}
function drawFavoriteCity(city) {
    let parent = document.querySelector('.right__bottom-box');
    let button = createChild('button', 'delete', 'X');
    button.value = 'X';
    button.addEventListener('click', () => delFavoriteCity(city));
    let span = createChild('span', 'favorite-city', city);
    span.addEventListener('click', (event) => {
        currentCity = event.target.textContent.slice(0, -1);
        sendWeatherRequest(currentCity);
    });
    parent.append(span);
    span.append(button);
    // temp = document.querySelector('.favorite');
    // if (temp.textContent === city) temp.id = 'favorite';
    // else temp.id = 'notFavorite';
}
function addFavoriteCity(city) {
    CITIES.push(city);
    storage.saveFavoriteCity(CITIES);
    drawFavoriteCity(city);
    temp = document.querySelector('.favorite');
    temp.id = 'favorite';
}
function delFavoriteCity(city) {
    CITIES = CITIES.filter(item => item !== city);
    storage.saveFavoriteCity(CITIES);
    elements = document.querySelectorAll('.favorite-city');
    for (key of elements) {
        if (key.textContent === `${city}X`) {
            key.remove();
            
        }
    }
    temp = document.querySelector('.favorite');
    temp.id = 'notFavorite';
}