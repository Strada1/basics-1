export { UI_ELEMENTS, ERROR_LIST, HTML_ELEMENTS };


const UI_ELEMENTS = {
    city_search: document.querySelector('.form-city-search'),
    city_input: document.querySelector('.city-input'),



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



    added_location: document.querySelector('.content-sidebar'),
    city_favorite: document.querySelector('.city-name-added'),
    citiesDiv: undefined,
  
    tab: document.querySelectorAll('.tab'),
    btn_tab: document.querySelectorAll('.btn-nav'),
    tab_first: document.querySelector('.btn-nav'),
};

const ERROR_LIST = {
    empty_search() {
        const errorText = 'You didn\'t enter a city name\n Try it again, please!';
        popUpError(errorText);
        UI_ELEMENTS.city_input.value = '';
        UI_ELEMENTS.city_input.autofocus;
        return;
    },
    API_errors(cod, errorMessage) {
        const errorText = `Error: ${cod} \nMessage: ${errorMessage}`;
        popUpError(errorText);
    },
    errors_request() { 
        const errorText = `Unknown error \nPlease, inspect your correct request for internet connection`;
        popUpError(errorText);
    },
}


function popUpError(errorText) {
    const pop_up = document.querySelector('.pop_up');
    const pop_up_close = document.querySelector('.pop_up_close');
    const error_text = document.querySelector('.error_text');
    pop_up.classList.add('pop-up-active');
    error_text.innerText = errorText;
    setTimeout(() => {pop_up.classList.remove('pop-up-active')}, 10000);
    pop_up_close.addEventListener('click', (event) => {
        event.preventDefault();
        pop_up.classList.remove('pop-up-active');
    });
}

const HTML_ELEMENTS = {
    detailsContentElement: {
        name: 'detailsContentElement',
        tag: 'li',
        className: undefined,
        innerText: undefined,
        src: undefined, 
    },
    cityNameDetails: {
        name: 'cityNameDetails',
        tag: 'div',
        className: 'city-details',
        innerText: undefined,
        src: undefined, 
    },
    detailsContentContainer: {
        name: 'detailsContentElement',
        tag: 'ul',
        className: 'details-content',
        innerText: undefined,
        src: undefined, 
    },
    cityHeaderForecast: {
        name: 'cityHeaderForecast',
        tag: 'div',
        className: 'city-header',
        innerText: undefined,
        src: undefined, 
    },
    cityNameForecast: {
        name: 'cityNameForecast',
        tag: 'span',
        className: 'city-forecast',
        innerText: undefined,
        src: undefined, 
    },
    cardsForecastContainer: {
        name: 'cardsForecastContainer',
        tag: 'div',
        className: 'container-cards',
        innerText: undefined,
        src: undefined,
    },
    cardForecast: {
        name: 'cardForecast',
        tag: 'div',
        className: 'card-forecast',
        innerText: undefined,
        src: undefined,
    },
    timesPeriod: {
        name: 'timesPeriod',
        tag: 'div',
        className: 'period',
        innerText: undefined,
        src: undefined,
    },
    periodDate: {
        name: 'periodDate',
        tag: 'span',
        className: 'date',
        innerText: undefined,
        src: undefined,
    },
    periodTime: {
        name: 'periodTime',
        tag: 'span',
        className: 'time',
        innerText: undefined,
        src: undefined,
    },
    tempRealy: {
        name: 'tempRealy',
        tag: 'div',
        className: 'temp-realy',
        innerText: undefined,
        src: undefined,
    },
    temperature: {
        name: 'temperature',
        tag: 'span',
        className: 'temperature',
        innerText: undefined,
        src: undefined,
    },
    weatherStatus: {
        name: 'weatherStatus',
        tag: 'span',
        className: 'weather-status',
        innerText: undefined,
        src: undefined,
    },
    tempFeels: {
        name: 'tempFeels',
        tag: 'div',
        className: 'temp-feels',
        innerText: undefined,
        src: undefined,
    },
    temperatureFeels: {
        name: 'temperatureFeels',
        tag: 'span',
        className: 'temperature-feels',
        innerText: undefined,
        src: undefined,
    },
    cityMarkBtn: {
        name: 'cityMarkBtn',
        tag: 'button',
        className: 'btn-mark',
        innerText: undefined,
        src: undefined,
        attribute: {
            type: 'button',
        },
    },
    cityMarkBtnImg: {
        name: 'cityMarkBtnImg',
        tag: 'img',
        className: 'img-mark',
        innerText: undefined,
        src: './images/arrow.png',
    },
    cityName: {
        name: 'cityName',
        tag: 'span',
        className: 'city-name-added',
        innerText: undefined,
        src: undefined,
    },
    cityDeleteBtn: {
        name: 'cityDeleteBtn',
        tag: 'button',
        className: 'btn-delete',
        innerText: undefined,
        src: undefined,
        attribute: {
            type: 'button',
        },
    },
    cityDeleteBtnImg: {
        name: 'cityDeleteBtnImg',
        tag: 'img',
        className: 'img-delete',
        innerText: undefined,
        src: './images/close.svg',
    },

    objImg: {
        name: 'imgCard',
        tag: 'img',
        className: 'img-card',
        innerText: undefined,
        src: undefined,
    },
}

