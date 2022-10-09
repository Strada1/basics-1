import {
    tabs,
    tabsContent,
    form,
    serverUrl,
    input,
    apiKey,
    nowTemperature,
    nowTemperatureDetails,
    nowNameCity,
    parentForImage,
    addedButton,
    parentFavoriteCity,
    nameCityDetails,
    feelsLikeDetails,
    wheather,
    sunriceValue,
    sunsetValue,
} from "./value.js";
let result = "";

tabs.forEach(function (item, index) {
    tabs[0].classList.add('active');
    tabsContent[0].classList.add('active');
    tabs[index].addEventListener("click", function () {
        tabs.forEach(function (item, indexin) {
            tabs[indexin].classList.remove('active');
            tabsContent[indexin].classList.remove('active');
        })
        tabs[index].classList.add('active');
        tabsContent[index].classList.add('active');
    });
})

form.addEventListener("submit", function () {
    showThisCity(input.value);
});

addedButton.addEventListener("click", function () {
    addedFavoriteCity(nowNameCity.innerHTML);
    addedCityToLocalStorage(nowNameCity.innerHTML);
});

let list = JSON.parse(localStorage.getItem("favoritesCity"));

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
            addedCityToLocalStorage(nameCity)
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

function covertData(data) {
    return new Date(data * 1000).toLocaleTimeString('en-US');
};

function showThisCity(nameCity) {
    const url = `${serverUrl}?q=${nameCity}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(function (result) {
            return result.json();
        }).then(function (result) {
            let {
                main: {
                    temp,
                    feels_like,
                },
                weather: {
                    0: {
                        main,
                    }
                },
                sys: {
                    sunrise,
                    sunset,
                }
            } = result;
            sunriceValue.textContent = covertData(sunrise);
            sunsetValue.textContent = covertData(sunset);
            nowTemperature.textContent = Math.round(temp);
            nowTemperatureDetails.textContent = Math.round(temp);
            feelsLikeDetails.textContent = Math.round(feels_like);
            wheather.textContent = main;
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

render();