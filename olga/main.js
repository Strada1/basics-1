import {
  items,
  links,
  nameTown,
  temperatureTown,
  iconsMain,
  input,
  serverUrl,
  apiKey,
  favorites,
  arr,
  locationList,
  weatherList,
  feelsList,
  sunriseList,
  sunsetList,
} from "./val.js";

links.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    link(element);
  });
});
function link(el) {
  if (el.dataset.id) {
    items.forEach(function (item) {
      if (el.dataset.id === item.getAttribute("id")) {
        item.classList.add("active");
        links.forEach((elem) => elem.classList.remove("active"));
        el.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}

input.addEventListener("change", function () {
  url();
});

function changeTown(cityName = input.value) {
  return cityName;
}

function createTown(info) {
  let town;
  let temperature;
  let feelslike;
  let weather;
  let sunrise;
  let sunset;
  town = info.name;
  temperature = parseInt(info.main.temp);
  iconsMain.src = `http://openweathermap.org/img/wn/${info.weather[0]["icon"]}@4x.png`;
  weather = info.weather[0].main;
  weatherList.textContent = weather;
  feelslike = parseInt(info.main.feels_like);
  sunrise = new Date(info.sys.sunrise * 1000);
  sunriseList.textContent = sunrise.toLocaleTimeString();
  sunset = new Date(info.sys.sunset * 1000);
  sunsetList.textContent = sunset.toLocaleTimeString();
  elements(feelsList, feelslike);
  elements(nameTown, town);
  elements(temperatureTown, temperature);
  localFavoritescities("main", {
    town: town,
    temperature: temperature,
    icon: `http://openweathermap.org/img/wn/${info.weather[0]["icon"]}@4x.png`,
  });
}
let localMainCity = JSON.parse(localStorage.getItem("main"));
if (localMainCity !== null) {
  elements(nameTown, localMainCity.town);
  elements(temperatureTown, localMainCity.temperature);
  iconsMain.src = localMainCity.icon;
}
if (input.value === "") {
  input.value = localMainCity.town;
  url();
}
input.addEventListener("focus", function () {
  input.value = " ";
});
function url(city = changeTown()) {
  let url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
  let promise = fetch(url)
    .then((response) => response.json())
    .then((result) => {
      createTown(result);
      fav(result);
      createTown(result);
    })
    .catch((err) => alert(err));
}

function elements(el, value) {
  el.forEach((item) => (item.textContent = value));
  return;
}

function fav(info) {
  favorites.addEventListener("click", function () {
    if (arr.indexOf(info.name) === -1) {
      arr.push(info.name);
      localFavoritescities("cities", arr);
      render();
    }
  });
}

function localFavoritescities(nameLocal, value) {
  localStorage.setItem(nameLocal, JSON.stringify(value));
}
function createLi(city) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.className = "click";
  li.textContent = city;
  btn.textContent = "Click";
  li.dataset.town = city;
  btn.dataset.town = city;
  li.append(btn);
  locationList.appendChild(li);
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    parent.style.display = "none";
    del(parent.dataset.town);
  });
  li.addEventListener("click", function () {
    let town = this.dataset.town;
    changeTown(town);
    url(town);
  });
}

function del(el) {
  arr.forEach(function (item, index, arr) {
    if (item === el) {
      localStorage.removeItem("cities");
      arr.splice(index, 1);
      localFavoritescities("cities", arr);
    }
  });
  render();
}

function render() {
  locationList.innerHTML = "";
  arr.forEach((item) => createLi(item));
}
render();
