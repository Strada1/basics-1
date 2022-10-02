import { ErrorList } from './error.js';


const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const WEATHER_ICON_URL = 'http://openweathermap.org/img/wn/';
const WEATHER_ICON_RESOLUTION = '4x';
const WEATHER_ICON_EXTENSION = 'png';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';


const getDataForDetails = (data) => {
  return {
    cityName: data.name,
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    description: data.weather[0].description,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset
  };
};


const getLocationName = (data) => data.name;


const getDataForNowBlock = (data) => {
  return {
    temperature: Math.round(data.main.temp),
    cityName: data.name,
    iconSource: `${WEATHER_ICON_URL}${data.weather[0].icon}@${WEATHER_ICON_RESOLUTION}.${WEATHER_ICON_EXTENSION}`,
    weatherDescription: data.weather[0].description
  };
};


const getData = async (cityName, onSuccess, onFail) => {
  try {
    const url = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(ErrorList.GET_DATA_ERROR);
    }

    const result = await response.json();
    onSuccess(result);
  } catch (error) {
    onFail(error.message);
  }
};


export { getData, getDataForNowBlock, getLocationName, getDataForDetails };
