const searchCity = document.querySelector("#searchCity");
let locations = [
  {
    name: "Amur",
    id: 2027748,
  },
  {
    name: "Samara",
    id: 499068,
  },
  {
    name: "Bali",
    id: 1650535,
  },
  {
    name: "Dane",
    id: 5250074,
  },
];

document.addEventListener("DOMContentLoaded", readyPage);

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
  const nowBtn = document.querySelector("#nowBtn");
  let temperature = Math.ceil(result.main.temp);
  nameCity.textContent = result.name;
  temperatureEl.innerHTML = temperature;
  iconEl.style.backgroundImage = `url('http://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png')`;
  nowBtn.addEventListener("click", () => addFavoriteCity(result, locations));
}

function deleteFavoriteCity(city, arr) {
  console.log("clicked", city);
  let newLocations = arr.filter((elem) => {
    return elem.id !== city.id;
  });
  locations = newLocations;
  console.log(locations);
  renderAddedLocations(locations);
}

function addFavoriteCity(city, locations) {
  console.log(city);
  let currentCity = locations.find((item) => item.id === city.id);

  if (!currentCity) {
    locations.push({
      name: city.name,
      id: city.id,
    });
  }
  renderAddedLocations(locations);
  console.log(locations);
}

// function kelvinToCelsius(kelvin) {
//   return Math.ceil(kelvin - 273, 15);
// }

function createElementWithClass(el, elCLassName) {
  const newElement = document.createElement(el);
  newElement.classList.add(elCLassName);
  return newElement;
}

function renderAddedLocations(list) {
  const locationslist = document.querySelector("#locationslist");
  locationslist.innerHTML = "";
  list.forEach((element) => {
    let listEl = createElementWithClass("li", "locations--item");
    let listElText = createElementWithClass("span", "locations--text");
    let listElBtn = createElementWithClass("button", "locations-btn");
    listElText.innerHTML = element.name;
    listEl.append(listElText, listElBtn);
    listEl.dataset.id = element.id;
    listElText.addEventListener("click", () => fetchCity(element.name));
    listElBtn.addEventListener("click", () =>
      deleteFavoriteCity(element, locations)
    );
    locationslist.append(listEl);
  });
}

function readyPage() {
  renderAddedLocations(locations);
}
