import {
  items,
  links,
  nameTown,
  temperatureTown,
  iconsMain,
  input,
  serverUrl,
  apiKey,
} from "./val.js";

let cl = false;
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
function changeTown() {
  let cityName = input.value;
  return cityName;
}
function url() {
  const url = `${serverUrl}?q=${changeTown()}&appid=${apiKey}&units=metric`;
  console.log(url);
  let promise = fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let town = result.name;
      let temperature = parseInt(result.main.temp);
      iconsMain.src = `http://openweathermap.org/img/wn/${result.weather[0]["icon"]}@4x.png`;
      elements(nameTown, town);
      elements(temperatureTown, temperature);
    })
    .catch((err) => alert(err));
}
function elements(arr, value) {
  arr.forEach((item) => (item.textContent = value));
}
