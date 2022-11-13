import closeSvg from '../images/delete.svg'
import arrowPng from '../images/arrow.png'

const UI_ELEMENTS = {
  city_search: document.querySelector('.form-city-search'),
  cityInput: document.querySelector('.city-input'),

  tabs_content: document.querySelector('.tabs-content'),

  tabId_now: document.querySelector('#now'),
  now_tab: document.querySelector('.tab-now'),
  city_weather_img: document.querySelector('.img-weather'),
  city_footer: document.querySelector('.footer-now'),
  city_name: document.querySelector('.city'),
  city_btn_like: document.querySelector('.like-btn'),

  tabId_details: document.querySelector('#details'),
  tab_details: document.querySelector('.tab-details'),
  details_content: document.querySelector('.details-content'),

  tabId_forecast: document.querySelector('#forecast'),
  forecast_tab: document.querySelector('.tab-forecast'),
  forecast_cards_container: document.querySelector('.container-cards'),
  forecast_card: document.querySelector('.card-forecast'),

  a_ref: document.querySelector('.a-ref'),

  added_location: document.querySelector('.content-sidebar'),
  city_favorite: document.querySelector('.city-name-added'),
  citiesDiv: undefined,

  tab: document.querySelectorAll('.tab'),
  btn_tab: document.querySelectorAll('.btn-nav'),
  tab_first: document.querySelector('.btn-nav')
}

const ERROR_LIST = {
  empty_search () {
    const errorText = 'You didn\'t enter a city name\n Try it again, please!'
    popUpError(errorText)
    UI_ELEMENTS.cityInput.value = ''
    UI_ELEMENTS.cityInput.autofocus()
  },
  API_errors (cod, errorMessage) {
    const errorText = `Error: ${cod} \nMessage: ${errorMessage}`
    popUpError(errorText)
  },
  errors_request () {
    const errorText = 'Unknown error \nPlease, inspect your correct request for internet connection'
    popUpError(errorText)
  }
}

function popUpError (errorText) {
  const popUp = document.querySelector('.pop_up')
  const popUpClose = document.querySelector('.pop_up_close')
  errorText = document.querySelector('.error_text')
  popUp.classList.add('pop-up-active')
  errorText.innerText = errorText
  const timerId = setTimeout(() => { popUp.classList.remove('pop-up-active') }, 10000)
  popUpClose.addEventListener('click', (event) => {
    event.preventDefault()
    UI_ELEMENTS.cityInput.autofocus()
    popUp.classList.remove('pop-up-active')
    clearTimeout(timerId)
  })
  UI_ELEMENTS.cityInput.autofocus()
}
const FOR_DATE = {
  optionsDate: { weekday: 'short', day: '2-digit', month: 'long' },
  optionsTime: { hour: '2-digit', minute: '2-digit' }
}

const HTML_ELEMENTS = {
  containerTempAndData: {
    name: 'containerTempAndData',
    tag: 'div',
    className: 'container-temp-data',
    innerText: undefined,
    src: undefined
  },
  dataTemperature: {
    name: 'dataTemperature',
    tag: 'div',
    className: 'data-temperature',
    innerText: undefined,
    src: undefined
  },
  timeNow: {
    name: 'timeNow',
    tag: 'div',
    className: 'time-now',
    innerText: undefined,
    src: undefined
  },
  timeNowDay: {
    name: 'timeNowDay',
    tag: 'div',
    className: 'time-now-day',
    innerText: undefined,
    src: undefined
  },
  timeNowTime: {
    name: 'timeNowTime',
    tag: 'div',
    className: 'time-now-time',
    innerText: undefined,
    src: undefined
  },
  imgCityWeather: {
    name: 'imgCityWeather',
    tag: 'img',
    className: 'img-weather',
    innerText: undefined,
    src: undefined
  },
  divFooterNow: {
    name: 'divFooterNow',
    tag: 'div',
    className: 'footer-now',
    innerText: undefined,
    src: undefined
  },
  cityNameField: {
    name: 'cityNameField',
    tag: 'span',
    className: 'city',
    innerText: undefined,
    src: undefined
  },
  btnLike: {
    name: 'btnLike',
    tag: 'button',
    className: 'like-btn',
    innerText: undefined,
    src: undefined,
    attribute: {
      type: 'button'
    }
  },
  detailsContentElement: {
    name: 'detailsContentElement',
    tag: 'li',
    className: undefined,
    innerText: undefined,
    src: undefined
  },
  cityNameDetails: {
    name: 'cityNameDetails',
    tag: 'div',
    className: 'city-details',
    innerText: undefined,
    src: undefined
  },
  detailsContentContainer: {
    name: 'detailsContentElement',
    tag: 'ul',
    className: 'details-content',
    innerText: undefined,
    src: undefined
  },
  cityHeaderForecast: {
    name: 'cityHeaderForecast',
    tag: 'div',
    className: 'city-header',
    innerText: undefined,
    src: undefined
  },
  cityNameForecast: {
    name: 'cityNameForecast',
    tag: 'span',
    className: 'city-forecast',
    innerText: undefined,
    src: undefined
  },
  cardsForecastContainer: {
    name: 'cardsForecastContainer',
    tag: 'div',
    className: 'container-cards',
    innerText: undefined,
    src: undefined
  },
  cardForecast: {
    name: 'cardForecast',
    tag: 'div',
    className: 'card-forecast',
    innerText: undefined,
    src: undefined
  },
  timesPeriod: {
    name: 'timesPeriod',
    tag: 'div',
    className: 'period',
    innerText: undefined,
    src: undefined
  },
  periodDate: {
    name: 'periodDate',
    tag: 'span',
    className: 'date',
    innerText: undefined,
    src: undefined
  },
  periodTime: {
    name: 'periodTime',
    tag: 'span',
    className: 'time',
    innerText: undefined,
    src: undefined
  },
  tempRealy: {
    name: 'tempRealy',
    tag: 'div',
    className: 'temp-realy',
    innerText: undefined,
    src: undefined
  },
  temperature: {
    name: 'temperature',
    tag: 'span',
    className: 'temperature',
    innerText: undefined,
    src: undefined
  },
  weatherStatus: {
    name: 'weatherStatus',
    tag: 'span',
    className: 'weather-status',
    innerText: undefined,
    src: undefined
  },
  tempFeels: {
    name: 'tempFeels',
    tag: 'div',
    className: 'temp-feels',
    innerText: undefined,
    src: undefined
  },
  temperatureFeels: {
    name: 'temperatureFeels',
    tag: 'span',
    className: 'temperature-feels',
    innerText: undefined,
    src: undefined
  },
  cityMarkBtn: {
    name: 'cityMarkBtn',
    tag: 'button',
    className: 'btn-mark',
    innerText: undefined,
    src: undefined,
    attribute: {
      type: 'button'
    }
  },
  cityMarkBtnImg: {
    name: 'cityMarkBtnImg',
    tag: 'img',
    className: 'img-mark',
    innerText: undefined,
    src: arrowPng
  },
  cityName: {
    name: 'cityName',
    tag: 'span',
    className: 'city-name-added',
    innerText: undefined,
    src: undefined
  },
  cityDeleteBtn: {
    name: 'cityDeleteBtn',
    tag: 'button',
    className: 'btn-delete',
    innerText: undefined,
    src: undefined,
    attribute: {
      type: 'button'
    }
  },
  cityDeleteBtnImg: {
    name: 'cityDeleteBtnImg',
    tag: 'img',
    className: 'img-delete',
    innerText: undefined,
    src: closeSvg
  },

  objImg: {
    name: 'imgCard',
    tag: 'img',
    className: 'img-card',
    innerText: undefined,
    src: undefined
  }
}

export { UI_ELEMENTS, ERROR_LIST, HTML_ELEMENTS, FOR_DATE }
