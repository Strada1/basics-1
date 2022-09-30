// const storage = {
//     saveFavoriteCity: (city) => {
//         const cities = localStorage.getItem('cities');
//         if (cities) cities.push(city);
//         else cities = [city];
//         localStorage.setItem('cities', cities);
//     },
//     getFavoriteCities: () => {
//         try{
//             return localStorage.getItem('cities');
//         }
//         catch{error}
//     },
//     getCurrentCity: () => {
//         try{
//             return localStorage.getItem('currentCity');
//         }
//         catch{error}
//     },
//     saveCurrentCity: (city) => {
//         localStorage.setItem('currentCity', city);
//     },
// }
// // storage.saveFavoriteCities(CITIES);
const CITIES = ['almaty'];
// const currentCity = storage.getCurrentCity();


async function sendWeatherRequest() {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = document.querySelector('input').value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&lang=ru&units=metric&appid=${apiKey}`;
    // const url = `https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`;
    // console.log(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`);
    try{
        console.log(20);
        response = await fetch(url);
        console.log(response);
    } catch(err) {
        debugger;
        console.log(err);
    }
    // console.log(20);
    // if (response.ok) {
    //     console.log(1)
    //     result = await response.json();
    //     draw(result);
    // }
    // else {
    //     alert(`Произошла ошибка: ${response.message}` );
    // }
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
    console.log(document.activeElement.value);
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

// function changeCityArray(city) {
//     console.log(2);
//     if (CITIES.includes(city)) {
//         index = CITIES.indexOf(city);
//         CITIES.splice(index, 1);
//     }
//     else CITIES.push(city);
// }

function favourite(Node, city) {
    let input = createChild('input', 'notFavourite', '');
    input.src = `./img/favourite-icon.svg`;
    input.type = 'image';
    input.alt = input.className;
    input.form = 'changeCityArray(${city}); return false';
    if (CITIES.includes(city)) {
        input.className =  'favourite';
    }
    Node.append(input);
    // input.addEventListener(click, () => drawCitiesList());
}

function drawDetaislBox(data) {
    storage.saveCurrentCity(data.name);
    let parent = document.querySelector('.weather');
    clearAllChildren(parent);
    let children = [createChild('span', 'city', data.name),
                    createChild('span', 'image', ''),
                    createChild('div', 'weather-deteils', '')];
    for (key of children) {
        parent.append(key);
    }
    favourite(child1, data.name);
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
    for (key of subChildren) {
        children[2].append(key);
    }
    children[1].append(img);
}

function drawForecastBox(data) {
    storage.saveCurrentCity(data.name);
    let parent = document.querySelector('.weather');
    clearAllChildren(parent);
    let test = createChild('span', 'city', data.name);
    parent.append(test);
    favourite(test, data.name);
}
function drawNowBox(data) {
    storage.saveCurrentCity(data.name);
    let parent = document.querySelector('.weather');
    clearAllChildren(parent);
    let child3 = createChild('span', 'city', data.name);
    let child1 = createChild('span', 'degrees', `${data.main.temp} ℃`);
    let child2 = createChild('span', 'image', '');
    let img = createChild('img', 'weather-image', '');
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    img.alt = data.weather[0].description;
    parent.append(child1);
    parent.append(child2);
    parent.append(child3);
    favourite(child3, data.name);
    child2.append(img);
    document.querySelector('#city__location').placeholder = data.name;
    document.querySelector('#city__location').value = data.name;
}
function drawCitiesList() {
    console.log(65);
    let parent = document.querySelector('.right__bottom-box');
    let span = createChild('span', 'delete', 'X');
    clearAllChildren(parent);
    for (i = 0; i<CITIES.length; i++) {
        let div = createChild('div', 'favorite-city', CITIES[i])
        parent.append(div).append(span);
    }
}