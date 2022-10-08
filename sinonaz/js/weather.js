const weahter = ({
  formSelector = `.js-form`,
  inputElement = `.js-input`,
  temperature = `.js-temp`,
  conditions = `.js-condition`,
  tags = {
    now: `.js-now`,
    details: `.js-details`,
    forecast: `.js-forecast`,
  },
}) => {
  const form = document.querySelector(formSelector);
  const input = form.querySelector(inputElement);
  const serverUrl = `http://api.openweathermap.org/data/2.5/weather`;
  const apiKey = `f660a2fb1e4bad108d6160b7f58c555f`;
  const iconUrl = `https://openweathermap.org/img/wn/`;
  const cityNameElements = form.querySelectorAll(`.js-city-name`);
  const tempElements = form.querySelectorAll(temperature);
  const icon = form.querySelector(`.js-icon`);
  const feelsLikeElement = form.querySelector(`.js-feel`);
  const conditionElement = form.querySelector(conditions);
  const sunset = form.querySelector(`.js-sunset`);
  const sunrise = form.querySelector(`.js-sunrise`);

  async function onFormSubmit(evt) {
    evt.preventDefault();
    const url = `${serverUrl}?q=${input.value}&appid=${apiKey}`;
    let response = await fetch(url);
    let json = await response.json();
    let dateSunset = new Date(json.sys.sunset * 1000);
    let dateSunrise = new Date(json.sys.sunrise * 1000);

    cityNameElements.forEach((cityName) => {
      cityName.textContent = json.name;
    });

    tempElements.forEach((temp) => {
      temp.innerHTML = Math.round(json.main.temp - 273) + `<span>&#176</span>`;
    });

    icon.src = `${iconUrl}${json.weather[0].icon}.png`;
    feelsLikeElement.innerHTML =
      Math.round(json.main.feels_like - 273) + `<span>&#176</span>`;
    conditionElement.textContent = json.weather[0].main;
    sunset.innerHTML = `${dateSunset.getMinutes()}:${dateSunset.getSeconds()}`;
    sunrise.innerHTML = `${dateSunrise.getMinutes()}:${dateSunrise.getSeconds()}`;

    console.log(json);
  }
  form.addEventListener(`submit`, onFormSubmit);
};
export default weahter;
