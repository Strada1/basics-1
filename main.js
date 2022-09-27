const ELEMENTS = {
  INPUT: document.querySelector('.search__input'),
  BTN: document.querySelector('.search__btn'),
  TEMPERATURE: document.querySelector('.now__temperature'),
  ICON_NOW: document.querySelector('.now__icon-img'),
  CITY_NOW: document.querySelector('.now__city'),
};
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
ELEMENTS.BTN.addEventListener('click', function (event) {
  event.preventDefault();
  let cityName = ELEMENTS.INPUT.value;
  let urlTemperature = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  checkCityName(cityName, urlTemperature);
});
function checkCityName(cityName, urlTemperature) {
  if (!cityName || !isNaN(cityName)) {
    alert('Enter a correct city');
  } else {
    changeNow(urlTemperature);
  }
}
function changeNow(urlTemperature) {
  let promiseCity = new Promise((resolve) => {
    fetch(urlTemperature).then((response) => {
      resolve(response.json());
    });
  });
  promiseCity.then((result) => {
    ELEMENTS.CITY_NOW.textContent = result.name;
  });
  promiseCity.then((result) => {
    ELEMENTS.TEMPERATURE.textContent = Math.round(result.main.temp) + '°';
  });
  promiseCity
    .then((result) => {
      let iconCode = result.weather[0].icon;
      let urlWeather = ` https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      ELEMENTS.ICON_NOW.src = urlWeather;
    })
    .catch(() => {
      alert('Error');
    });
}
