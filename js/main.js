const searchCity = document.querySelector("#searchCity");

searchCity.addEventListener("submit", getSearchValue);

function getSearchValue(event) {
  event.preventDefault();
  let searchField = document.querySelector("#searchField");
  let city = searchField.value;
  let checked = checkText(city);
}

function checkText(text) {
  if (text.length === 0 || text === "undefined") {
    alert("Введите город!");
  } else {
    fetchCity(text);
  }
}

async function fetchCity(city) {
  const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
  const cityName = city;
  const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

  await fetch(url).then((response) => {
    if (response.ok) {
      let json = response.json();
      json.then((result) => {
        renderResult(result);
      });
    } else {
      alert("Ошибка HTTP: " + res.status);
    }
  });
}

function renderResult(result) {
  const temperatureEl = document.querySelector("#nowTemperature");
  const iconEl = document.querySelector("#nowWeatherIcon");
  const nameCity = document.querySelector("#cityName");
  let temperature = Math.ceil(result.main.temp);
  nameCity.textContent = result.name;
  temperatureEl.innerHTML = temperature;
  iconEl.style.backgroundImage = `url('http://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png')`;
}

// function kelvinToCelsius(kelvin) {
//   return Math.ceil(kelvin - 273, 15);
// }
