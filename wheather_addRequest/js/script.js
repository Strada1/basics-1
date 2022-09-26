const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'a6efa68218cab903e4bd5ea3af73853d';
const form = document.querySelector('form');
const cityName = document.querySelector('.input_User');
const FORM = document.querySelector('form');
const currentCity = document.querySelectorAll('.name__current_city');
const changeColorTabs = document.querySelector('.tabs__items');
const btnCurrent = document.querySelectorAll('.tab-item');
const currentWeatherIcon = document.querySelector('.images_current_weather');
const currentDegrees = document.querySelector('.current_degrees');
const feelsLike = document.querySelectorAll('.feels_like');

function addCity() {
  if (cityName.value) {
    const url = `${SERVER_URL}?q=${cityName.value}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        cityName.value = '';
        throw new Error('city is not found');
      })
      .then(data => {
        currentCity.forEach(item => {
          item.textContent = data.name;
        });
        currentDegrees.innerHTML = Math.round(data.main.temp) + `&deg;`;
        currentWeatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        feelsLike.forEach(item => {
          item.innerHTML = ` Feels like: ${Math.round(
            data.main.feels_like
          )}&deg;`;
        });
      })
      .catch(e => alert(e.message));
  }
}
FORM.addEventListener('submit', addCity);
changeColorTabs.addEventListener('click', e => {
  btnCurrent.forEach(item => {
    if (item === e.target || item === e.target.parentElement) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
